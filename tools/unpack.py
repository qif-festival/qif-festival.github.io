#!/usr/bin/env python3
"""Ré-importe un export « site hors ligne » du projet de design dans ce dépôt.

    python3 tools/unpack.py ~/Downloads/"QiF 2026 - Site (hors ligne).html"

L'export est une page auto-extractible : un manifeste d'assets encodés en
base64 + gzip, et le HTML du site. Ce script en ressort un projet éditable —
assets sous public/, CSS sous src/styles/, composants sous src/.

⚠ Les titres sémantiques (h1/h2) ajoutés à la main dans src/sections*.jsx
sont écrasés à chaque ré-import : voir la section « Ré-importer » du README.
"""
import sys, re, json, os, shutil, base64, gzip

if len(sys.argv) < 2:
    sys.exit("usage: python3 tools/unpack.py <export-hors-ligne.html>")

SRC = os.path.abspath(sys.argv[1])
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UNP = os.path.join(OUT, ".unpack-tmp")
os.makedirs(UNP, exist_ok=True)
s = open(SRC, encoding="utf-8").read()


def script(kind):
    return re.search(r'<script type="__bundler/%s"[^>]*>(.*?)</script>' % kind, s, re.S).group(1)

manifest = json.loads(script("manifest"))
ext      = json.loads(script("ext_resources"))
template = json.loads(script("template"))

id2uuid = {e["id"]: e["uuid"] for e in ext}
resids  = json.loads(re.search(r'window\.__resIds = (\{.*?\});', template, re.S).group(1))
path2uuid = {p: id2uuid[i] for p, i in resids.items() if i in id2uuid}

EXT = {"image/jpeg": ".jpg", "image/png": ".png", "image/svg+xml": ".svg",
       "font/woff2": ".woff2", "text/javascript": ".js", "application/javascript": ".js"}

for d in ["src/styles", "src/vendor", "public/assets", "public/fonts"]:
    os.makedirs(os.path.join(OUT, d), exist_ok=True)

def unpacked(uuid):
    return os.path.join(UNP, uuid + EXT[manifest[uuid]["mime"]])

# ---------- 1. assets : chemins d'origine ----------
def clean(p):
    if p.startswith("../../"):
        return p[6:]                      # assets/photos/x.png
    if p.startswith("./"):
        return "assets/team/" + p[2:]     # portraits d'équipe
    return p.lstrip("/")

resmap = {}
for path, uuid in path2uuid.items():
    dest_rel = clean(path)
    dest = os.path.join(OUT, "public", dest_rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    shutil.copyfile(unpacked(uuid), dest)
    resmap[path] = "/" + dest_rel

# ---------- 2. polices ----------
css_blocks = re.findall(r"<style>(.*?)</style>", template, re.S)
tokens_css, page_css = css_blocks[0], css_blocks[1] if len(css_blocks) > 1 else ""

def slug(x):
    return re.sub(r"[^a-z0-9]+", "-", x.lower()).strip("-")

font_renames = {}
for m in re.finditer(
        r'@font-face\s*\{[^}]*?font-family:\s*"([^"]+)"[^}]*?url\("([0-9a-f-]{36})"\)[^}]*?'
        r'font-weight:\s*(\d+)[^}]*?font-style:\s*(\w+)', tokens_css, re.S):
    fam, uuid, weight, style = m.groups()
    name = "%s-%s%s.woff2" % (slug(fam), weight, "" if style == "normal" else "-italic")
    shutil.copyfile(unpacked(uuid), os.path.join(OUT, "public/fonts", name))
    font_renames[uuid] = "/fonts/" + name

# autres uuid référencés dans le CSS (texture de grain, etc.)
misc = {}
for uuid in set(re.findall(r'url\("([0-9a-f-]{36})"\)', tokens_css + page_css)):
    if uuid in font_renames or uuid not in manifest:
        continue
    name = "noise" + EXT[manifest[uuid]["mime"]]
    shutil.copyfile(unpacked(uuid), os.path.join(OUT, "public/assets", name))
    misc[uuid] = "/assets/" + name

for uuid, url in {**font_renames, **misc}.items():
    tokens_css = tokens_css.replace('url("%s")' % uuid, 'url("%s")' % url)
    page_css   = page_css.replace('url("%s")' % uuid, 'url("%s")' % url)

open(os.path.join(OUT, "src/styles/tokens.css"), "w", encoding="utf-8").write(tokens_css.strip() + "\n")
open(os.path.join(OUT, "src/styles/page.css"),   "w", encoding="utf-8").write(page_css.strip() + "\n")

# ---------- 3. table des ressources ----------
lines = ",\n".join('  %s: %s' % (json.dumps(k), json.dumps(v)) for k, v in sorted(resmap.items()))
open(os.path.join(OUT, "src/resources.js"), "w", encoding="utf-8").write(
"""// Table des ressources : chemins du projet de design -> URLs servies.
// Générée par tools/unpack.py à partir de l'export du design.
export const RESOURCES = {
%s
};

export function RES(path) {
  return RESOURCES[path] || path;
}
""" % lines)

print("assets:", len(resmap), "| polices:", len(font_renames), "| divers:", len(misc))
print("tokens.css", len(tokens_css), "page.css", len(page_css))

# ---------- 4. sources JS ----------
def find_js(needle):
    for f in os.listdir(UNP):
        if f.endswith(".js"):
            head = open(os.path.join(UNP, f), encoding="utf-8", errors="ignore").read(4000)
            if needle in head:
                return os.path.join(UNP, f)
    raise SystemExit("bundle introuvable : " + needle)

DS   = find_js("@ds-bundle")
SEC1 = find_js("function SiteHeader")
SEC2 = find_js("function Infos")


# ---------- design system (sortie compilée, vendorée) ----------
ds = open(DS, encoding="utf-8").read()
exports = re.findall(r"__ds_ns\.(\w+) = __ds_scope\.\1;", ds)
header = """// VENDORÉ — sortie compilée du design system QiF.
// Ne pas éditer à la main : la source vit dans le projet de design.
// Ré-exporter puis relancer `python3 tools/unpack.py` pour mettre à jour.
//
// Le bundle attend React et RES en globales : on les pose avant de l'évaluer.
import React from "react";
import { RES } from "../resources.js";

const g = typeof window !== "undefined" ? window : globalThis;
g.React = g.React || React;
g.RES = RES;

"""
footer = "\n\nexport const {\n" + ",\n".join("  " + e for e in exports) + ",\n} = g.QIFDesignSystem_5be1b3;\n"
open(os.path.join(OUT, "src/vendor/qif-design-system.js"), "w", encoding="utf-8").write(header + ds + footer)
print("design system :", len(exports), "composants ->", ", ".join(exports))

# ---------- sections ----------
def convert(path, dest):
    src = open(path, encoding="utf-8").read()
    m = re.match(r"\s*const \{([^}]*)\} = window\.QIFDesignSystem_5be1b3;\s*", src)
    names = [n.strip() for n in m.group(1).split(",") if n.strip()]
    body = src[m.end():]
    funcs = re.findall(r"^function (\w+)", body, re.M)
    head = ('import React from "react";\n'
            'import { RES } from "./resources.js";\n'
            'import {\n' + ",\n".join("  " + n for n in names) + ',\n} from "./vendor/qif-design-system.js";\n\n')
    tail = "\nexport {\n" + ",\n".join("  " + f for f in funcs) + ",\n};\n"
    open(os.path.join(OUT, dest), "w", encoding="utf-8").write(head + body.strip() + "\n" + tail)
    return funcs

f1 = convert(SEC1, "src/sections.jsx")
f2 = convert(SEC2, "src/sections2.jsx")
print("sections.jsx  :", ", ".join(f1))
print("sections2.jsx :", ", ".join(f2))

shutil.rmtree(UNP, ignore_errors=True)
print("ré-import terminé — relancez `npm run build`")

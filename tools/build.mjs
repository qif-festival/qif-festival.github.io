// Build : bundle React + CSS, copie public/, injecte SITE_URL.
import * as esbuild from "esbuild";
import { cp, mkdir, readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = (process.env.SITE_URL || "https://qif-2026.pages.dev").replace(/\/$/, "");
// BASE_PATH : sous-dossier de service. Vide à la racine d'un domaine
// (Cloudflare Pages), "/qif-2026" sur une GitHub Page de projet.
const BASE = (process.env.BASE_PATH || "").replace(/\/$/, "");
const watch = process.argv.includes("--watch");

await mkdir(DIST, { recursive: true });
await cp(path.join(ROOT, "public"), DIST, { recursive: true });

// SITE_URL dans les fichiers texte copiés + le HTML
async function substitute(file) {
  const s = await readFile(file, "utf8");
  if (s.includes("%SITE_URL%")) await writeFile(file, s.replaceAll("%SITE_URL%", SITE_URL));
}
for (const f of ["robots.txt", "sitemap.xml"]) await substitute(path.join(DIST, f));

const html = (await readFile(path.join(ROOT, "src/index.html"), "utf8")).replaceAll("%SITE_URL%", SITE_URL);
await writeFile(path.join(DIST, "index.html"), html);

const options = {
  entryPoints: [path.join(ROOT, "src/main.jsx")],
  bundle: true,
  format: "iife",
  target: ["es2020"],
  jsx: "automatic",
  // Les polices et images sont servies depuis public/ : esbuild ne doit pas
  // tenter de résoudre les url(/fonts/...) et url(/assets/...) du CSS.
  external: ["/fonts/*", "/assets/*"],
  outfile: path.join(DIST, "app.js"),
  minify: !watch,
  sourcemap: watch,
  define: { "process.env.NODE_ENV": watch ? '"development"' : '"production"' },
  logLevel: "info",
};

// Préfixe toutes les URL absolues du site par BASE_PATH. Les chemins vivent
// dans trois endroits : les attributs du HTML, les url() du CSS, et la table
// RESOURCES compilée dans app.js — d'où une passe textuelle sur les trois.
async function applyBasePath() {
  if (!BASE) return;
  const re = /(["'(])\/(assets\/|fonts\/|app\.js|app\.css|sitemap\.xml|robots\.txt)/g;
  for (const f of ["index.html", "app.js", "app.css"]) {
    const file = path.join(DIST, f);
    const s = await readFile(file, "utf8");
    await writeFile(file, s.replace(re, `$1${BASE}/$2`));
  }
}

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log("watch actif — dist/ se met à jour à chaque sauvegarde");
} else {
  await esbuild.build(options);
  await applyBasePath();
  console.log("build ok →", path.relative(ROOT, DIST),
    "| SITE_URL =", SITE_URL, "| BASE_PATH =", BASE || "(racine)");
}

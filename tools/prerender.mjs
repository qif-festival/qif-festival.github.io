// Pré-rendu : rend l'App avec react-dom/server et fige le HTML produit dans
// dist/index.html.
//
// C'est ce qui rend le site indexable : Google reçoit le contenu dans la
// réponse HTML au lieu de devoir exécuter React pour le découvrir. Au
// chargement, main.jsx détecte ce HTML et l'hydrate au lieu de tout re-rendre.
//
// Pourquoi Node et pas une capture du DOM dans un navigateur : le navigateur
// renormalise les attributs (`display:block` devient `display: block;`), et le
// site est entièrement en styles inline. React verrait une différence sur
// chaque élément, rejetterait le HTML pré-rendu et referait tout le rendu.
// react-dom/server sérialise exactement comme le client, donc ça colle.
import * as esbuild from "esbuild";
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const TMP = path.join(DIST, ".entry-server.cjs");

// Le design system vendoré s'installe sur `window`. Dans Node il n'y en a pas :
// on l'aiguille vers globalThis avant d'évaluer le module.
globalThis.window = globalThis.window || globalThis;

await esbuild.build({
  entryPoints: [path.join(ROOT, "src/entry-server.jsx")],
  bundle: true,
  format: "cjs",
  platform: "node",
  target: ["node20"],
  jsx: "automatic",
  loader: { ".css": "empty" },
  outfile: TMP,
  logLevel: "warning",
});

// CJS : react-dom/server fait un require("stream") que le format ESM ne sait pas résoudre.
const { render } = createRequire(import.meta.url)(TMP);
const rendered = render();
await rm(TMP, { force: true });

const file = path.join(DIST, "index.html");
const html = await readFile(file, "utf8");
if (!html.includes('<div id="root"></div>')) {
  throw new Error("index.html ne contient pas <div id=\"root\"></div> — déjà pré-rendu ?");
}
await writeFile(file, html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`));

// Contrôles : ce sont exactement les points qui décident de l'indexation.
const count = (re) => (rendered.match(re) || []).length;
const texte = rendered.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const imgs = count(/<img\b/g);
const sansAlt = count(/<img\b(?![^>]*\balt=)[^>]*>/g);

console.log("pré-rendu ok");
console.log("  h1        :", count(/<h1\b/g));
console.log("  h2        :", count(/<h2\b/g));
console.log("  images    :", imgs, `(${sansAlt} sans attribut alt)`);
console.log("  texte     :", texte.length, "caractères");
console.log("  index.html:", (((await readFile(file)).length) / 1024).toFixed(0), "Ko");

if (!count(/<h1\b/g) || texte.length < 1000) {
  throw new Error("pré-rendu suspect : titre ou contenu manquant");
}

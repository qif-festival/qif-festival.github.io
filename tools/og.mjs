// Génère l'image de partage (Open Graph) à partir de la charte réelle :
// mêmes polices, mêmes dégradés, même mise en page que le hero.
// Sortie : public/assets/og.jpg (1200x630), à committer.
//
//   npm run og
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync, statSync, createReadStream } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUB = path.join(ROOT, "public");
const PORT = 4320;

const MIME = { ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".woff2": "font/woff2", ".html": "text/html" };

const tokens = await readFile(path.join(ROOT, "src/styles/tokens.css"), "utf8");

const card = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><style>
${tokens}
html,body{margin:0;padding:0}
body{width:1200px;height:630px;overflow:hidden;background:var(--grad-sky-pale);
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative}
.badge{background:var(--qif-pink);color:var(--qif-white-pink);font-family:var(--font-body);
  font-style:italic;font-weight:700;font-size:26px;padding:8px 26px;transform:rotate(-4deg);margin-bottom:14px}
.l1{font-family:var(--font-display);font-weight:700;font-size:118px;line-height:.84;
  color:var(--qif-pink);letter-spacing:-.01em}
.l2{font-family:var(--font-display-alt);font-style:italic;font-size:84px;line-height:1.06;
  background-image:var(--grad-blob);-webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;transform:rotate(-2.5deg);margin:-.06em 0}
.l3{font-family:var(--font-display);font-weight:700;font-size:92px;line-height:.84;
  color:var(--qif-pink);letter-spacing:-.01em;padding-top:12px}
.foot{font-family:var(--font-body);font-style:italic;font-size:27px;color:var(--qif-pink-hot);margin-top:26px}
.alien{position:absolute;width:300px;pointer-events:none}
.a1{right:-40px;top:60px;transform:rotate(-6deg)}
.a2{left:-46px;top:34px;transform:rotate(8deg) scaleX(-1)}
</style></head><body>
<img class="alien a1" src="/assets/alien2.png" alt="">
<img class="alien a2" src="/assets/alien2.png" alt="">
<div class="badge">Sam. 12 SEPT. 2026 — Villeurbanne</div>
<div class="l1">QUE·ER</div>
<div class="l2">interstellaire</div>
<div class="l3">FESTIVAL</div>
<div class="foot">de 15H00 à 2H00 — 36 rue Emile Decorps</div>
</body></html>`;

const server = createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    return res.end(card);
  }
  const p = path.join(PUB, url);
  if (!p.startsWith(PUB) || !existsSync(p) || statSync(p).isDirectory()) return res.writeHead(404).end();
  res.writeHead(200, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
  createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(PORT, r));

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: process.env.NO_SANDBOX ? ["--no-sandbox"] : [],
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: "jpeg", quality: 88 });
await browser.close();
server.close();

const out = path.join(PUB, "assets/og.jpg");
await writeFile(out, buf);
console.log("og.jpg écrit —", (buf.length / 1024).toFixed(0), "Ko");

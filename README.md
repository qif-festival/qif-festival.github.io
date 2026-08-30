# QiF 2026 — Queer interstellaire Festival

Site de l'édition 2026, **samedi 12 septembre 2026**, 36 rue Emile Decorps à
Villeurbanne.

Site statique **pré-rendu** : le contenu est présent dans le HTML servi, pas
produit par JavaScript au chargement. C'est ce qui le rend indexable. React
prend le relais côté client pour les parties interactives.

## Démarrer

```bash
npm install
npm run build     # -> dist/
npm run serve     # http://localhost:4173
```

| Commande | Effet |
|---|---|
| `npm run dev` | build en watch, sans pré-rendu (itération rapide) |
| `npm run build` | build complet + pré-rendu → `dist/` |
| `npm run og` | régénère `public/assets/og.jpg` (nécessite `npx playwright install chromium`) |
| `npm run serve` | sert `dist/` en local |

Le test qui compte avant une mise en ligne : ouvrir `dist/` servi, désactiver
JavaScript dans les devtools, recharger. La page doit être complète.

## Déployer

`dist/` est un dossier statique. Deux variables pilotent le build :

| Variable | Rôle | Exemple |
|---|---|---|
| `SITE_URL` | URL canonique, Open Graph, sitemap, JSON-LD | `https://qif-festival.fr` |
| `BASE_PATH` | sous-dossier de service, vide à la racine | `/qif-2026` |

**GitHub Pages** — automatique. `.github/workflows/deploy.yml` construit et
publie à chaque push sur `main`, en renseignant `SITE_URL` et `BASE_PATH`
tout seul. Rien à configurer côté build. Il suffit d'activer Pages sur le
dépôt avec la source « GitHub Actions ».

**Cloudflare Pages** — glisser-déposer de `dist/`, ou branché sur le dépôt
avec la commande `npm run build`, le dossier `dist`, et `SITE_URL` en
variable d'environnement.

**Nom de domaine** — si l'asso en prend un, le site passe à la racine :
`BASE_PATH` redevient vide et `SITE_URL` prend le domaine.

## Structure

```
src/
  index.html      en-tête SEO : title, description, Open Graph, JSON-LD Event
  App.jsx         l'arbre de composants, partagé client et pré-rendu
  main.jsx        point d'entrée navigateur, hydratation
  entry-server.jsx point d'entrée du pré-rendu
  sections.jsx    en-tête, hero, programme
  sections2.jsx   infos pratiques, team, anciennes éditions, pied de page
  resources.js    table chemins du design -> URLs servies
  styles/         tokens.css (charte) + page.css (animations, responsive)
  vendor/         design system compilé — ne pas éditer à la main
public/           servi tel quel : assets, polices, robots.txt, sitemap.xml, _headers
tools/
  build.mjs       esbuild, copie de public/, injection de SITE_URL et BASE_PATH
  prerender.mjs   rend l'App avec react-dom/server et fige le HTML
  og.mjs          fabrique l'image de partage à partir de la charte
  unpack.py       ré-importe un export « site hors ligne » du design
```

## Ce qui a été ajouté par rapport à la maquette

Le rendu visuel est identique au pixel près. Les ajouts concernent
l'indexation et sont invisibles à l'œil.

- **Pré-rendu.** La maquette compilait le JSX dans le navigateur : le HTML
  servi ne contenait que `<div id="root"></div>`. Le contenu est désormais
  dans la réponse HTML — environ 3 300 caractères de texte, lisibles sans
  exécuter une ligne de JavaScript.
- **Titres sémantiques.** La maquette n'avait aucun `<h1>` ni `<h2>` : tout
  était en `<div>`. Le titre du hero est passé en `<h1>`, les quatre titres de
  section en `<h2>`, sans changer un pixel.
- **En-tête SEO** : `title`, `description`, URL canonique, Open Graph, et un
  bloc **JSON-LD `Event`** avec date, lieu, coordonnées GPS, organisateur et
  les trois tarifs — c'est ce qui permet à Google d'afficher la date et le
  lieu directement dans les résultats.
- `robots.txt`, `sitemap.xml`, favicon, image de partage 1200×630.

### Pourquoi le pré-rendu tourne dans Node et pas dans un navigateur

Première version : charger la page dans Chromium et capturer le DOM. Ça
produit un HTML correct mais **inhydratable**. Le navigateur renormalise les
attributs — `display:block` ressort en `display: block;` — et le site est
entièrement en styles inline. React voyait une différence sur chaque élément,
rejetait tout le HTML pré-rendu et refaisait le rendu complet, avec neuf
erreurs d'hydratation en console.

`react-dom/server` sérialise exactement comme le client. Zéro erreur, et le
pré-rendu ne dépend plus d'un navigateur — le déploiement en CI n'a qu'à
installer les dépendances npm.

## Points à connaître

- **Lecteur d'extraits.** L'appel **JSONP vers `api.deezer.com`** ne part
  qu'au premier clic sur « Écouter un extrait » : tant que personne n'écoute,
  aucune requête ne sort vers un tiers. Si Deezer ne répond pas, le bouton
  passe à « Extrait indisponible » au lieu de rester muet.
- **Carte OpenStreetMap** en `<iframe>` dans les infos pratiques, chargée au
  défilement (`loading="lazy"`).
- **Polices Adelphe Trouble** dans `public/fonts/`, fournies par le festival.
  Vérifier que la licence couvre la diffusion web avant mise en ligne.
- L'organisateur déclaré dans le JSON-LD est « Les Heures Joyeux·ses »,
  déduit de l'URL HelloAsso. À corriger dans `src/index.html` si la
  dénomination officielle diffère.

## Ré-importer un nouveau design

```bash
python3 tools/unpack.py ~/Downloads/"QiF 2026 - Site (hors ligne).html"
```

Le script écrase `src/sections*.jsx`, `src/styles/`, `src/vendor/`,
`src/resources.js` et `public/assets/`. Les `<h1>`/`<h2>` ajoutés à la main
sont donc perdus : les remettre après ré-import (`git diff` les montre), ou
mieux, faire l'ajout en amont pour qu'il survive au prochain export.

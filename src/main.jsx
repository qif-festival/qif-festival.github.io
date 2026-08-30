import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./styles/tokens.css";
import "./styles/page.css";

import { App } from "./App.jsx";

const root = document.getElementById("root");

// Le HTML est pré-rendu au build (tools/prerender.mjs) avec le même moteur
// que le client : on hydrate ce qui est déjà là. En dev, #root est vide.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}

// Point d'entrée du pré-rendu. Rendu par tools/prerender.mjs dans Node :
// react-dom/server produit exactement la même sérialisation que le client,
// ce qui est la condition pour que l'hydratation ne rejette rien.
import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App.jsx";

export function render() {
  return renderToString(<App />);
}

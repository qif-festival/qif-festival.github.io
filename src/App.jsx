import React from "react";

import { SiteHeader, Hero, Programme } from "./sections.jsx";
import { Infos, Equipe, Editions, SiteFooter } from "./sections2.jsx";

export function App() {
  const onNav = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const head = document.querySelector(".qif-head")?.offsetHeight || 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - head - 12, behavior: "smooth" });
    }
  };

  return (
    <div id="top">
      <SiteHeader onNav={onNav} />
      <Hero />
      <Programme />
      <Infos />
      <Equipe />
      <Editions />
      <SiteFooter />
    </div>
  );
}

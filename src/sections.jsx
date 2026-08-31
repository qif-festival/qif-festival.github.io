import React from "react";
import { RES } from "./resources.js";
import {
  GradientPanel,
  QifMark,
  DisplayTitle,
  Button,
  Star,
  ScheduleRow,
  Alien,
  Avatar,
} from "./vendor/qif-design-system.js";

function SiteHeader({ onNav }) {
  const links = [["programme", "Programme"], ["infos", "Infos pratiques"], ["team", "La team"], ["editions", "Anciennes éditions"]];
  const [open, setOpen] = React.useState(false);
  const go = (id) => { setOpen(false); onNav(id); };

  // Échap et clic hors de l'en-tête referment le menu. L'écouteur n'existe que
  // pendant l'ouverture, donc jamais pendant le pré-rendu.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onDown = (e) => { if (e.target instanceof Element && !e.target.closest(".qif-head")) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, [open]);

  const bar = { width: 22, height: 3, background: "var(--qif-pink-hot)", display: "block", transition: "transform .2s var(--ease-drift), opacity .2s var(--ease-drift)" };

  return (
    <header className="qif-head" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", padding: "8px 28px", gap: 28, background: "rgba(249,247,255,0.82)", backdropFilter: "blur(10px)" }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); go("top"); }} style={{ textDecoration: "none" }}>
        <QifMark className="qif-head-mark" size={54} />
      </a>
      <nav className="qif-nav" style={{ display: "flex", gap: 24, marginLeft: 8, minWidth: 0, flexShrink: 1, overflow: "hidden" }}>
        {links.map(([id, label]) => (
          <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); onNav(id); }}
            style={{ color: "var(--qif-pink-hot)", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18 }}>{label}</a>
        ))}
      </nav>
      <div className="qif-head-cta" style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "stretch" }}>
        <Button className="qif-benevole" size="md" variant="ghost" onClick={() => onNav("rejoindre")}
          style={{ boxSizing: "border-box", background: "var(--qif-white)", padding: "10px 20px", fontSize: 18, lineHeight: 1.15, border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)", whiteSpace: "nowrap", flexShrink: 0 }}>
          Devenir bénévole
        </Button>
        <Button size="md" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" style={{ boxSizing: "border-box", padding: "13px 25px", fontSize: 18, lineHeight: 1.15, whiteSpace: "nowrap", flexShrink: 0 }}>Billetterie</Button>
      </div>
      <button type="button" className="qif-burger" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="qif-menu"
        onClick={() => setOpen((v) => !v)}
        style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, width: 46, height: 44, padding: 0, flexShrink: 0, border: "3px dashed var(--qif-pink)", background: "var(--qif-white)", cursor: "pointer" }}>
        <span style={{ ...bar, transform: open ? "translateY(8px) rotate(45deg)" : "none" }} />
        <span style={{ ...bar, opacity: open ? 0 : 1 }} />
        <span style={{ ...bar, transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }} />
      </button>
      <div className="qif-scrim" onClick={() => setOpen(false)} aria-hidden="true"
        style={{ position: "absolute", top: "100%", left: 0, right: 0, height: "100vh", display: open ? "block" : "none", background: "rgba(31,6,83,0.45)" }} />
      {/* Toujours rendu, masqué en CSS : les liens de section restent dans le
          HTML servi au lieu d'apparaître au premier clic. */}
      <div id="qif-menu" className="qif-menu"
        style={{ position: "absolute", top: "100%", left: 0, right: 0, display: open ? "flex" : "none", flexDirection: "column", gap: 4, padding: "10px 14px 16px", background: "var(--qif-white)", borderTop: "3px dashed var(--qif-pink)", boxShadow: "0 14px 26px rgba(31,6,83,0.14)" }}>
        {links.map(([id, label]) => (
          <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); go(id); }}
            style={{ padding: "13px 6px", color: "var(--qif-pink-hot)", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 21, borderBottom: "1px solid var(--qif-pink-pale)" }}>{label}</a>
        ))}
        <Button size="md" variant="ghost" onClick={() => go("rejoindre")}
          style={{ boxSizing: "border-box", justifyContent: "center", marginTop: 10, padding: "13px 18px", fontSize: 19, background: "var(--qif-white)", border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)" }}>
          Devenir bénévole
        </Button>
        <Button size="md" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" onClick={() => setOpen(false)}
          style={{ boxSizing: "border-box", justifyContent: "center", padding: "14px 18px", fontSize: 19 }}>Billetterie</Button>
      </div>
    </header>
  );
}

function Marquee({ text, bg, color, rotate = 0, speed = 26, size = 28, style }) {
  const run = (text + " ✶ ").repeat(4);
  return (
    <div style={{ background: bg, transform: "rotate(" + rotate + "deg)", overflow: "hidden", padding: "10px 0", whiteSpace: "nowrap", width: "110vw", marginLeft: "-5vw", ...style }}>
      <div style={{ display: "inline-block", animation: "qif-marquee " + speed + "s linear infinite", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size, color, letterSpacing: "0.03em" }}>
        <span>{run}</span><span>{run}</span>
      </div>
    </div>
  );
}

function Floaty({ left, right, top, bottom, delay = 0, dur = 5, children }) {
  return (
    <div style={{ position: "absolute", left, right, top, bottom, animation: "qif-float " + dur + "s ease-in-out " + delay + "s infinite", pointerEvents: "none", zIndex: 1 }}>{children}</div>
  );
}

function Hero() {
  return (
    <div className="qif-hero" style={{ position: "relative", minHeight: "100vh", background: "var(--grad-sky-pale)", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(190px,24vh,280px) 0 130px", textAlign: "center" }}>
      <Floaty left="7%" top="15%" dur={6}><Star size={64} rotate={-14} color="var(--qif-pink)" /></Floaty>
      <Floaty right="9%" top="17%" delay={0.6} dur={5.5}><Star size={48} rotate={10} color="var(--qif-pink)" /></Floaty>
      <Floaty right="20%" top="60%" delay={2} dur={4}><Star size={26} rotate={-20} color="var(--qif-blue)" /></Floaty>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, zIndex: 3 }}>
        <Marquee text="DRAG SHOWS ✶ CONCERTS ✶ DJ SETS ✶ SCÈNE OUVERTE ✶ ATELIERS ✶ BROCANTE ✶ STANDS" bg="var(--qif-blue)" color="var(--qif-blue-deep)" rotate={1.6} speed={34} style={{ position: "absolute", bottom: 0 }} />
        <Marquee text="QUEER INTERSTELLAIRE FESTIVAL ✶ SAM. 12 SEPT. 2026 ✶ VILLEURBANNE" bg="var(--qif-pink)" color="var(--qif-white-pink)" rotate={-1.8} speed={28} style={{ position: "absolute", bottom: 0 }} />
      </div>
      <img className="qif-alien" src={RES("../../assets/alien2.png")} alt="" style={{ width: "38vw", maxWidth: 555, transform: "rotate(-6deg)", position: "absolute", right: "-2%", top: "18%", zIndex: 1, animation: "qif-float-r 7s ease-in-out .8s infinite", pointerEvents: "none" }} />
      <img className="qif-alien" src={RES("../../assets/alien2.png")} alt="" style={{ width: "33vw", maxWidth: 483, transform: "rotate(8deg) scaleX(-1)", position: "absolute", left: "2%", top: "11%", zIndex: 1, animation: "qif-float-l 6s ease-in-out 1.6s infinite", pointerEvents: "none" }} />
      <Star className="qif-deco" size={48} rotate={10} color="var(--qif-pink)" style={{ position: "absolute", left: 1232, top: 765 }} />
      <Star className="qif-deco" size={48} rotate={10} color="var(--qif-pink)" style={{ position: "absolute", left: 115, top: 833 }} />
      <Star className="qif-deco" size={93} rotate={22} color="var(--qif-blue)" style={{ position: "absolute", left: 719, top: 901 }} />
      <Star className="qif-deco" size={93} rotate={22} color="var(--qif-blue)" style={{ position: "absolute", left: 249, top: 819 }} />
      <Star className="qif-deco" size={93} rotate={22} color="var(--qif-blue)" style={{ position: "absolute", left: 807, top: 224 }} />
      <img className="qif-saucer" src={RES("../../assets/soucoupe.png")} alt="" style={{ position: "absolute", top: 92, left: "46%", width: "clamp(240px,26vw,426px)", animation: "qif-fly 22s linear -5.5s infinite", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-block", background: "var(--qif-pink)", color: "var(--qif-white-pink)", fontFamily: "var(--font-body)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(20px,2.4vw,30px)", padding: "8px 26px", transform: "rotate(-4deg)", marginBottom: 18 }}>Samedi 12 SEPTEMBRE</div>
        {/* Le visuel écrit « QUE·ER » avec un point médian : un moteur y lit
            « que » puis « er », le nom du festival n'est donc dans aucun titre.
            On transcrit le titre en texte hors du flux et on masque le décor
            aux technologies d'assistance, qui l'épelaient. Rien ne bouge. */}
        <h1 style={{ margin: 0, font: "inherit", color: "inherit" }}>
          <span className="qif-sr">Queer Interstellaire Festival 2026</span>
          <div aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(76px,15vw,212px)", lineHeight: 0.84, color: "var(--qif-pink)", letterSpacing: "-0.01em", marginBottom: 10 }}>QUE·ER</div>
          <div aria-hidden="true" style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(46px,10vw,142px)", lineHeight: 1.06, backgroundImage: "var(--grad-blob)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "var(--qif-pink)", transform: "rotate(-2.5deg)", margin: "-0.08em 0" }}>interstellaire</div>
          <div aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(76px,11vw,156px)", lineHeight: 0.84, color: "var(--qif-pink)", letterSpacing: "-0.01em", paddingTop: 18 }}>FESTIVAL</div>
        </h1>
        <div style={{ display: "flex", gap: 22, marginTop: 44, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <Button size="lg" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" style={{ fontSize: 26, padding: "18px 44px" }}>Billetterie</Button>
          <Button size="lg" variant="ghost" href="#programme" style={{ background: "var(--qif-white)", border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)", fontSize: 26, padding: "18px 44px" }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById("programme").offsetTop - 70, behavior: "smooth" }); }}>Le programme</Button>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 22, color: "var(--qif-pink-hot)", marginTop: 26, transform: "rotate(1.5deg)" }}>
          de 15h à 2h à Villeurbanne
        </div>
      </div>
    </div>
  );
}

// Un seul son a la fois sur toute la page. Le <audio> de Deezer et l'iframe
// Mixcloud n'ont aucun moyen de se voir : chaque lecteur inscrit ici sa
// fonction d'arret, et coupe les autres juste avant de demarrer.
const lecteurs = new Set();
function couperLesAutres(moi) {
  lecteurs.forEach((arreter) => { if (arreter !== moi) arreter(); });
}

function Preview({ trackId, dark }) {
  const [src, setSrc] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const audio = React.useRef(null);
  const autoplay = React.useRef(false);
  const arret = React.useRef(null);
  if (!arret.current) arret.current = () => { if (audio.current) audio.current.pause(); };

  React.useEffect(() => {
    lecteurs.add(arret.current);
    return () => { lecteurs.delete(arret.current); };
  }, []);

  // L'extrait n'est demandé à Deezer qu'au premier clic sur le bouton.
  // Tant que personne n'écoute, aucune requête ne part vers un tiers.
  const fetchPreview = () =>
    new Promise((resolve) => {
      const cb = "qifdz" + trackId;
      const sc = document.createElement("script");
      const done = (url) => { delete window[cb]; sc.remove(); resolve(url || null); };
      window[cb] = (res) => done(res && res.preview);
      sc.onerror = () => done(null);
      sc.src = "https://api.deezer.com/track/" + trackId + "?output=jsonp&callback=" + cb;
      document.head.appendChild(sc);
    });

  // L'élément <audio> n'existe qu'une fois l'URL connue : on lance la lecture
  // au rendu suivant, pas dans le gestionnaire de clic.
  React.useEffect(() => {
    if (!src || !autoplay.current || !audio.current) return;
    autoplay.current = false;
    couperLesAutres(arret.current);
    audio.current.play();
  }, [src]);

  const toggle = async () => {
    if (loading || failed) return;
    if (!src) {
      setLoading(true);
      autoplay.current = true;
      const url = await fetchPreview();
      setLoading(false);
      if (!url) { autoplay.current = false; setFailed(true); return; }
      setSrc(url);
      return;
    }
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      couperLesAutres(arret.current);
      a.play(); setPlaying(true);
    } else { a.pause(); setPlaying(false); }
  };

  const label = failed ? "Extrait indisponible"
    : loading ? "Chargement\u2026"
    : playing ? "Mettre en pause"
    : "\u00c9couter un extrait";

  return (
    <React.Fragment>
      <button type="button" className="qif-listen" onClick={toggle} disabled={loading || failed}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 10, border: "none", cursor: loading || failed ? "default" : "pointer", opacity: failed ? 0.55 : 1, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, padding: "7px 14px", color: dark ? "var(--qif-pink-hot)" : "var(--qif-white-pink)", background: dark ? "var(--qif-white)" : "var(--qif-pink-hot)" }}>
        <img src={RES((playing ? "../../assets/icons/pause" : "../../assets/icons/play") + (dark ? "-pink.svg" : ".svg"))} alt="" style={{ width: 18, height: 18, display: "block" }} />
        {label}
      </button>
      {src && <audio ref={audio} src={src} preload="none" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />}
    </React.Fragment>
  );
}


// Mixcloud n'expose aucun extrait audio par son API : elle ne renvoie que des
// metadonnees (duree, pochettes, tags). Impossible de faire comme pour Deezer,
// ou l'on recupere un MP3 joue dans un <audio> a nous. Le seul moyen d'ecouter
// sans quitter le site est leur lecteur embarque.
//
// Il n'est monte qu'au clic : tant que personne n'ecoute, aucune requete ne
// part vers Mixcloud, exactement comme le lecteur Deezer ci-dessus. Et sans
// JavaScript, le lien d'origine vers Mixcloud reste fonctionnel.
// Mixcloud n'expose aucun extrait audio par son API : elle ne renvoie que des
// metadonnees (duree, pochettes, tags). Impossible de faire comme pour Deezer,
// ou l'on recupere un MP3 joue dans un <audio> a nous. On pilote donc leur
// lecteur embarque via leur API widget, en le gardant hors de l'ecran : seul
// notre bouton est visible, identique a celui des autres extraits.
//
// Rien ne part vers Mixcloud tant que personne n'a clique — ni l'iframe, ni le
// script d'API. Sans JavaScript, le lien vers Mixcloud reste fonctionnel.
let apiMixcloud = null;
function chargerApiMixcloud() {
  if (apiMixcloud) return apiMixcloud;
  apiMixcloud = new Promise((resolve, reject) => {
    const sc = document.createElement("script");
    sc.src = "https://widget.mixcloud.com/media/js/widgetApi.js";
    sc.onload = () => resolve(window.Mixcloud);
    sc.onerror = () => { apiMixcloud = null; reject(new Error("api mixcloud")); };
    document.head.appendChild(sc);
  });
  return apiMixcloud;
}

function MixPreview({ url, nom }) {
  const [monte, setMonte] = React.useState(false);
  const [joue, setJoue] = React.useState(false);
  const [chargement, setChargement] = React.useState(false);
  const [echec, setEchec] = React.useState(false);
  const iframe = React.useRef(null);
  const widget = React.useRef(null);
  const arret = React.useRef(null);
  // pause() par l'API ne declenche pas l'evenement pause du widget : on remet
  // l'etat du bouton a la main, sinon il reste sur « Mettre en pause ».
  if (!arret.current) arret.current = () => { if (widget.current) { widget.current.pause(); setJoue(false); } };

  React.useEffect(() => {
    lecteurs.add(arret.current);
    return () => { lecteurs.delete(arret.current); };
  }, []);

  // Le widget ne peut etre relie qu'une fois l'iframe dans le DOM : on le
  // branche au rendu suivant, pas dans le gestionnaire de clic.
  React.useEffect(() => {
    if (!monte || widget.current || !iframe.current) return;
    let annule = false;
    chargerApiMixcloud()
      .then((Mixcloud) => {
        if (annule || !iframe.current) return;
        const w = Mixcloud.PlayerWidget(iframe.current);
        return w.ready.then(() => {
          if (annule) return;
          widget.current = w;
          // On coupe les autres au demarrage reel, pas au clic : l'autoplay de
          // l'iframe peut lancer le son sans passer par notre bouton.
          w.events.play.on(() => { setJoue(true); couperLesAutres(arret.current); });
          w.events.pause.on(() => setJoue(false));
          w.events.ended.on(() => setJoue(false));
          setChargement(false);
        });
      })
      .catch(() => { if (!annule) { setChargement(false); setEchec(true); } });
    return () => { annule = true; };
  }, [monte]);

  const basculer = (e) => {
    e.preventDefault();
    if (echec || chargement) return;
    if (!widget.current) { setChargement(true); setMonte(true); return; }
    if (joue) { widget.current.pause(); setJoue(false); return; }
    couperLesAutres(arret.current);
    widget.current.play();
  };

  const label = echec ? "Extrait indisponible"
    : chargement ? "Chargement…"
    : joue ? "Mettre en pause"
    : "Écouter un extrait";

  return (
    <React.Fragment>
      <a href={url} onClick={basculer} className="qif-listen" target="_blank" rel="noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 10, textDecoration: "none", cursor: echec ? "default" : "pointer", opacity: echec ? 0.55 : 1, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, padding: "7px 14px", color: "var(--qif-white-pink)", background: "var(--qif-pink-hot)" }}>
        <img src={RES(joue ? "../../assets/icons/pause.svg" : "../../assets/icons/play.svg")} alt="" style={{ width: 18, height: 18, display: "block" }} />
        {label}
      </a>
      {/* Hors de l'ecran plutot qu'en display:none ou en 0x0 : un iframe non
          rendu est suspendu par le navigateur et le son ne part jamais.
          autoplay demarre la lecture pendant que le geste utilisateur est
          encore valide, sans attendre le chargement du script d'API. */}
      {monte && (
        <iframe ref={iframe} title={"Lecteur Mixcloud : " + nom.replace(/\n/g, " ")}
          src={"https://player-widget.mixcloud.com/?feed=" + encodeURIComponent(new URL(url).pathname) + "&mini=1&hide_cover=1&light=1&autoplay=1"}
          allow="autoplay" aria-hidden="true" tabIndex={-1}
          style={{ position: "fixed", left: -10000, top: 0, width: 400, height: 60, border: 0 }} />
      )}
    </React.Fragment>
  );
}

function Programme() {
  const P = "../../assets/photos/";
  const aprem = [
    ["15h00 – 15H30", "Emma", "Broderie résistante", P + "prog-emma.png"],
    ["15H30 – 16h00", "Thomas", "Partage sur l'archive queer", P + "prog-thomas.png"],
    ["16h00 – 17H30", "Queerbaku", "Initiation au Shibari", P + "prog-queerbaku.png"],
    ["16H30 – 18h00", "Makatiass", "Twerk danse et culture", P + "prog-makatiass.png"],
    ["16H30 – 18h00", "Mille", "Atelier d'écriture", P + "prog-mille.png"],
  ];
  const soiree = [
    ["18H30 – 19H30", "Ici Modesta", "pop", [P + "prog-icimodesta.png"], ["Deezer", "4070195691", "https://www.deezer.com/fr/track/4070195691"]],
    ["19h30 – 20H30", "Blue Laika", "electro pop", [P + "prog-bluelaika.png"], ["Deezer", "3913333141", "https://www.deezer.com/fr/track/3913333141"]],
    ["21h – 22h", "June Exactly, Peaky Binder,\nMata Hata, Pétrole Désamour", "drag shows", [P + "prog-juneexactly.png", P + "prog-peakybinder.png", P + "prog-matahata.png", P + "prog-petrole.png"], null],
    ["22h – 23h", "Single ladies", "punk", [P + "prog-singleladies.png"], ["Deezer", "2120212977", "https://www.deezer.com/fr/track/2120212977"]],
    ["23h30 – 01h00", "DJ Fantastik", "afrobeats, electro, house, reggaeton", [P + "prog-djfantastik.png"], ["Mixcloud", null, "https://www.mixcloud.com/Fantastik_Dj/mix-fantastik-2/"]],
    ["01h00 – 02h30", "DJ Ravi·e", "latin beats, pop queer, reggaeton", [P + "prog-ravie.png"], ["Mixcloud", null, "https://www.mixcloud.com/DJRavie/la-mediane/"]],
  ];
  const timeChip = { fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, lineHeight: 1.25, color: "var(--qif-white-pink)", background: "var(--qif-pink)", padding: "12px 14px", flexShrink: 0, minWidth: 116, textAlign: "center" };
  return (
    <section id="programme" style={{ position: "relative", background: "var(--qif-white)", padding: "90px 24px 100px", overflow: "hidden" }}>
      <Star size={120} rotate={14} color="var(--qif-pink-pale)" style={{ position: "absolute", right: "-30px", top: "40px" }} />
      <div style={{ maxWidth: 940, margin: "0 auto", position: "relative" }}>
        <h2 style={{ margin: 0, font: "inherit", color: "inherit" }}><DisplayTitle top="" middle="programme" bottom="" align="left" scale={1.1} color="var(--qif-pink)" style={{ marginBottom: 46 }} /></h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ marginBottom: 2, background: "var(--qif-blue-pale)", padding: "22px 24px", display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 320px", fontFamily: "var(--font-body)", fontSize: 21, lineHeight: 1.35, color: "var(--qif-blue-deep)" }}>
              <span style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, color: "var(--qif-blue-deep)", display: "block", marginBottom: 4 }}>Billetterie ateliers</span>
              Les ateliers sont à réserver en plus de son billet, places limitées.
            </div>
            <Button size="md" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/inscriptions-ateliers-qif-2026" target="_blank" rel="noreferrer"><img src={RES("../../assets/icons/edit_note.svg")} alt="" style={{ width: 24, height: 24, display: "block" }} />Réserver un atelier</Button>
          </div>
          {aprem.map(([time, who, what, img], i) => (
            <div key={i} className="qif-row" style={{ display: "flex", alignItems: "stretch", gap: 12, transform: "rotate(" + (i % 2 ? 0.4 : -0.4) + "deg)" }}>
              <div className="qif-time" style={{ ...timeChip, display: "flex", alignItems: "center", justifyContent: "center" }}>{time}</div>
              <div style={{ flex: 1, display: "flex", alignItems: "stretch", background: "var(--qif-pink-pale)", padding: 0 }}>
                <div className="qif-prog-imgs" style={{ display: "grid", gridTemplateColumns: "1fr", gridAutoRows: "1fr", flexShrink: 0, alignSelf: "stretch", width: 148, minHeight: 84 }}>
                  <img src={RES(img)} alt={who + ", " + what} style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0, objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "12px 18px" }}>
                  <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1, color: "var(--qif-pink-hot)" }}>{who}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 21, color: "var(--qif-purple-deep)", marginTop: 3 }}>{what}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="qif-row" style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "stretch" }}>
          <div className="qif-time" style={{ ...timeChip, display: "flex", alignItems: "center", justifyContent: "center" }}>{"18H00 – 18H30"}</div>
          <div style={{ flex: 1, background: "var(--qif-pink-pale)", padding: "14px 22px" }}>
            <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1, color: "var(--qif-pink-hot)" }}>Scène ouverte</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 21, marginTop: 3, color: "var(--qif-purple-deep)" }}>inscriptions le jour J</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
          {soiree.map(([time, who, what, imgs, listen], i) => (
            <div key={i} className="qif-row" style={{ display: "flex", alignItems: "stretch", gap: 12, transform: "rotate(" + (i % 2 ? 0.4 : -0.4) + "deg)" }}>
              <div className="qif-time" style={{ ...timeChip, display: "flex", alignItems: "center", justifyContent: "center" }}>{time}</div>
              <div className="qif-act" style={{ flex: 1, display: "flex", flexDirection: "row-reverse", alignItems: "stretch", background: "var(--qif-pink-pale)" }}>
                <div style={{ flex: 1, padding: "16px 22px" }}>
                  <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1.1, whiteSpace: "pre-line", color: "var(--qif-pink-hot)" }}>{who}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 21, marginTop: 4, color: "var(--qif-purple-deep)" }}>{what}</div>
                  {listen && (listen[1] ? (
                    <Preview trackId={listen[1]} />
                  ) : (
                    <MixPreview url={listen[2]} nom={who} />
                  ))}
                </div>
                <div className="qif-prog-imgs" style={{ display: "grid", gridTemplateColumns: imgs.length > 1 ? "1fr 1fr" : "1fr", gridAutoRows: "1fr", flexShrink: 0, alignSelf: "stretch", width: 148 }}>
                  {/* imgs suit l'ordre des noms de `who` : on redonne a chaque
                      photo l'artiste qu'elle montre plutot qu'un alt vide. */}
                  {imgs.map((src, j) => (
                    <img key={j} src={RES(src)} alt={(who.replace(/\n/g, " ").split(/,\s*/)[j] || who.replace(/\n/g, " ")) + ", " + what} style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0, objectFit: "cover", display: "block" }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, background: "var(--qif-pink-pale)", padding: "14px 22px", fontFamily: "var(--font-body)", fontSize: 21, color: "var(--qif-purple-deep)" }}>
          <em style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 24, color: "var(--qif-pink-hot)" }}>+ les stands :</em> illustrations, livres, merch, prévention et brocante
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SiteHeader, Hero, Programme, Marquee });

export {
  SiteHeader,
  Marquee,
  Floaty,
  Hero,
  Preview,
  Programme,
};

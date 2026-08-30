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
  return (
    <header className="qif-head" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", padding: "8px 28px", gap: 28, background: "rgba(249,247,255,0.82)", backdropFilter: "blur(10px)" }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }} style={{ textDecoration: "none" }}>
        <QifMark size={54} />
      </a>
      <nav className="qif-nav" style={{ display: "flex", gap: 24, marginLeft: 8, minWidth: 0, flexShrink: 1, overflow: "hidden" }}>
        {links.map(([id, label]) => (
          <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); onNav(id); }}
            style={{ color: "var(--qif-pink-hot)", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18 }}>{label}</a>
        ))}
      </nav>
      <div className="qif-head-cta" style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "stretch" }}>
        <Button size="md" variant="ghost" onClick={() => onNav("rejoindre")}
          style={{ boxSizing: "border-box", background: "var(--qif-white)", padding: "10px 20px", fontSize: 18, lineHeight: 1.15, border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)", whiteSpace: "nowrap", flexShrink: 0 }}>
          <img src={RES("../../assets/icons/volunteer_activism-pink.svg")} alt="" style={{ width: 20, height: 20, display: "block" }} />Devenir bénévole
        </Button>
        <Button size="md" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" style={{ boxSizing: "border-box", padding: "13px 25px", fontSize: 18, lineHeight: 1.15, whiteSpace: "nowrap", flexShrink: 0 }}>Billetterie</Button>
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
        <div style={{ display: "inline-block", background: "var(--qif-pink)", color: "var(--qif-white-pink)", fontFamily: "var(--font-body)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(20px,2.4vw,30px)", padding: "8px 26px", transform: "rotate(-4deg)", marginBottom: 18 }}>Sam. 12 SEPT. 2026 — Villeurbanne</div>
        <h1 style={{ margin: 0, font: "inherit", color: "inherit" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(76px,15vw,212px)", lineHeight: 0.84, color: "var(--qif-pink)", letterSpacing: "-0.01em", marginBottom: 10 }}>QUE·ER</div>
          <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(46px,10vw,142px)", lineHeight: 1.06, backgroundImage: "var(--grad-blob)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "var(--qif-pink)", transform: "rotate(-2.5deg)", margin: "-0.08em 0" }}>interstellaire</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(76px,11vw,156px)", lineHeight: 0.84, color: "var(--qif-pink)", letterSpacing: "-0.01em", paddingTop: 18 }}>FESTIVAL</div>
        </h1>
        <div style={{ display: "flex", gap: 22, marginTop: 44, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <Button size="lg" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" style={{ fontSize: 26, padding: "18px 44px" }}>Billetterie</Button>
          <Button size="lg" variant="ghost" href="#programme" style={{ background: "var(--qif-white)", border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)", fontSize: 26, padding: "18px 44px" }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById("programme").offsetTop - 70, behavior: "smooth" }); }}>Le programme</Button>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 22, color: "var(--qif-pink-hot)", marginTop: 26, transform: "rotate(1.5deg)" }}>
          de 15H00 à 2H00 — 36 rue Emile Decorps
        </div>
      </div>
    </div>
  );
}

function Preview({ trackId, dark }) {
  const [src, setSrc] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const audio = React.useRef(null);
  const autoplay = React.useRef(false);

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
    document.querySelectorAll("audio").forEach((o) => { if (o !== audio.current) o.pause(); });
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
      document.querySelectorAll("audio").forEach((o) => { if (o !== a) o.pause(); });
      a.play(); setPlaying(true);
    } else { a.pause(); setPlaying(false); }
  };

  const label = failed ? "Extrait indisponible"
    : loading ? "Chargement\u2026"
    : playing ? "Mettre en pause"
    : "\u00c9couter un extrait";

  return (
    <React.Fragment>
      <button type="button" onClick={toggle} disabled={loading || failed}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 10, border: "none", cursor: loading || failed ? "default" : "pointer", opacity: failed ? 0.55 : 1, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, padding: "7px 14px", color: dark ? "var(--qif-pink-hot)" : "var(--qif-white-pink)", background: dark ? "var(--qif-white)" : "var(--qif-pink-hot)" }}>
        <img src={RES((playing ? "../../assets/icons/pause" : "../../assets/icons/play") + (dark ? "-pink.svg" : ".svg"))} alt="" style={{ width: 18, height: 18, display: "block" }} />
        {label}
      </button>
      {src && <audio ref={audio} src={src} preload="none" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />}
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
    ["23h30 – 01h00", "DJ Fantastik", "afro dembo baile funk raggarton cumbia pop", [P + "prog-djfantastik.png"], ["SoundCloud", null, "https://soundcloud.com/search?q=DJ%20Fantastik"]],
    ["01h00 – 02h30", "DJ Ravi·e", "afro dembo baile funk raggarton cumbia pop", [P + "prog-ravie.png"], ["SoundCloud", null, "https://soundcloud.com/search?q=DJ%20Ravi-e"]],
  ];
  const timeChip = { fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, lineHeight: 1.25, color: "var(--qif-white-pink)", background: "var(--qif-pink)", padding: "12px 14px", flexShrink: 0, minWidth: 116, textAlign: "center" };
  const partTitle = { fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(46px,6vw,80px)", lineHeight: 1, color: "var(--qif-pink)", margin: "0 0 26px" };
  return (
    <section id="programme" style={{ position: "relative", background: "var(--qif-white)", padding: "90px 24px 100px", overflow: "hidden" }}>
      <Star size={120} rotate={14} color="var(--qif-pink-pale)" style={{ position: "absolute", right: "-30px", top: "40px" }} />
      <div style={{ maxWidth: 940, margin: "0 auto", position: "relative" }}>
        <h2 style={{ margin: 0, font: "inherit", color: "inherit" }}><DisplayTitle top="" middle="programme" bottom="" align="left" scale={1.1} color="var(--qif-pink)" style={{ marginBottom: 46 }} /></h2>

        <div style={partTitle}></div>
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
              <div style={{ flex: 1, display: "flex", alignItems: "stretch", gap: 18, background: "var(--qif-pink-pale)", padding: 0 }}>
                <div style={{ width: 92, alignSelf: "stretch", flexShrink: 0, position: "relative", minHeight: 84 }}><img src={RES(img)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
                <div style={{ padding: "12px 18px 12px 0" }}>
                  <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1, color: "var(--qif-pink-hot)" }}>{who}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 21, color: "var(--qif-purple-deep)", marginTop: 3 }}>{what}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="qif-row" style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "stretch" }}>
          <div className="qif-time" style={{ ...timeChip, display: "flex", alignItems: "center", justifyContent: "center" }}>{"18H00\n18H30"}</div>
          <div style={{ flex: 1, background: "var(--qif-pink)", padding: "14px 22px", color: "var(--qif-white-pink)" }}>
            <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1 }}>Scène ouverte</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 21, marginTop: 3 }}>inscriptions le jour J</div>
          </div>
        </div>
        <div style={{ marginTop: 14, background: "var(--qif-pink-pale)", padding: "14px 22px", fontFamily: "var(--font-body)", fontSize: 21, color: "var(--qif-purple-deep)" }}>
          <em style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 24, color: "var(--qif-pink-hot)" }}>+ les stands :</em> illustrations, livres, merch, prévention et brocante
        </div>

        <div style={{ ...partTitle, margin: "64px 0 26px" }}></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {soiree.map(([time, who, what, imgs, listen], i) => (
            <div key={i} className="qif-row" style={{ display: "flex", alignItems: "stretch", gap: 12, transform: "rotate(" + (i % 2 ? 0.4 : -0.4) + "deg)" }}>
              <div className="qif-time" style={{ ...timeChip, display: "flex", alignItems: "center", justifyContent: "center" }}>{time}</div>
              <div className="qif-act" style={{ flex: 1, display: "flex", alignItems: "stretch", background: i % 2 ? "var(--qif-pink-pale)" : "var(--qif-pink)" }}>
                <div style={{ flex: 1, padding: "16px 22px" }}>
                  <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 27, lineHeight: 1.1, whiteSpace: "pre-line", color: i % 2 ? "var(--qif-pink-hot)" : "var(--qif-white-pink)" }}>{who}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 21, marginTop: 4, color: i % 2 ? "var(--qif-purple-deep)" : "var(--qif-white-pink)" }}>{what}</div>
                  {listen && (listen[1] ? (
                    <Preview trackId={listen[1]} dark={i % 2 === 0} />
                  ) : (
                    <a href={listen[2]} target="_blank" rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 10, textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, padding: "7px 14px", color: i % 2 ? "var(--qif-white-pink)" : "var(--qif-pink-hot)", background: i % 2 ? "var(--qif-pink-hot)" : "var(--qif-white)" }}>
                      <img src={i % 2 ? RES("../../assets/icons/play.svg") : RES("../../assets/icons/play-pink.svg")} alt="" style={{ width: 18, height: 18, display: "block" }} />
                      Écouter sur {listen[0]}
                    </a>
                  ))}
                </div>
                <div className="qif-prog-imgs" style={{ display: "flex", flexShrink: 0, alignSelf: "stretch", position: "relative", width: imgs.length > 1 ? 62 * imgs.length : 148 }}>
                  {imgs.map((src, j) => (
                    <img key={j} src={RES(src)} alt="" style={{ flex: 1, minWidth: 0, height: "100%", position: "absolute", top: 0, bottom: 0, left: (j * 100) / imgs.length + "%", width: 100 / imgs.length + "%", objectFit: "cover", display: "block" }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
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

import React from "react";
import { RES } from "./resources.js";
import {
  GradientPanel,
  DisplayTitle,
  Button,
  LinkTile,
  TeamMember,
  Avatar,
  Star,
  QifMark,
} from "./vendor/qif-design-system.js";

function Infos() {
  return (
    <section style={{ background: "var(--qif-pink-pale)", padding: "80px 24px" }}>
      <div id="infos" style={{ maxWidth: 900, margin: "0 auto", color: "var(--qif-pink-hot)" }}>
        <h2 style={{ margin: 0, font: "inherit", color: "inherit" }}><DisplayTitle top="" middle="infos pratiques" bottom="" align="left" scale={0.9} color="var(--qif-pink-hot)" style={{ marginBottom: 34 }} /></h2>
        <div className="qif-infos-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px", fontFamily: "var(--font-body)", fontSize: 22, lineHeight: 1.3 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 26 }}>Quand ?</div>
            <div>Sam. 12 SEPT. 2026, de 15H00 à 2H00</div>
            <Button size="md" href="https://www.facebook.com/events/5499551526935753/" target="_blank" rel="noreferrer" style={{ marginTop: 14, fontSize: 19, padding: "11px 22px" }}><img src={RES("../../assets/icons/event.svg")} alt="" style={{ width: 22, height: 22, display: "block" }} />L'event Facebook</Button>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 26 }}>Où ?</div>
            <div>36 rue Emile Decorps, Villeurbanne<br />(proche Pôle Pixel)</div>
            <Button size="md" href="https://www.google.com/maps/dir/?api=1&destination=36+rue+Emile+Decorps,+69100+Villeurbanne" target="_blank" rel="noreferrer" style={{ marginTop: 14, fontSize: 19, padding: "11px 22px" }}><img src={RES("../../assets/icons/directions.svg")} alt="" style={{ width: 22, height: 22, display: "block" }} />Y aller</Button>
          </div>
          <div></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 26 }}></div>
            <div></div>
          </div>
        </div>
        <div style={{ marginTop: 40, transform: "rotate(-0.4deg)" }}>
          <iframe
            title="Carte — 36 rue Emile Decorps, Villeurbanne"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.8909%2C45.7523%2C4.9069%2C45.7623&layer=mapnik&marker=45.75728%2C4.89891"
            style={{ display: "block", width: "100%", height: 340, border: "4px solid var(--qif-white)", boxSizing: "border-box", filter: "grayscale(1) sepia(1) hue-rotate(270deg) saturate(2.2) brightness(1.06)" }}
            loading="lazy"
          ></iframe>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 16, flexWrap: "wrap" }}>
            <a href="https://www.openstreetmap.org/?mlat=45.75728&mlon=4.89891#map=16/45.75728/4.89891" target="_blank" rel="noreferrer"
              style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 18, color: "var(--qif-pink-hot)" }}>
              36 rue Emile Decorps, Villeurbanne (Pôle Pixel)
            </a>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, color: "var(--qif-pink-hot)", margin: "48px 0 22px" }}><span style={{ fontFamily: "var(--font-body)", fontSize: 26, fontStyle: "normal", fontWeight: 700 }}>Nos tarifs</span></div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {[["réduit", "10€", "var(--qif-white)", "var(--qif-pink-hot)"], ["normal", "13,12€", "var(--qif-blue)", "var(--qif-white)"], ["soutien", "15€", "var(--qif-pink)", "var(--qif-white-pink)"], ["précaire", "sur demande", "var(--qif-white)", "var(--qif-blue-deep)"]].map(([label, price, bg, fg], i) => (
            <div key={i} style={{ background: bg, color: fg, padding: "16px 26px", minWidth: 150, transform: "rotate(" + (i % 2 ? 1.2 : -1.2) + "deg)" }}>
              <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: 24, lineHeight: 1 }}>{label}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: price.length > 6 ? 24 : 40, lineHeight: 1.1, marginTop: 4 }}>{price}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <Button size="md" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" target="_blank" rel="noreferrer">Prendre son billet sur HelloAsso</Button>
          <Button size="md" variant="ghost" href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/inscriptions-ateliers-qif-2026" target="_blank" rel="noreferrer" style={{ border: "3px dashed var(--qif-pink)", color: "var(--qif-pink-hot)" }}>Réserver un atelier</Button>
          <div style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 19, color: "var(--qif-pink-hot)", maxWidth: 420 }}>
            Les ateliers sont à réserver en plus de son billet.
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  const team = [
    [RES("./elea-mtaj0heb-4vd8.png"), "ELEA", "elle", "Co-organisatrice du festival\nPrésidente des Heures Joyeu..x·ses"],
    [RES("./frame-2609264-mtaj15y6-r7pt.png"), "MAN", "iel/accords masc ou neutres", "Co-organisateur du festival\nResponsable Programmation"],
    [RES("./mathi-mtaj2quy-ou48.png"), "MATHILDE", "elle", "Graphiste"],
    [RES("./anouch-mtaj34bs-seil.png"), "ANOUCHKA", "elle", "Responsable communication"],
  ];
  const technique = [
    [RES("../../assets/photos/tech-matt.png"), "MATT", "il", "Régisseur son"],
    [RES("../../assets/photos/tech-virginie.png"), "VIRGINIE", "elle", "Régisseuse lumière"],
    [RES("./fleur-mtfx33mw-6hzi.png"), "FLEUR", "elle", "Technicienne lumière"],
    [RES("./lucil-mtfx39ri-7rpy.png"), "LUCILE", "elle", "Technicienne lumière"],
  ];
  const Card = ({ title, people }) => (
    <div className="qif-card" style={{ flex: "1 1 380px", background: "var(--qif-white)", padding: "34px 30px 36px", boxShadow: "0 2px 0 var(--qif-blue)" }}>
      <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(34px,3.4vw,50px)", lineHeight: 1, color: "var(--qif-blue-deep)", marginBottom: 28 }}>{title}</div>
      <div className="qif-tm-list" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {people.map(([src, name, pronouns, role], i) => (
          <TeamMember key={i} src={RES(src)} name={name} pronouns={pronouns} role={role} color="var(--qif-blue-deep)" style={{ transform: "rotate(" + (i % 2 ? 0.5 : -0.5) + "deg)" }} />
        ))}
      </div>
    </div>
  );
  return (
    <section style={{ background: "var(--qif-blue-pale)", padding: "80px 24px" }}>
      <div id="team" style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(56px,8vw,96px)", lineHeight: 1, color: "var(--qif-blue-deep)", margin: "0 0 40px" }}>la team</h2>
        <div style={{ display: "flex", gap: 26, flexWrap: "wrap", alignItems: "flex-start" }}>
          <Card title="les orgas" people={team} />
          <Card title="la technique" people={technique} />
        </div>
        <div id="rejoindre" className="qif-card" style={{ marginTop: 34, background: "var(--qif-white)", padding: "34px 30px 36px", boxShadow: "0 2px 0 var(--qif-blue)", display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{ fontFamily: "var(--font-display-alt)", fontStyle: "italic", fontSize: "clamp(34px,3.4vw,50px)", lineHeight: 1, color: "var(--qif-blue-deep)", marginBottom: 12 }}>nous rejoindre</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 21, lineHeight: 1.35, color: "var(--qif-blue-deep)" }}>
              Le festival tourne grâce aux bénévoles : accueil, bar, stands, régie, montage et démontage.
            </div>
          </div>
          <Button size="md" href="https://docs.google.com/forms/d/e/1FAIpQLSfK-sAdGh9s-fgKim4zqcU2_azSPB6Dqc_nRwOdurHAycVSxA/viewform" target="_blank" rel="noreferrer"><img src={RES("../../assets/icons/volunteer_activism.svg")} alt="" style={{ width: 24, height: 24, display: "block" }} />Devenir bénévole</Button>
        </div>
      </div>
    </section>
  );
}

function Editions() {
  const all = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"].map((n) => "../../assets/photos/qif-" + n + ".jpg");
  const rowA = all.slice(0, 6), rowB = all.slice(6);
  const Row = ({ list, reverse, height }) => (
    <div style={{ overflow: "hidden" }}>
      <div className="qif-gal" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {list.concat(list).map((src, i) => (
          <img key={i} src={RES(src)} alt="Photo d'une ancienne édition" style={{ height }} />
        ))}
      </div>
    </div>
  );
  return (
    <section id="editions" style={{ position: "relative", background: "var(--qif-white)", padding: "90px 0 100px", overflow: "hidden" }}>
      <img className="qif-saucer-ed" src={RES("../../assets/soucoupe.png")} alt="" style={{ position: "absolute", right: "5%", top: 26, width: 180, transform: "rotate(6deg)", animation: "qif-float 6s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ margin: 0, font: "inherit", color: "inherit" }}><DisplayTitle top="" middle="anciennes éditions" bottom="" align="left" scale={0.9} color="var(--qif-pink)" style={{ marginBottom: 44 }} /></h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <Row list={rowA} height={250} />
        <Row list={rowB} reverse height={200} />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <GradientPanel variant="pale" noise={false} style={{ padding: "56px 24px 40px" }}>
      <div className="qif-foot" style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap" }}>
        <QifMark size={120} />
        <div style={{ fontFamily: "var(--font-body)", color: "var(--qif-pink-hot)", fontSize: 18, lineHeight: 1.5 }}>
          Queer Interstellaire Festival : Samedi 12 Septembre 2026<br />
          36 rue Emile Decorps, Villeurbanne<br />
          avec Les Heures Joyeu..x·ses et le collectif Outrage
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
          <LinkTile icon={RES("../../assets/icons/instagram-white.png")} label="Instagram" gradient="blob" size={64} href="https://www.instagram.com" />
          <LinkTile icon={RES("../../assets/icons/confirmation_number.svg")} label="HelloAsso" gradient="blob" size={64} href="https://www.helloasso.com/associations/les-heures-joyeuxses-bar-associatif-feministe-et/evenements/qif-2026-queer-interstellaire-festival-open-air-2" />
        </div>
      </div>
    </GradientPanel>
  );
}

Object.assign(window, { Infos, Equipe, Editions, SiteFooter });

export {
  Infos,
  Equipe,
  Editions,
  SiteFooter,
};

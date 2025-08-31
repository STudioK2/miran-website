import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/* USTAW: docelowy link do rezerwacji */
const BOOKING_URL = "https://app.business.booking.com/xapp/de/stay/details/21036?adultCount=1&aid=318615&aid_label=Polish_Croatia_PL_HR_29394677785-I0*khktTcUISY53rdnyZ6AS217291386223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55328758804%3Atidsa-325360801114%3Alp9197245%3Ali%3Adec%3Adm&checkinDate=2025-09-01&checkoutDate=2025-09-02&destinationId=-91928&destinationType=city&guestAccountCountryCode=PL&guestCurrency=PLN&label=zenodeeplinkpp&roomCount=1&searchLocation=Pirovac";

const languages = ["pl", "en", "de", "cz", "it"];

const t = {
  pl: {
    nav: { home: "Start", stay: "Noclegi", dining: "Gastronomia", contact: "Kontakt" },
    hero: {
      title: "Miran Pirovac — kemping i hotel nad morzem",
      subtitle:
        "Rodzinny ośrodek w Pirovac (Dalmacja). Parcelle kempingowe, pokoje hotelowe, restauracja i bar, prywatna plaża i pomost. Blisko Kornati i jeziora Vrana.",
      cta: "Rezerwuj"
    },
    usps: [
      "Prywatna plaża i pomost",
      "Parcelle kempingowe i pokoje",
      "Restauracja i bar na miejscu",
      "Wypożyczalnia sportów wodnych",
      "Blisko Parku Kornati i jeziora Vrana"
    ],
    stay: {
      title: "Noclegi",
      p1: "Wybierz komfortowe pokoje z widokiem lub przestronne parcele kempingowe w cieniu sosen.",
    },
    dining: {
      title: "Gastronomia",
      p1: "Restauracja serwuje kuchnię dalmatyńską i dania rodzinne. Bar przy plaży — napoje i przekąski."
    },
    contact: {
      title: "Kontakt",
      address: "Obala Kneza Domagoja 12, 22213 Pirovac, Chorwacja",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      map: "Pokaż na mapie"
    },
    labels: { book: "Rezerwuj", more: "Dowiedz się więcej" }
  },

  en: {
    nav: { home: "Home", stay: "Stay", dining: "Dining", contact: "Contact" },
    hero: {
      title: "Miran Pirovac — seaside camping & hotel",
      subtitle:
        "Family resort in Pirovac, Dalmatia. Camping pitches, hotel rooms, restaurant & bar, private beach and pier. Near Kornati NP and Lake Vrana.",
      cta: "Book now"
    },
    usps: [
      "Private beach and pier",
      "Pitches and rooms",
      "On-site restaurant & bar",
      "Water-sports rentals",
      "Close to Kornati National Park"
    ],
    stay: {
      title: "Stay",
      p1: "Choose sea-view rooms or shaded camping pitches among pine trees."
    },
    dining: {
      title: "Dining",
      p1: "Dalmatian cuisine and family classics. Beach bar for drinks and snacks."
    },
    contact: {
      title: "Contact",
      address: "Obala Kneza Domagoja 12, 22213 Pirovac, Croatia",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      map: "Open map"
    },
    labels: { book: "Book now", more: "Learn more" }
  },

  de: {
    nav: { home: "Start", stay: "Wohnen", dining: "Gastronomie", contact: "Kontakt" },
    hero: {
      title: "Miran Pirovac — Camping & Hotel am Meer",
      subtitle:
        "Familienresort in Pirovac, Dalmatien. Stellplätze, Zimmer, Restaurant & Bar, Privatstrand und Steg. Nahe Nationalpark Kornaten und Vrana-See.",
      cta: "Jetzt buchen"
    },
    usps: [
      "Privatstrand mit Steg",
      "Stellplätze und Zimmer",
      "Restaurant & Bar vor Ort",
      "Verleih für Wassersport",
      "Nahe NP Kornaten"
    ],
    stay: {
      title: "Wohnen",
      p1: "Zimmer mit Meerblick oder schattige Stellplätze unter Pinien."
    },
    dining: {
      title: "Gastronomie",
      p1: "Dalmatinische Küche und Familienklassiker. Strandbar mit Drinks und Snacks."
    },
    contact: {
      title: "Kontakt",
      address: "Obala Kneza Domagoja 12, 22213 Pirovac, Kroatien",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      map: "Karte öffnen"
    },
    labels: { book: "Jetzt buchen", more: "Mehr erfahren" }
  },

  cz: {
    nav: { home: "Úvod", stay: "Ubytování", dining: "Gastronomie", contact: "Kontakt" },
    hero: {
      title: "Miran Pirovac — kemp a hotel u moře",
      subtitle:
        "Rodinný areál v Pirovaci, Dalmácie. Parcely pro karavany, hotelové pokoje, restaurace a bar, soukromá pláž a molo. Blízko NP Kornati a jezera Vrana.",
      cta: "Rezervovat"
    },
    usps: [
      "Soukromá pláž a molo",
      "Parcely i pokoje",
      "Restaurace a bar v areálu",
      "Půjčovna vodních sportů",
      "Blízko NP Kornati"
    ],
    stay: {
      title: "Ubytování",
      p1: "Pokoje s výhledem na moře nebo stinné parcely pod borovicemi."
    },
    dining: {
      title: "Gastronomie",
      p1: "Dalmatinská kuchyně a rodinná jídla. Plážový bar s nápoji a snacky."
    },
    contact: {
      title: "Kontakt",
      address: "Obala Kneza Domagoja 12, 22213 Pirovac, Chorvatsko",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      map: "Zobrazit mapu"
    },
    labels: { book: "Rezervovat", more: "Více informací" }
  },

  it: {
    nav: { home: "Home", stay: "Alloggi", dining: "Ristorazione", contact: "Contatti" },
    hero: {
      title: "Miran Pirovac — campeggio e hotel sul mare",
      subtitle:
        "Resort per famiglie a Pirovac, Dalmazia. Piazzole, camere d’hotel, ristorante e bar, spiaggia privata e molo. Vicino al Parco Kornati e al lago Vrana.",
      cta: "Prenota"
    },
    usps: [
      "Spiaggia privata e molo",
      "Piazzole e camere",
      "Ristorante e bar",
      "Noleggio sport acquatici",
      "Vicino alle Kornati"
    ],
    stay: {
      title: "Alloggi",
      p1: "Camere vista mare o piazzole ombreggiate tra i pini."
    },
    dining: {
      title: "Ristorazione",
      p1: "Cucina dalmata e piatti per famiglie. Beach bar con drink e snack."
    },
    contact: {
      title: "Contatti",
      address: "Obala Kneza Domagoja 12, 22213 Pirovac, Croazia",
      phoneLabel: "Telefono",
      emailLabel: "E-mail",
      map: "Apri mappa"
    },
    labels: { book: "Prenota", more: "Scopri di più" }
  }
};

/* prosta detekcja języka ze ścieżki */
function getLang() {
  const seg = window.location.pathname.replace(/^\/+/, "").split("/")[0];
  return languages.includes(seg) ? seg : "pl";
}
function pushLang(l) {
  const path = l === "pl" ? "/" : `/${l}`;
  window.history.pushState({}, "", path);
}

/* komponenty */
const FLAG = { pl:"🇵🇱", en:"🇬🇧", de:"🇩🇪", cz:"🇨🇿", it:"🇮🇹" };
const FLAG_LABEL = { pl:"Polski", en:"English", de:"Deutsch", cz:"Čeština", it:"Italiano" };

function LangSwitch({ lang, onChange }) {
  return (
    <nav className="nav" aria-label="Language">
      {languages.map((l) => (
        <a
          key={l}
          href={l === "pl" ? "/" : `/${l}`}
          onClick={(e) => { e.preventDefault(); onChange(l); }}
          className={l === lang ? "active" : undefined}
          title={FLAG_LABEL[l]}
          aria-label={FLAG_LABEL[l]}
        >
          <span style={{fontSize:20, lineHeight:1}}>{FLAG[l]}</span>
        </a>
      ))}
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="hero" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
// === PROSTA GALERIA ===
const IMAGES = [
  "hero_pool.jpg",
  "aerial_grounds.jpg",
  "beach_sunbeds.jpg",
  "bungalows_exterior.jpg",
  "camp_pitches.jpg",
  "facebook_beach_01.jpg",
  "facebook_pool_01.jpg",
  "facebook_pier_01.jpg",
  "instagram_beach_bar.jpg",
  "mobile_home_terrace.jpg",
  "pool_sunset.jpg",
  "promo_earlybird.jpg",
  "restaurant_deck.jpg",
  "room_double.jpg",
  "video_cover.jpg",
  "waterfront_pier.jpg",
];

function Gallery() {
  return (
    <section className="hero" style={{ paddingTop: 24, paddingBottom: 24 }}>
      {/* duże zdjęcie na start */}
      <img
        src="/images/hero_pool.jpg"
        alt="Basen i plaża"
        style={{ width: "100%", borderRadius: 12, marginBottom: 16 }}
      />
      {/* siatka miniaturek */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 12,
        }}
      >
        {IMAGES.map((name) => (
          <img
            key={name}
            src={`/images/${name}`}
            alt={name.replace(/[_-]/g, " ").replace(".jpg", "")}
            style={{ width: "100%", borderRadius: 8, aspectRatio: "16 / 9", objectFit: "cover" }}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = React.useState(getLang());
  const c = t[lang];

  const phone = "+385-000-000";
  const email = "info@miran.example";
  const maps = "https://maps.google.com/?q=Obala+Kneza+Domagoja+12+Pirovac";

  function changeLang(l) {
    setLang(l);
    pushLang(l);
  }

  return (
    <div className="container">
      <LangSwitch lang={lang} onChange={changeLang} />

      <header className="hero">
        <h1>{c.hero.title}</h1>
        <p>{c.hero.subtitle}</p>
        <a className="cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
          {c.hero.cta}
        </a>
      </header>

      <ul>
        {c.usps.map((x, i) => (
          <li key={i}>• {x}</li>
        ))}
      </ul>

      {/* TU DODAJ GALERIĘ */}
      <Gallery />

      <Section id="stay" title={c.stay.title}>
        <p>{c.stay.p1}</p>
      </Section>

      <Section id="dining" title={c.dining.title}>
        <p>{c.dining.p1}</p>
      </Section>

      <Section id="contact" title={c.contact.title}>
        {/* ... */}
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Miran Pirovac • camping • hotel • beach</p>
      </footer>
    </div>
  );
}

/* render + obsługa wstecz/do przodu */
const root = createRoot(document.getElementById("root"));
root.render(<App />);
window.addEventListener("popstate", () => root.render(<App />));

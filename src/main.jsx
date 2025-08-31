import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const languages = ["pl","en","de","cz","it"];

const t = {
  pl: { title: "Miran — strona działa", subtitle: "Routing SPA włączony. Treści i widget rezerwacji do podmiany.", cta: "Rezerwuj", bookingUrl: "https://app.business.booking.com/xapp/pl/stay/details/21036?adultCount=1&aid=318615&aid_label=Polish_Croatia_PL_HR_29394677785-I0*khktTcUISY53rdnyZ6AS217291386223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55328758804%3Atidsa-325360801114%3Alp9197245%3Ali%3Adec%3Adm&checkinDate=2025-09-01&checkoutDate=2025-09-02&destinationId=-91928&destinationType=city&guestAccountCountryCode=HR&guestCurrency=EUR&label=zenodeeplinkpp&roomCount=1&searchLocation=Pirovac" },
  en: { title: "Miran — site online", subtitle: "SPA routing enabled. Replace copy and booking widget.", cta: "Book now", bookingUrl: "https://app.business.booking.com/xapp/en-GB/stay/details/21036?adultCount=1&aid=318615&aid_label=Polish_Croatia_PL_HR_29394677785-I0*khktTcUISY53rdnyZ6AS217291386223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55328758804%3Atidsa-325360801114%3Alp9197245%3Ali%3Adec%3Adm&checkinDate=2025-09-01&checkoutDate=2025-09-02&destinationId=-91928&destinationType=city&guestAccountCountryCode=PL&guestCurrency=PLN&label=zenodeeplinkpp&roomCount=1&searchLocation=Pirovac" },
  de: { title: "Miran — Seite online", subtitle: "SPA-Routing aktiv. Inhalte und Buchungs-Widget ersetzen.", cta: "Jetzt buchen", bookingUrl: "https://app.business.booking.com/xapp/de/stay/details/21036?adultCount=1&aid=318615&aid_label=Polish_Croatia_PL_HR_29394677785-I0*khktTcUISY53rdnyZ6AS217291386223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55328758804%3Atidsa-325360801114%3Alp9197245%3Ali%3Adec%3Adm&checkinDate=2025-09-01&checkoutDate=2025-09-02&destinationId=-91928&destinationType=city&guestAccountCountryCode=PL&guestCurrency=PLN&label=zenodeeplinkpp&roomCount=1&searchLocation=Pirovac" },
  cz: { title: "Miran — web běží", subtitle: "SPA routing zapnut. Vyměňte texty a rezervační widget.", cta: "Rezervovat", bookingUrl: "https://booking.example.com/obiekt/miran" },
  it: { title: "Miran — sito attivo", subtitle: "Routing SPA attivo. Sostituisci testi e widget di prenotazione.", cta: "Prenota", bookingUrl: "https://booking.example.com/obiekt/miran" },
};

function getLang() {
  const seg = window.location.pathname.replace(/^\/+/, "").split("/")[0];
  return languages.includes(seg) ? seg : "pl";
}

function App() {
  const lang = getLang();
  const copy = t[lang];

  function goto(l) {
    const path = l === "pl" ? "/" : `/${l}`;
    window.history.pushState({}, "", path);
    root.render(<App />);
  }

  return (
    <div className="container">
      <nav className="nav">
        {languages.map((l) => (
          <a key={l} href={l === "pl" ? "/" : `/${l}`}
             onClick={(e)=>{e.preventDefault(); goto(l);}}
             className={l===lang ? "active" : undefined}>
            {l.toUpperCase()}
          </a>
        ))}
      </nav>

      <section className="hero">
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
        <a className="cta" href={copy.bookingUrl} target="_blank" rel="noreferrer">
          {copy.cta}
        </a>
      </section>

      <div className="footer">
        <p>Miran Pirovac • camping • hotel • restauracja • plaża • Chorwacja</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
window.addEventListener("popstate", () => root.render(<App />));

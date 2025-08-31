import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main style={{padding:"24px", maxWidth:960, margin:"0 auto"}}>
      <h1>Miran — strona działa</h1>
      <p>Routing SPA włączony. Treści i widget rezerwacji do podmiany.</p>
      <nav style={{marginTop:16, display:"flex", gap:12}}>
        <a href="/pl">PL</a>
        <a href="/en">EN</a>
        <a href="/de">DE</a>
        <a href="/cz">CZ</a>
        <a href="/it">IT</a>
      </nav>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

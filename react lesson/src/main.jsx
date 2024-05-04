import React from "react";
import ReactDOM from "react-dom/client";

const linkElement = (
  <a href="https://zrozumiecreact.pl" target="_blank" rel="noopener noreffer">
    Sprawdź już teraz!
  </a>
);

const element = (
  <>
    <h1>Nasza Strona!</h1>
    <main>
      {linkElement}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima soluta
        inventore repudiandae autem commodi culpa tempora at sequi asperiores,
        harum accusantium, eaque quo nemo numquam natus reiciendis dolorum esse
        rem.
      </p>
      {linkElement}
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

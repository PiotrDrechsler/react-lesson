import React from "react";
import ReactDOM from "react-dom/client";

import { Link } from "./components/Link/Link";
import { Animal } from "./components/Animal/Animal";
import { HeadingItalic } from "./components/HeadingItalic/HeadingItalic";
import { Logger } from "./components/Logger/Logger";

const element = (
  <>
    <Logger>
      <HeadingItalic>Nasza Super Strona</HeadingItalic>
    </Logger>
    <main>
      <Link text="Sprawdź już teraz!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima soluta
        inventore repudiandae autem commodi culpa tempora at sequi asperiores,
        harum accusantium, eaque quo nemo numquam natus reiciendis dolorum esse
        rem.
      </p>
      <Link shouldOpenNewTab={false} />
      <h1>Galeria zwierząt</h1>
      <Animal
        name="Pies"
        imgSrc="https://zrozumiecreact.pl/dog.jpg"
        imgWidth={300}
      />
      <Animal
        name="Kot"
        imgSrc="https://zrozumiecreact.pl/cat.jpg"
        imgWidth={350}
      />
      <Animal name="Kaczka" imgSrc="https://zrozumiecreact.pl/duck.jpg" />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

import React from "react";
import ReactDOM from "react-dom/client";

import { Link } from "./components/Link/Link";

const element = (
  <>
    <h1>Nasza Strona!</h1>
    <main>
      <Link />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima soluta
        inventore repudiandae autem commodi culpa tempora at sequi asperiores,
        harum accusantium, eaque quo nemo numquam natus reiciendis dolorum esse
        rem.
      </p>
      <Link />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

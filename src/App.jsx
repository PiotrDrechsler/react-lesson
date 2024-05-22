import React from "react";

function App() {
  function logMouseLeave() {
    console.log("Mouse move off!");
  }
  const buttonEl = (
    <button
      onClick={() => console.log("Click!")}
      onMouseEnter={() => console.log("Mouse move on!")}
      onMouseLeave={logMouseLeave}
    >
      Pokaż spoiler
    </button>
  );

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {buttonEl}
      <p>Vader okazuje się być ojcem Luka.</p>
    </>
  );
}

export default App;

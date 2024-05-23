import React from "react";

export default function VariousEvents() {
  return (
    <>
      <h1>Events List</h1>

      <h2>click</h2>
      <button onClick={() => alert("onClick")}>Click</button>
      <hr />

      <h2>keydown</h2>
      {/* Add support for keyboard key press and display alert */}
      <input type="number" onKeyDown={() => alert("onKeyDown")} />
      <hr />

      <h2>double click</h2>
      {/* Dodaj obsługę podwójnego kliknięcia i wyświetl alert */}
      <button>Double click</button>
      <hr />

      <h2>change</h2>
      {/* Dodaj obsługę zmiany wartości selecta i wyświetl alert */}
      <select>
        <option value="A">OptionA</option>
        <option value="B">OptionB</option>
      </select>
      <hr />

      <h2>blur</h2>
      {/* Dodaj obsługę blura i wyświetl alert */}
      <input />
      <hr />
    </>
  );
}

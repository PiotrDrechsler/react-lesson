import React from "react";

export default function EventInformation() {
  function showAlert() {
    {
      /* Tutaj wywołaj alert z wybraną opcją */
    }
  }

  return (
    <select onChange={showAlert}>
      <option value="A">Opcja A</option>
      <option value="B">Opcja B</option>
      <option value="C">Opcja C</option>
    </select>
  );
}

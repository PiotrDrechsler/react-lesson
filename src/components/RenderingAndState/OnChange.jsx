import React from "react";

export default function OnChange() {
  function showAlert(event) {
    {
      const selectedValue = event.target.value;
      alert(`Selected value: ${selectedValue}`);
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

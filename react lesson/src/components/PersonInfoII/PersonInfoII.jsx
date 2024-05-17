import React from "react";

export function PersonInfoII({ person }) {
  return (
    <>
      <h2>{person.name}</h2>
      {/* Tutaj wyświetl h3 z napisem "Administrator" lub "Użytkownik" */}
      <h3>{person.isAdmin ? "Admin" : "User"}</h3>
      {/* Tutaj wyświetl span, jeśli osoba jest pełnoletnia */}
      <span> {person.age >= 18 && "Adult"}</span>
    </>
  );
}

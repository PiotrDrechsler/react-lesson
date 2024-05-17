export function PersonInfoII({ person }) {
  return (
    <>
      <h2>{person.name}</h2>
      {/* Tutaj wyświetl h3 z napisem "Administrator" lub "Użytkownik" */}
      <h3>{person.isAdmin ? "Administrator" : "Użytkownik"}</h3>
    </>
  );
}

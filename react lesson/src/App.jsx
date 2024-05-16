import React from "react";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "j.kow@gmail.com",
    tel: "123-456-789",
  };
  return (
    <address>
      <div>
        <span>
          {jan.name} {jan.lastName}
        </span>
      </div>
      <div>
        Email: <a href={`mailto:${jan.mail}`}>{jan.mail}</a>
      </div>
      <div>
        Tel: <a href={`tel:${jan.tel}`}>{jan.tel}</a>
      </div>
    </address>
  );
}

export default App;

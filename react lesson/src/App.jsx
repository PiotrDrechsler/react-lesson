import React from "react";

import { PersonInfo } from "./components/PersonInfo/PersonInfo";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "jan.kow@gmail.com",
    tel: "123-456-789",
  };

  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "janina.kow@gmail.com",
    tel: "123-456-111",
  };
  return (
    <>
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={jan} />
    </>
  );
}

export default App;

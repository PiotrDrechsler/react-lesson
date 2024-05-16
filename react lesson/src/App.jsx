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

  const dio = {
    name: "Dio",
    lastName: "Kowalski",
    mail: "dio.kow@gmail.com",
  };
  return (
    <>
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={dio} />
    </>
  );
}

export default App;

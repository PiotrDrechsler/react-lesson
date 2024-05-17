import React from "react";

import { PersonInfo } from "./components/PersonInfo/PersonInfo";
import { PersonInfoII } from "./components/PersonInfoII/PersonInfoII";

function App() {
  const andrzej = {
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

  const joe = { name: "Joe", age: 21, isAdmin: false, country: "AU" };
  const jan = { name: "Jan", age: 43, isAdmin: true, country: "PL" };
  const juan = { name: "Juan", age: 15, isAdmin: true };
  const jonas = { name: "Jonas", age: 18, isAdmin: false, country: "GER" };
  return (
    <>
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={andrzej} />
      <br />
      <PersonInfo person={dio} />
      <br />
      <PersonInfoII person={joe} />
      <br />
      <PersonInfoII person={jan} />
      <br />
      <PersonInfoII person={juan} />
      <br />
      <PersonInfoII person={jonas} />
    </>
  );
}

export default App;

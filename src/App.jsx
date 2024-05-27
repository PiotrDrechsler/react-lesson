import React from "react";

import image from "./assets/dog.jpg";

import { Props } from "./components/Fundamentals/Props/Props";

import ServiceRating from "./components/RenderingAndState/ServiceRating/ServiceRating";
import VariousEvents from "./components/RenderingAndState/VariousEvents/VariousEvents";
import EventInformation from "./components/RenderingAndState/EventInformation/EventInformation";

function App() {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <>
      <Props name="Here comes the Dog!" imgSrc={image} />
      <EventInformation />
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      <button onClick={handleClick}> Pokaż spoiler</button>
      <p>Vader okazuje się być ojcem Luka.</p>
      <ServiceRating />
      <VariousEvents />
    </>
  );
}

export default App;

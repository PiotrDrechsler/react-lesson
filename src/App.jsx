import React from "react";

import image from "./assets/dog.jpg";

//F U N D A M E N T A L S
import { Props } from "./components/Fundamentals/Props"; //basic props component
import { ArrowFunctions } from "./components/Fundamentals/ArrowFunctions"; //easy arrow function
import { PropsChildren } from "./components/Fundamentals/PropsChildren"; //add italic font style for children
import { PropsDestructuring } from "./components/Fundamentals/PropsDestructuring"; //destructuring props

import ServiceRating from "./components/RenderingAndState/ServiceRating/ServiceRating";
import VariousEvents from "./components/RenderingAndState/VariousEvents/VariousEvents";
import EventInformation from "./components/RenderingAndState/EventInformation/EventInformation";

function App() {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <>
      {/* F U N D A M E N T A L S */}
      <PropsChildren>
        <Props name="Here comes the Dog!" imgSrc={image} />
        <PropsDestructuring shouldOpenNewTab />
        <ArrowFunctions />
      </PropsChildren>
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

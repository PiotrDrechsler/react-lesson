import React from "react";

export function Animal({ name, imgSrc, imgWidth = 200 }) {

  return (
    <section>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} width={imgWidth} />
    </section>
  );
}

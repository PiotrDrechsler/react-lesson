import React from "react";

export function Animal({ name, imgSrc }) {
  return (
    <section>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} width={200} />
    </section>
  );
}

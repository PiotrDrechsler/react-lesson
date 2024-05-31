import React from "react";

export function PropsDynamic({ person }) {
  return (
    <address>
      <div>
        <span>
          {person.name} {person.lastName}
        </span>
      </div>
      <div>
        Email: <a href={`mailto:${person.mail}`}>{person.mail}</a>
      </div>
      {person.tel && (
        <div>
          Tel: <a href={`tel:${person.tel}`}>{person.tel}</a>
        </div>
      )}
    </address>
  );
}

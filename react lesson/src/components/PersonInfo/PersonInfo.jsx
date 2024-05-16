import React from "react";

export default function PersonInfo({ person }) {
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
      <div>
        Tel: <a href={`tel:${person.tel}`}>{person.tel}</a>
      </div>
    </address>
  );
}

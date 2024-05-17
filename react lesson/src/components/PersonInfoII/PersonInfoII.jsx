import React from "react";

export function PersonInfoII({ person }) {
  return (
    <>
      <h2>{person.name}</h2>
      {/* here, display <h3> with the words "Admin" or "User" */}
      <h3>{person.isAdmin ? "Admin" : "User"}</h3>
      {/* display span here if the person is of age */}
      <span> {person.age >= 18 && "Adult"}</span>
      {/* display paragraph with nationality here */}
      {person.country && <p>{person.country}</p>}
    </>
  );
}

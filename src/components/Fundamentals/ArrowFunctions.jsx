import React from "react";

let a = Math.floor(Math.random() * 10 + 1);

let b = Math.floor(Math.random() * 10 + 1);

export function ArrowFunctions() {
  function greetings(text) {
    return `Hello, ${text}!`;
  }

  const greetingsArrow = (text) => {
    return `Hello, ${text}!`;
  };

  const sum = (a, b) => {
    const result = a + b;
    return result;
  };

  console.log(greetings("Jack from function!"));
  console.log(greetingsArrow("Anna from arrow function!"));
  console.log(sum(a, b));
  return (
    <>
      <h2>Arrow Functions</h2>
    </>
  );
}

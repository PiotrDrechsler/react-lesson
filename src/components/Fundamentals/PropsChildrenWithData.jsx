import React from "react";

export function PropsChildrenWithData(props) {
  const date = new Date();
  console.log(
    `The component created at ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `
  );
  return <> {props.children}</>;
}

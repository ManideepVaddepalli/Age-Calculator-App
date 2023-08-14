import React from "react";

export default function Age(props) {
  return (
    <h1>
      <span>{props.number}</span> {props.name}
    </h1>
  );
}

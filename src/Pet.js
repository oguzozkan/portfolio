import React from "react";

function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.brand}</h2>
    </div>
  );
}
export default Pet;

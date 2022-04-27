import React from "react";
// import { Card } from "react-bootstrap";

export default function Services(props) {
  return (
    <>
      <li style={{ margin: "1.5rem 0" }}>
        <h5>{props.service}</h5>
        <p>{props.description}</p>
      </li>
      <hr />
    </>
  );
}

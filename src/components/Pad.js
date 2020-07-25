import React from "react";

export default function Pad(props) {
  return <button onClick={props.onClick}>{props.num}</button>;
}

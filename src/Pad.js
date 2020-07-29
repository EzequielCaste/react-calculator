import React from "react";

export default function Pad(props) {
  return (
    <div id={props.id} className="btn digits" onClick={props.handleClick}>
      {props.num}
    </div>
  );
}

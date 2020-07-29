import React from "react";

export default function Display(props) {
  return (
    <div id="display" className="display">
      {props.value}
    </div>
  );
}

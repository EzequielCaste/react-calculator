import React from "react";
import Pad from "./Pad";
const numberPad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];

export default function NumberPad(props) {
  const padComponent = numberPad.map(item => {
    return (
      <Pad
        key={`button_${item}`}
        onClick={() => props.handleClick(item)}
        num={item}
      />
    );
  });
  return <div>{padComponent}</div>;
}

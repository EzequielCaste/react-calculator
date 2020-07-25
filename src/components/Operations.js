import React from "react";
const operators = ["+", "-", "/", "*"];

export default function Operations(props) {
  const operatorComponent = operators.map(item => {
    return (
      <button onClick={() => props.handleClick(item)} key={item}>
        {item}
      </button>
    );
  });
  return operatorComponent;
}

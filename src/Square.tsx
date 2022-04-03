import * as React from "react";

interface SquareProps {valueN: String, onClick:any}

export default function Square(props: SquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.valueN}
      </button>
    );
  }
    
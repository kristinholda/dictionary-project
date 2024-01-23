import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <div className="example-text">{props.example}</div>
      </div>
    );
  } else {
    return null;
  }
}

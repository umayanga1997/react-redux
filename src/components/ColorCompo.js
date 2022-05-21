import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/color";

function ColorCompo() {
  const [color, setColor] = useState("");
  const colorDispatch = useDispatch();
  return (
    <div>
      <h1>{color}</h1>
      <input
        type="text"
        name="color"
        placeholder="Please Enter Your Color Here"
        id=""
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => colorDispatch(changeColor(color))}>
        Change Color
      </button>
    </div>
  );
}

export default ColorCompo;

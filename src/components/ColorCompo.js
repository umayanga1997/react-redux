import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/color";

// Functional Component
function ColorCompo() {
  // Hooks
  const [color, setColor] = useState("");
  // Using dispatch feature from redux
  const colorDispatch = useDispatch();
  // JSX
  return (
    <div>
      <input
        type="text"
        name="color"
        placeholder="Please Enter Your Color Here"
        id=""
        onChange={(event) => setColor(event.target.value)}
      />
      {/* Dispatching colorChange method */}
      <button onClick={() => colorDispatch(changeColor(color))}>
        Change Color
      </button>
    </div>
  );
}

export default ColorCompo;

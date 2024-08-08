import { useState } from "react";
import "./Cell.css";

export default function Cell() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className='cell'
      onMouseEnter={() => {
        setVisible(!visible);
      }}
    >
      <div
        // eslint-disable-next-line react/prop-types
        className={`cell-shape pink ${visible ? "" : "hide"}`}
      ></div>
    </div>
  );
}

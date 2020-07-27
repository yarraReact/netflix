import React, { useState } from "react";
import "./Tile.css";

const Tile = ({ info, buttonText ,onClick}) => {
  const [show, setShow] = useState(false);
  const handleMouse = () => setShow(!show);
  const { id, title, img } = info;
  return (
    <div
      className="container"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className="title">{title}</div>
      <img src={img} height="150px" />
      {show && (
        <div className="button">
          <button onClick={() => onClick(info)}>{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default Tile;

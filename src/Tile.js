import React, { useState } from "react";
import "./Tile.css";

const Tile = ({ info, buttonText ,onClick}) => {
  const [show, setShow] = useState(false);
  const handleMouseEnter = () => setShow(true);
  const handleMouseExit=()=> setShow(false)
  const { id, title, img } = info;
  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="title">{title}</div>
      <img src={img} height="150px" />
        <div className={show ? "button" : "hide-button"}>
          <button onClick={() => onClick(info)}>{buttonText}</button>
        </div>
      
    </div>
  );
};

export default Tile;

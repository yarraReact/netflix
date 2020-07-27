import React from "react";
import Tile from "./Tile";
import "./MyList.css";

const ListTemplate = ({ title, data, tileText, onClick,subTitle }) => {
  return (
    <React.Fragment>
      <div className="section-title">{title}</div>
      {!data.length && <div className="section-sub-title">{subTitle}</div>}
      {data.map((info) => (
        <Tile info={info} buttonText={tileText} onClick={onClick} />
      ))}
    </React.Fragment>
  );
};

export default ListTemplate;

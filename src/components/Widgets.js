import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__artice">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Getty Winslo", "Top news - 1000 readers")}
      {newsArticle("conroavirus: US updates", "Top news - 1765 readers")}
      {newsArticle("Telsa hits new high's", "Cars & auto -580 readers")}
      {newsArticle("Bitcoin hits 50k ", "Crypto - 6700 readers")}
      {newsArticle("Redux is the shit ", "Code - 700 readers")}
    </div>
  );
}

export default Widgets;

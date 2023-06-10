import React from "react";

const Card = ({ title, text1, text2 }) => {
  return (
    <div className="title"> 
      {title} 
      <div className="text">
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
    </div>
  );
};

export default Card;
import React from "react";

const Price = ({ title, content }) => {
  return (
    <div className="price">
      <div>
        <h2>{title}</h2>
        <div className="content">
        {content.map(item=>{
          return <p className="sub-item">{item.a}</p> - <p>{item.b}</p> 
        })}
        </div>
      </div>
    </div>
  );
};

export default Price;
  
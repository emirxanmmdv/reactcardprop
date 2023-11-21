import React from "react";
import './index.css'

const Card = ({ image, title, price, rating }) => {
  return (
    <>
      <div className="card">
        <div className="cardimg">
          <img src={image} className="cardImage" />
        </div>
        <div className="cardcontent">
          <div className="cardTitle">
            <h1>{title}</h1>
          </div>
          <div className="cardPrice">
            <span>{price}</span>
          </div>
          <div className="cardFeedback">
            <img src={rating} alt="" />
            </div>

          
        </div>
      </div>
    </>
  );
};

export default Card;

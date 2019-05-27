import React, { useState } from 'react';
import '../css/phone.css';

const imageURL = 'http://localhost:3001/images/';

function Phone(props) {
  
  const [flipped, setFlipped] = useState("");

  const flipCard = () => {
    flipped === "flipped" ? setFlipped("") : setFlipped("flipped");
  }

  const phoneCardFront = 
    <div className="phone-card-front">
      <img className="phone-image" 
           src={`${imageURL}${props.phone.imageFileName}`}
           alt = {props.phone.name}
      /> 
      <div className="phone-info">
        <p className="phone-maker">{props.phone.manufacturer}</p>
        <p className="phone-name">{props.phone.name}</p>
        <p className="phone-price">${props.phone.price}</p>    
      </div>
    </div>

  // TODO: Make this an actual card back.
  const phoneCardBack = 
    <div className="phone-card-back">
      <div className="phone-detail">
        <p className="phone-detail-name">{props.phone.name}</p>
        <p className="phone-detail-name">{props.phone.manufacturer}</p>
        <p className="phone-detail-name">{props.phone.description}</p>
        <p className="phone-detail-name">{props.phone.color}</p>
        <p className="phone-detail-name">{props.phone.price}</p>
        <p className="phone-detail-name">{props.phone.screen}</p>
        <p className="phone-detail-name">{props.phone.processor}</p>
        <p className="phone-detail-name">{props.phone.ram}</p>
      </div>
    </div>

  return (
    <div className={`phone-card ${flipped}`} onClick={flipCard}>
      <div className="phone-card-inner">
        { phoneCardFront }
        { phoneCardBack }
      </div>
    </div>
  );
}

export default Phone;

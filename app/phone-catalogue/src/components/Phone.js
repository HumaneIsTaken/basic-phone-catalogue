import React, { useState } from 'react';
import '../css/phone.css';

const imageURL = 'http://localhost:3001/images/';

function Phone(props) {
  
  const [showDetail, setShowDetail] = useState("");
  const phone = props.phone;

  const toggleDetail = () => {
    showDetail === "show-detail" ? setShowDetail("") : setShowDetail("show-detail");
  }

  const phoneCardFront = 
    <div className="phone-card-overview">
      <div className="focus-screen"></div>
      <img className="phone-image" 
           src={`${imageURL}${phone.imageFileName}`}
           alt = {props.phone.name}
      /> 
      <div className="phone-info">
        <p data-test="maker" className="phone-maker">{phone.manufacturer}</p>
        <p data-test="name" className="phone-name">{phone.name}</p>
        <p data-test="price" className="phone-price">${phone.price}</p>    
      </div>
    </div>

  const phoneCardBack = 
    <div className="phone-card-detail">
      <div className="phone-detail">
        <div className="phone-detail-header">
          <div className="phone-detail-sth">
            <p className="phone-detail-maker">{phone.manufacturer}</p>
            <p className="phone-detail-name">{phone.name}</p>
          </div>
          <div className="phone-detail-spec">
            <p data-test="screen" className="phone-detail-screen">{phone.screen} screen</p>
            <p data-test="processor" className="phone-detail-cpu">{phone.processor} processor</p>
            <p data-test="ram" className="phone-detail-ram">{phone.ram}GB RAM</p>
          </div>
        </div>
        <p data-test="desc" className="phone-detail-desc">{phone.description}</p>
        <div className="phone-detail-footer">
          <p className="phone-detail-price">${phone.price}</p>
          <div className="phone-detail-color">
            <span>in</span>
            <div className={`circle-color p-${phone.color}`}></div>
          </div>
        </div>
      </div>
    </div>

  return (
    <div className={`phone-card ${showDetail}`} onClick={toggleDetail}>
      <div className="phone-card-inner">
        { phoneCardFront }
        { phoneCardBack }
      </div>
    </div>
  );
}

export default Phone;

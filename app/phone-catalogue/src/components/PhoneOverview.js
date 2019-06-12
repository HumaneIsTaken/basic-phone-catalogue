import React from 'react';
import '../css/PhoneOverview.css';

function PhoneOverview(props) {
  const imageURL = 'http://localhost:3001/images/';
  const phone = props.phone;  

  return (
    <div className="phone-overview">
      <div className="dark-screen"></div>
      <img className="overview-image" 
           src = {`${imageURL}${phone.imageFileName}`}
           alt = {props.phone.name}
      /> 
      <div className="overview-info">
        <p data-test="maker" className="overview-maker">{phone.manufacturer}</p>
        <p data-test="name" className="overview-name">{phone.name}</p>
        <p data-test="price" className="overview-price">${phone.price}</p>    
      </div>
    </div>
  );
}

export default PhoneOverview;
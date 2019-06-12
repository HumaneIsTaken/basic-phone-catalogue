import React from 'react';
import '../css/PhoneDetail.css';

function PhoneDetail(props) {
  
  // REMOVE
  const phone = props.phone;  

  return (
    <div className="phone-detail"> 
      <div className="phone-detail-container">
        <div className="detail-header">
          <div className="detail-name-container">
            <p className="detail-maker">{phone.manufacturer}</p>
            <p className="detail-name">{phone.name}</p>
          </div>
          <div className="detail-specs">
            <p data-test="screen">{phone.screen} screen</p>
            <p data-test="processor">{phone.processor} processor</p>
            <p data-test="ram">{phone.ram}GB RAM</p>
          </div>
        </div>
        <p data-test="desc" className="detail-desc">{phone.description}</p>
        <div className="detail-footer">
          <p className="detail-price">${phone.price}</p>
          <div className="detail-color">
            <span>in</span>
            <div className={`circle-color p-${phone.color}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetail;
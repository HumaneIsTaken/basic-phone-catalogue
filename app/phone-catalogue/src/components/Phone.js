import React, { useState } from 'react';
import PhoneOverview from './PhoneOverview';
import PhoneDetail from './PhoneDetail';
import '../css/Phone.css';

function Phone(props) {
  
  const [showDetail, setShowDetail] = useState(false);
  const phone = props.phone;

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  }

  return (
    <div className={showDetail ? "phone show-detail" : "phone"} onClick={toggleDetail}>
      <div className="phone-inner">
        <PhoneOverview phone={phone} />
        <PhoneDetail phone={phone} /> 
      </div>
    </div>
  );
}

export default Phone;

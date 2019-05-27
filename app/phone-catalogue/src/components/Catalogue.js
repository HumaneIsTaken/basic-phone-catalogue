import React, { useState } from 'react';
import { connect } from "react-redux";
import '../css/Catalogue.css';

const mapStateToProps = state => {
  return {
    phones: state.phones,
    isFetching: state.isFetching
  }
};

function Catalogue() {

  const [phones, setPhones] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  connect(mapStateToProps)(Catalogue);
  return (
    <div className="Catalogue">
      <h1>Phone catalogue</h1>
      <p>{phones}</p>
    </div>
  );
}

export default Catalogue;

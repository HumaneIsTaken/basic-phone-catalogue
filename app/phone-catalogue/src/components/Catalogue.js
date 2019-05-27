import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import '../css/catalogue.css';
import { connect } from 'react-redux';
import { fetchPhones } from '../redux/actions/PhoneActions';
import Phone from './Phone';

function Catalogue(props) {
  useEffect(() => {
    props.onFetchPhones();
  }, []);

  const phones = props.phones.map((phone) => 
    <li key={phone.id} className="phone-li">
      <Phone phone={phone} />
    </li>
  );

  // TODO: Add spinning loading log instead of Loading.
  return (
    <div className="catalogue">
      <div className="phone-container">
        {props.isFetching ? 
          <h3> Loading... </h3> :
          <ul className="phone-ul">{phones}</ul>} 
      </div>      
    </div>
  );
}

const mapStateToProps = state => ({
  phones: state.phones,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onFetchPhones: fetchPhones
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);

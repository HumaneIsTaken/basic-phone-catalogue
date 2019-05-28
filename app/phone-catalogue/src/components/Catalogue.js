import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPhones } from '../redux/actions/PhoneActions';
import Phone from './Phone';
import '../css/catalogue.css';
import reactLogo from '../logo.svg';

export function Catalogue(props) {
  useEffect(() => {
    props.onFetchPhones();
  }, []); // Empty array to prevent infinite re-renders

  let phones = props.phones.map((phone) => 
    <li key={phone.id} className="phone-li">
      <Phone phone={phone} />
    </li>
  );

  const loadingJSX = 
    <div data-test="loading" className="loading-flex">
      <img className="app-logo" src={ reactLogo } alt="logo"/>
      <h3>LOADING</h3>
    </div>

  // TODO: Add spinning loading log instead of Loading.
  return (
    <div className="catalogue">
      <div className="phone-container">
        {props.isFetching ? 
          loadingJSX :
          <ul data-test="phone-list" className="phone-ul">{phones}</ul>} 
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

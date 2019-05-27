import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from '../components/Catalogue';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Catalogue />, div);
  ReactDOM.unmountComponentAtNode(div);
});

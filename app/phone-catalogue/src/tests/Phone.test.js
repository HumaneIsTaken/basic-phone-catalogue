import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Phone from '../components/Phone';
 
Enzyme.configure({adapter: new Adapter()});

describe('Phone Component', () => {

  const iPhone = 
    {
        "id": 1,
        "name": "Galaxy S7",
        "manufacturer": "Samsung",
        "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
        "color": "grey",
        "price": 209,
        "imageFileName": "Galaxy_S7.png",
        "screen": "5,1 inch Quad-HD",
        "processor": "Snapdragon 820",
        "ram": 4
    };
    
  const props = {
    phone: iPhone
  }

  it('switches classes to show detail on .phone-card click', () => {
    const wrapper = shallow(<Phone {...props}/>);
    expect(wrapper.exists('.phone.show-detail')).toBe(false);
    wrapper.find('.phone').prop('onClick')();
    expect(wrapper.exists('.phone.show-detail')).toBe(true);
  });

});


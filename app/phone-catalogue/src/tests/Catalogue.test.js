import React from 'react';
import expect from 'expect';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Catalogue } from '../components/Catalogue';
import Phone from '../components/Phone';
 
Enzyme.configure({adapter: new Adapter()});

describe('Catalogue Component', () => {

  let fetchPhones = jest.fn();

  it('renders without crashing', () => {
    const props = {
      phones: [],
      isFetching: false,
      onFetchPhones: fetchPhones
    }
    const wrapper = shallow(<Catalogue {...props}/>);
  });

  it('renders the loading logo while fetching data', () => {
    const props = {
      phones: [],
      isFetching: true,
      onFetchPhones: fetchPhones
    }
    const wrapper = shallow(<Catalogue {...props}/>);
    expect(wrapper.exists('[data-test="loading"]')).toBe(true);
    expect(wrapper.exists('[data-test="phone-list"]')).toBe(false);
  });

  it('renders the phone list when phones are present', () => {
    const props = {
      phones: [{"id":0},{"id":1}],
      isFetching: false,
      onFetchPhones: fetchPhones
    }
    const wrapper = shallow(<Catalogue {...props}/>);
    expect(wrapper.exists('[data-test="loading"]')).toBe(false);
    expect(wrapper.exists('[data-test="phone-list"]')).toBe(true);
  });

  it('renders the phone components properly', () => {
    const props = {
      phones: [{"id":0},{"id":1}],
      isFetching: false,
      onFetchPhones: fetchPhones
    }
    const wrapper = mount(<Catalogue {...props}/>);
    expect(wrapper.find(Phone).length).toBe(2);
    expect(wrapper.exists('[data-test="phone-list"]')).toBe(true);
  });
});



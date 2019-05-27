import * as types from '../actions/ActionTypes';
import * as actions from '../actions/PhoneActions';
import moxios from 'moxios';
import configMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import expect from 'expect';

const reqURI = 'http://localhost:3001/phones'
const mockStore = configMockStore([thunkMiddleware]);

describe('Phone actions', () => {

  it('should create an action to request all phones', () => {
    const expectedAction = {
      type: types.REQUEST_PHONES
    }
    expect(actions.requestPhones()).toEqual(expectedAction);
  });

  it('should create an action to receive all phones', () => {
    const json = {
      "sample" : "json",
      "id" : 4,
      "stuff" : "yeah"
    }
    const expectedAction = {
      type : types.RECEIVE_PHONES,
      phones : json
    }
    expect(actions.receivePhones(json)).toEqual(expectedAction);
  });

  it('should create the right actions when fetching phones from the server', () => {
    const phonesData = [
      { id: 0, name: "iPhone7" },
      { id: 1, name: "XiaoMiA2" }
    ];
    
    moxios.install();
    let request = moxios.stubRequest(reqURI, { status: 200, response: phonesData });

    const expectedActions = [
      { type: types.REQUEST_PHONES },
      { type: types.RECEIVE_PHONES, phones: phonesData }
    ]
    const store = mockStore();

    return store.dispatch(actions.fetchPhones())
                .then(() => {
                  expect(store.getActions()).toEqual(expectedActions);
                });
  });

});

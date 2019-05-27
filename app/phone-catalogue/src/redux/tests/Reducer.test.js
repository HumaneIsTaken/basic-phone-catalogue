import reducer from '../reducers/index';
import * as types from '../actions/ActionTypes';
import expect from 'expect';

describe('Root reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({"isFetching" : false, "phones" : []});
  });

  it('should return the correct state when requesting phones', () => {
    const testAction = {
      type : types.REQUEST_PHONES
    }
    expect(reducer(undefined, testAction))
      .toEqual({"isFetching" : true, "phones" : []});
  });

  it('should return the correct state when receiving phones', () => {
    const data = [{"some" : "data" }];
    const testAction = {
      type : types.RECEIVE_PHONES,
      phones : data
    }
    expect(reducer(undefined, testAction))
      .toEqual({"isFetching" : false, "phones" : data});
  });

});


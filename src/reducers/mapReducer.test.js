import mapReducer from "./mapReducer";
import {expect} from 'chai';
const df= require('deep-freeze-strict');

describe('mapReducer', () => {
  
  it('should set state when start location fetch', () => {
    let action = {
      type: 'START_LOCATION_FETCH'
    };
    let state = {
      isFetching: true,
      url: undefined
    }
    let res = mapReducer(df(''),df(action));
    expect(res).to.deep.equal(state);
    
  });
});
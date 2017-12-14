import mapReducer from "./mapReducer";
import {expect} from 'chai'

describe('mapReducer', () => {
  
  it('should set state when start location fetch', () => {
    let action = {
      type: 'START_LOCATION_FETCH'
    };
    let state = {
      isFetching: true,
      url: undefined
    }
    let res = mapReducer('',action);
    expect(res).to.deep.equal(state);
    
  });
});
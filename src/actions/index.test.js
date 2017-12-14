const expect = require('chai').expect;
const actions = require('./index');

describe('Actions', () => {
  it('shoudl generate action START_LOCATION_FETCH', () => {
    let action = {
      type: 'START_LOCATION_FETCH'
    };

    let res = actions.startLocationFetch();

    expect(res).to.deep.equal(action);
  });

  it('shoudl generate action COMPLETE_LOCATION_FETCH', () => {
    let url = 'url';
    let action = {
      type: 'COMPLETE_LOCATION_FETCH',
      url
    };

    let res = actions.completeLocationFetch(url);

    expect(res).to.deep.equal(action);
  });

  it('shoudl generate action COMPLETE_LOCATION_FETCH', () => {
    // how to test axios ?
  });
});

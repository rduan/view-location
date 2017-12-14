const axios = require('axios');

export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

export const fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then((res)=>{
      const loc = res.data.loc;
      const baseUrl = 'http://maps.google.com?q=';
      dispatch(completeLocationFetch(baseUrl+loc));
    })
  }
}
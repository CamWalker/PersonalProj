export const GET_FEED = 'GET_FEED';
export const ACT_FEED = 'ACT_FEED';

import axios from 'axios';

export function activate() {
  return {
    type: ACT_FEED
  }
}

export function getFeed(lat, long, id) {
  // RETURN AXIOS AJAX REQUEST //
  console.log('getting feed');
  const url = '/feed/' + id;
  const request = axios.put(url, {
    latitude: lat,
    longitude: long
  });

  return {
    type: GET_FEED,
    payload: request
  }
}

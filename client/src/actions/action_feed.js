export const GET_FEED = 'GET_FEED';
import axios from 'axios';

export function getFeed(lat, long) {
  // RETURN AXIOS AJAX REQUEST //
  const id = 1
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

export const GET_FEED = 'GET_FEED';
import axios from 'axios';

export function getFeed(lat, long, id) {
  // RETURN AXIOS AJAX REQUEST //
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

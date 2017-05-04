export const GET_LOCATION = 'GET_LOCATION';
import axios from 'axios';
import { API_KEY } from './config.js';



export function getLocation(lat, long) {
  const url2 = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + API_KEY
  axios.get(url2)
    .then((response) => {
      console.log(response);
      return {
        type: GET_LOCATION,
        payload: response
      }
    })
}

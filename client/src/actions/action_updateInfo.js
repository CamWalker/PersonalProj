export const UPDATE_INFO = 'UPDATE_INFO';
import axios from 'axios';

export function updateInfo(values, newImage) {
  // RETURN AXIOS AJAX REQUEST //

  const imageUpdate = axios.put('/newimage/', { newImage });

  const request = axios.put('/profile/' + values.profileid + '/' , { values });

  return {
    type: UPDATE_INFO,
    payload: request
  }
}

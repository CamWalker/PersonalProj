export const UPDATE_INFO = 'UPDATE_INFO';
import axios from 'axios';

export function updateInfo(values) {
  // RETURN AXIOS AJAX REQUEST //
  const request = axios.put('/profile/' + values.profileid + '/' , {
    values: values
  });

  return {
    type: UPDATE_INFO,
    payload: request
  }
}

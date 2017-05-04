export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
import axios from 'axios';


export function deleteAccount(id) {
  const request = axios.delete('/profile/' + id);

  return {
    type: DELETE_ACCOUNT,
    payload: request
  }
}

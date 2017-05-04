export const LOGIN = 'LOGIN';
import axios from 'axios';


export function loginAction(email, password) {
  const request = axios.get('/profile/' + email + '/' + password + '/');
  history.replaceState({state: undefined}, 'GoodTurn', '/');
  history.pushState({state: undefined}, 'GoodTurn', '/');


  return {
    type: LOGIN,
    payload: request
  }
}

export function signUpAction(values) {
  const request = axios.post('/profile/',{ values: values });
  history.replaceState({state: undefined}, 'GoodTurn', '/');
  history.pushState({state: undefined}, 'GoodTurn', '/');

  return {
    type: LOGIN,
    payload: request
  }
}

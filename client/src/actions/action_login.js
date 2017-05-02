export const LOGIN = 'LOGIN';

export function loginAction(email, password) {
  console.log(email, password);

  history.replaceState({state: undefined}, 'GoodTurn', '/');
  history.pushState({state: undefined}, 'GoodTurn', '/');
  return {
    type: LOGIN,
    email: email,
    password: password
  }
}

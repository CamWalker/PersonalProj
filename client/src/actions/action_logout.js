export const LOGOUT = 'LOGOUT';

export function logoutAction(email) {
  return {
    type: LOGOUT,
    email: email
  }
}

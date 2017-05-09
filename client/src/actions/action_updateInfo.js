export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';
export const CHANGE_EDITED = 'CHANGE_EDITED'
import axios from 'axios';

export function changeEditStatus() {
  return {
    type: CHANGE_EDITED
  }
}

export function updateInfo(values, newImage) {
  // RETURN AXIOS AJAX REQUEST //



  return (dispatch) => {
    axios.put('/newimage/', { newImage, id: values.profileid  })
      .then(() => {
        axios.put('/profile/' + values.profileid + '/' , { values })
          .then((user) => {
            updateSuccess(dispatch, user);
          })
          .catch(() => {
            updateFail(dispatch);
          });
      })
      .catch(() => updateFail(dispatch));

  }
}

export function updateSuccess(dispatch, user) {
  return dispatch({
    type: UPDATE_SUCCESS,
    payload: user
  })
}

export function updateFail(dispatch) {
  return dispatch({
    type: UPDATE_FAIL
  })
}

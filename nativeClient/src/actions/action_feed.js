export const GET_FEED = 'GET_FEED';
import axios from 'axios';
export const SEARCH_FILTER = 'SEARCH_FILTER';


export function search(term) {
  return {
    type: SEARCH_FILTER,
    payload: term,
  }
}

export function getFeed(lat, long, id) {
  // RETURN AXIOS AJAX REQUEST //
  return (dispatch) => {
    const url = 'http://localhost:8080/feed/' + id;
    axios.put(url, {
      latitude: lat,
      longitude: long
    })
      .then((feed) => {
        return dispatch({
          type: GET_FEED,
          payload: feed
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

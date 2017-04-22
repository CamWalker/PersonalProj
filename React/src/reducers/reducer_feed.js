import { GET_FEED } from '../actions/action_feed.js';
import { SEARCH_FILTER } from '../actions/action_search.js';

export default function(state = [], action) {
  const fullFeed = action.fullFeed;
  switch (action.type) {
    case GET_FEED:
      return {
        temp: action.payload,
        perm: action.payload
      };
      break;
    case SEARCH_FILTER:
        function profileSearch(term) {
         function JSONtreeSearch(inputINIT, searchTerm) {
           var search = inputINIT.map((v) => {
            function JSONtreeSearch1(inputINIT, searchTerm) {
              var returner = false
              function JSONtreeSearch2(inputINIT, searchTerm) {
                var input = inputINIT
                for (var key in input) {
                  if (typeof input[key] === 'object') {
                    JSONtreeSearch2((input[key]), searchTerm);
                  } else if (typeof input[key] === 'number') {
                  } else if ((input[key].toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1) {
                    returner = true;
                  }
                }
                return returner;
              }
              return JSONtreeSearch2(inputINIT, searchTerm);
            }
            return JSONtreeSearch1(v, searchTerm);
          })
          return search
         }
         const filtered = JSONtreeSearch(state.perm, term)
         const profiles = state.perm.filter((v, i) => filtered[i])
         return profiles;
       }
      return {
        temp: profileSearch(action.payload),
        perm: state.perm
      };
      break;
  }
  return state;
}

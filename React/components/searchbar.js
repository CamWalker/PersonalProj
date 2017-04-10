import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="searchBar">
        <input className="profileSearch" placeholder="Search profiles"
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
};

export default Searchbar;


// function JSONtreeSearch(inputINIT, searchTerm) {
//  var search = inputINIT.map((v) => {
//    function JSONtreeSearch1(inputINIT, searchTerm) {
//      var returner = false
//      function JSONtreeSearch2(inputINIT, searchTerm) {
//        var input = inputINIT
//        for (key in input) {
//          if (typeof input[key] === 'object') {
//            JSONtreeSearch2((input[key]), searchTerm);
//          } else if ((input[key].toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1) {
//            returner = true;
//          }
//
//        }
//        return returner;
//      }
//      return JSONtreeSearch2(inputINIT, searchTerm);
//    }
//    return JSONtreeSearch1(v, searchTerm);
//  })
//  return search
// }

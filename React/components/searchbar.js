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
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default Searchbar;

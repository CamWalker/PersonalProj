import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/action_search.js';
import { activate } from '../actions/action_feed';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.search(term);
  }

  pullFeed = () => {
    this.props.activate();
  }

  render() {
    return (
      <div className="searchBar">
        <input className="profileSearch" placeholder="Search profiles"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <div className="refresh-container" onClick={this.pullFeed}>
          <img className="refresh" src="../pics/WhiteG.png" alt="" />
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search, activate }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);

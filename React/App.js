import React from 'react';
import ProfileFeed from './components/profileFeed.js'
import Searchbar from './components/searchbar.js'
import SelectedProfile from './components/selectedProfile'


class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <div className="left-nav-items">
            <div className="blue-circle-container">
              <div className="profile-view">
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="logo-G" src="./GoodTurn.png" />
          </div>
          <div className="right-nav"></div>
        </header>


        <div className="below-nav">
          <div className="left-column">
            <div className="account-greeting-text">
              Welcome, Gil!
            </div>
            <div className="account-pic-container">
              <img className="account-pic" src="./gil-pic.JPG" />
            </div>
            <div className="account-options">
              <div className="account-options-box">Option 1</div>
              <div className="account-options-box">Option 2</div>
              <div className="account-options-box">Option 3</div>

            </div>
          </div>
          <div className="right-column">
            <div className="feed">
              <div className="gradient-back"></div>
              <Searchbar />
              <ProfileFeed />
            </div>
            <SelectedProfile />
          </div>
        </div>
      </main>
    );
  };
};

export default App;

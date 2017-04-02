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
              <img className="profile-pic" src="./gil-pic.JPG" alt="" />
            </div>
            <nav>
              <ul className="nav-items">
                <li><div className="reg-circle"></div></li>
                <li><div className="reg-circle"></div></li>
                <li><div className="reg-circle">Help</div></li>
              </ul>
            </nav>
          </div>
          <div className="logo">
            GoodTurn
          </div>
          <div className="right-nav"></div>
        </header>


        <div className="below-nav">
          <div className="left-column"></div>
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

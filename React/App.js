
var sampleData = [{
  first_name: 'Cameron',
  last_name: 'Walker',
  email: 'whatiscameronsemail@gmail.com',
  password: '*****',
  pic: 'http://www.me.com',
  specs: [
    {type: 'education', value: 'Dev Mountain', start_date: 'March 2017', end_date: 'June 2017'},
    {type: 'education', value: 'Brigham Young University', start_date: 'September 2008', end_date: 'April 2014'},
    {type: 'education', value: 'Foothill High School', start_date: 'September 2004', end_date: 'June 2008'},
    {type: 'work', value: 'Operations Analyst at Goldman Sachs', start_date: 'May 2014', end_date: 'March 2017'},
    {type: 'work', value: 'Economics Teaching Assistant at Brigham Young University', start_date: 'September 2012', end_date: 'May 2014'},
    {type: 'relation', value: 'married'},
    {type: 'relation', value: '1 child'},
    {type: 'relation', value: '4 siblings'},
    {type: 'lived', value: 'Salt Lake City, UT, USA'},
    {type: 'lived', value: 'Provo, UT, USA'},
    {type: 'lived', value: 'Rio de Janeiro, Brazil'},
    {type: 'lived', value: 'Henderson, NV, USA'},
  ],
  gtky: [
    'Building this website/app',
    '',
    ''
  ]},
  {
  first_name: 'test',
  last_name: '1',
  email: 'test1@gmail.com',
  password: '*****',
  pic: 'http://www.me.com',
  specs: [
    {type: 'education', value: 'test1 High School', start_date: 'September 2003', end_date: 'June 2004'},
    {type: 'work', value: 'test1 at test', start_date: 'May 2014', end_date: 'March 2017'},
    {type: 'relation', value: 'married'},
    {type: 'lived', value: 'Henderson, NV, USA'}
  ],
  gtky: [
    'test1',
    'test1',
    'test1'
  ]},
  {first_name: 'test',
  last_name: '2',
  email: 'test2@gmail.com',
  password: '*****',
  pic: 'http://www.me.com',
  specs: [
    {type: 'education', value: 'test2 High School', start_date: 'September 2003', end_date: 'June 2004'},
    {type: 'work', value: 'test2 at test', start_date: 'May 2014', end_date: 'March 2017'},
    {type: 'relation', value: 'married'},
    {type: 'lived', value: 'Elko, NV, USA'}
  ],
  gtky: [
    'something',
    null,
    'test2'
  ]},
  {first_name: 'test',
  last_name: '3',
  email: 'test3@gmail.com',
  password: '*****',
  pic: 'http://www.me.com',
  specs: [
    {type: 'education', value: 'test3 High School', start_date: 'September 2003', end_date: 'June 2004'},
    {type: 'work', value: 'test3 at test', start_date: 'May 2014', end_date: 'March 2017'},
    {type: 'lived', value: 'Seoul, South Korea'}
  ],
  gtky: [
    'nothing',
    null,
    'test3'
  ]}
]


var gtkyKEY = ['Ask me about...', "I'm too good for...", "Final questions"];


import React from 'react';
import ProfileFeed from './components/profileFeed.js'
import Searchbar from './components/searchbar.js'
import SelectedProfile from './components/selectedProfile'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: sampleData,
      gtkyKEY: gtkyKEY,
      selectedProfile: sampleData[0]
    };
  }


  //   this.profileSearch('');
  // }
  //
  // profileSearch(term) {
  //   this.setState({
  //     profiles: profiles,
  //     selectedProfile: profiles[0]
  //   });
  //   //Change class of selected item?
  // }

  render() {
    console.log(this.state.selectedProfile)
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
            <img className="logo-G" src="../pics/GoodTurn.png" />
          </div>
          <div className="right-nav"></div>
        </header>


        <div className="below-nav">
          <div className="left-column">
            <div>
              <div className="account-greeting-text">
                Welcome, Gil!
              </div>
              <div className="account-pic-container">
                <img className="account-pic" src="../pics/gil-pic.JPG" />
              </div>
            </div>
            <div className="account-options">
              <div className="account-options-box">Edit Profile</div>
              <div className="account-options-box">Settings</div>
              <div className="account-options-box">Log Out</div>

            </div>
          </div>
          <div className="right-column">
            <div className="feed">
              <div className="gradient-back"></div>
              <Searchbar />
              <ProfileFeed
                profiles={this.state.profiles}
                gtkyKEY={this.state.gtkyKEY}
                onProfileSelect={selectedProfile => {
                  this.setState({selectedProfile})
                }} />
            </div>
            <SelectedProfile
              profile={this.state.selectedProfile} />
          </div>
        </div>
      </main>
    );
  }
};

// <Searchbar onSearchTermChange={profileSearch} />
// <ProfileFeed
//   onProfileSelect={selectedProfile => this.setState({selectedProfile})}
//   profiles={this.state.profiles} />

export default App;

// FACEBOOK = me?fields=education,work,relationship_status,hometown,location,languages

var sampleData = [{
  first_name: 'Cameron',
  last_name: 'Walker',
  email: 'whatiscameronsemail@gmail.com',
  password: '*****',
  pic: '././pics/IMG_0759.JPG',
  specs: {
    education: [
      {value: 'Dev Mountain', start_date: 'March 2017', end_date: 'June 2017'},
      {value: 'Brigham Young University', start_date: 'September 2008', end_date: 'April 2014'},
      {value: 'Foothill High School', start_date: 'September 2004', end_date: 'June 2008'}
    ] ,
    work: [
      {value: 'Operations Analyst - Goldman Sachs', start_date: 'May 2014', end_date: 'March 2017'},
      {value: 'Economics Teaching Assistant - Brigham Young University', start_date: 'September 2012', end_date: 'May 2014'}
    ] ,
    relation: [
      {value: 'Married'},
      {value: '1 child'},
      {value: '4 siblings'},
    ],
    lived: [
      {value: 'Salt Lake City, UT, USA'},
      {value: 'Provo, UT, USA'},
      {value: 'Rio de Janeiro, Brazil'},
      {value: 'Henderson, NV, USA'},
    ]
  },
  gtky: [
    'Building this website/app',
    '',
    '',
    ''
  ]},
  {
    first_name: 'Barack',
    last_name: 'Obama',
    email: 'barackObama@gmail.com',
    password: '*****',
    pic: '././pics/Obama.JPG',
    specs: {
      education: [
        {value: 'Harvard University', start_date: '1988', end_date: '1991'},
        {value: 'Columbia University in the City of New York', start_date: '1981', end_date: '1983'},
        {value: 'Occidental College', start_date: '1979', end_date: '1981'}
      ] ,
      work: [
        {value: 'President - United States of America', start_date: 'January 2009', end_date: 'January 2017'},
        {value: 'US Senator (IL-D) - US Senate', start_date: 'January 2005', end_date: 'November 2008'},
        {value: 'State Senator - Illinois State Senate', start_date: '1997', end_date: '2004'},
        {value: 'Senior Lecturer in Law - University of Chicago Law School', start_date: '1993', end_date: '2004'}
      ] ,
      relation: [
        {value: 'Married'},
        {value: '2 children'},
      ],
      lived: [
        {value: 'Washington, DC, USA'},
        {value: 'Chicago, IL, USA'},
      ]
    },
    gtky: [
      'My thoughts on current US policy',
      'Bad policy',
      '',
      "I'm thinking"
    ]},
    {
      first_name: 'Donald',
      last_name: 'Trump',
      email: 'donaldTrump@gmail.com',
      password: '*****',
      pic: '././pics/Trump.jpeg',
      specs: {
        education: [
          {value: 'New York Military Academy', start_date: 'September 2004', end_date: 'June 2008'},
          {value: 'Wharton School of Finance', start_date: 'September 2004', end_date: 'June 2008'},
          {value: 'Fordham University', start_date: 'September 2004', end_date: 'June 2008'}
        ] ,
        work: [
          {value: 'President - United States of America', start_date: 'September 2012', end_date: 'May 2014'},
          {value: 'Realty Business Leader', start_date: 'September 2012', end_date: 'May 2014'},
          {value: 'Television Star - The Apprentice', start_date: 'September 2012', end_date: 'May 2014'},
        ] ,
        relation: [
          {value: 'Married'},
          {value: '5 children'},
        ],
        lived: [
          {value: 'Washington, DC, USA'},
          {value: 'Queens, NY, USA'},
        ]
      },
      gtky: [
        'Me',
        'Losers',
        '',
        ''
      ]}
]



var gtkyKEY = ['Ask me about...', "I'm too good for...", "My dream is...", 'Never interrupt me when...', ''];


import React from 'react';
import ProfileFeed from './components/profileFeed.js'
import Searchbar from './components/searchbar.js'
import SelectedProfile from './components/selectedProfile'
import _ from 'lodash';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: sampleData,
      gtkyKEY: gtkyKEY,
      selectedProfile: sampleData[0]
    };

    this.profileSearch('');
  }



  profileSearch(term) {
    function JSONtreeSearch(inputINIT, searchTerm) {
     var search = inputINIT.map((v) => {
       function JSONtreeSearch1(inputINIT, searchTerm) {
         var returner = false
         function JSONtreeSearch2(inputINIT, searchTerm) {
           var input = inputINIT
           for (var key in input) {
             if (typeof input[key] === 'object') {
               JSONtreeSearch2((input[key]), searchTerm);
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
    const filtered = JSONtreeSearch(sampleData, term)
    const profiles = sampleData.filter((v, i) => filtered[i])
    this.setState({
      profiles: profiles
    });
  }

  render() {
    const profileSearch = _.debounce((term) => {this.profileSearch(term)}, 300);
    return (
      <main>
        <header>
          <div className="left-nav-items">
            <div className="blue-circle-container">
              <img src="./pics/profile_white.png" className="profile-view" />
            </div>
          </div>
          <div className="logo">
            <img className="logo-G" src="../pics/GoodTurn Logo.png" />
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
              <div className="account-options-box">Help</div>
              <div className="account-options-box">Log Out</div>

            </div>
          </div>
          <div className="right-column">
            <div className="feed">
              <div className="gradient-back"></div>
              <Searchbar onSearchTermChange={profileSearch}/>
              <ProfileFeed
                profiles={this.state.profiles}
                gtkyKEY={this.state.gtkyKEY}
                selectedID={this.state.selectedProfile}
                onProfileSelect={selectedProfile => {
                  this.setState({selectedProfile})
                }} />
            </div>
            <SelectedProfile
              profile={this.state.selectedProfile}
              gtkyKEY={this.state.gtkyKEY} />
          </div>
        </div>
      </main>
    );
  }
};


export default App;

export const GET_FEED = 'GET_FEED';
var sampleData = [{
  id: 1,
  first_name: 'Cameron',
  last_name: 'Walker',
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
    id: 2,
    first_name: 'Barack',
    last_name: 'Obama',
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
      id: 3,
      first_name: 'Donald',
      last_name: 'Trump',
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


export function getFeed() {
  return {
    type: GET_FEED,
    payload: sampleData
  }
}

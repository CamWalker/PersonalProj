var sampleData = [{
    id: 0,
    email: 'whatiscameronsemail@gmail.com',
    password: '*****',
    lattitude: 12.3455677,
    longitude: 53.9382716
  },
  {
    id: 1,
    email: 'barackObama@gmail.com',
    password: '*****',
    lattitude: 13.3455677,
    longitude: 54.9382716
  },
  {
    id: 2,
    email: 'donaldTrump@gmail.com',
    password: '*****',
    lattitude: 15.3455677,
    longitude: 56.9382716
  }]


var exports = module.exports = {}

exports.updateCoords = function (req, res, next) {
  console.log(sampleData);
  var lattitude = Number(req.body.lattitude)
  var longitude = Number(req.body.longitude)
  sampleData.map( v => {
    if( v.email === req.body.email) {
      v.lattitude = lattitude; //change in database
      v.longitude = longitude;
    } else {
      return v;
    }
  });
  console.log(sampleData);
  // var feed = sampleData.map( v => return Math.sqrt(Math.pow((v.lattitude ), 2) + Math.pow((v.longitude), 2)))
  // console.log(feed);
  // req.body.feed = feed
  next();
}

var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');



exports.getUser = function (req, res, next) {
  db.getUser([Number(req.params.id)], function (err, user) {
    if (!err) {
      res.status(200).send(user[0])
    }
  })
};

exports.createUser = function (req, res, next) {
  console.log('Create User');
};

exports.updateUser = function (req, res, next) {
  req.body.specs = JSON.stringify(req.body.specs)
  req.body.gtky = JSON.stringify(req.body.gtky)
  db.updateUser([Number(req.params.id), req.body.first_name, req.body.last_name, req.body.pic, req.body.specs, req.body.gtky], function (err) {
    if (!err) {
      res.status(200).send('gtg');
    } else {
      console.log('error:', err);
    }
  })
};

exports.deleteUser = function (req, res, next) {
  db.deleteUserAccount([Number(req.params.id)], function (err) {
    if (!err) {
      db.deleteUserInfo([Number(req.params.id)], function (err) {
        if (!err) {
          res.status(200).send('deleted');
        } else {
          console.log('error:', err);
        }
      })
    } else {
      console.log('error:', err);
    }
  })
};

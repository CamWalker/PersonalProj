var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');



exports.getUser = function (req, res, next) {
  db.validatePass([req.params.email, req.params.password], function (err, user) {
    if(!err && user[0]) {
      db.getUser([Number(user[0].id)], function (err, user) {
        if (!err) {
          res.status(200).send(user[0])
        } else {
          res.status(401).send(false)
        }
      })
    } else {
      res.status(403).send(false)
    }
  })
};


exports.updateUser = function (req, res, next) {
  let values = req.body.values

  values.education = JSON.stringify(values.education)
  values.work = JSON.stringify(values.work)
  values.relation = JSON.stringify(values.relation)
  values.lived = JSON.stringify(values.lived)
  values.gtky = JSON.stringify(values.gtky)

  db.updateUser([Number(req.params.id), values.first_name, values.last_name, values.pic, values.education, values.work, values.relationship_status, values.relation, values.lived, values.gtky], function (err) {
    if (!err) {
      db.getUser([Number(req.params.id)], function (err, user) {
        if (!err) {
          res.status(200).send(user[0])
        } else {
          console.log('rejected');
          res.status(401).send(false)
        }
      })
    } else {
      console.log('error:', err);
      res.status(401).send('error', err)
    }
  })
};



exports.createUser = function (req, res, next) {
  db.validateEmail([req.body.values.email], function (err, response) {
    if (!response[0]) {
      db.createUserAccount([req.body.values.email, req.body.values.password], function (err) {
        if (!err) {
          db.validateEmail([req.body.values.email], function (err, user) {
            if (!err) {
              console.log(user[0]);
              db.createUserInfo([req.body.values.firstName, req.body.values.lastName, user[0].id], function (err) {
                if(!err) {
                  db.getUser([Number(user[0].id)], function (err, user) {
                    if (!err) {
                      res.status(200).send(user[0])
                    } else {
                      res.status(401).send(false)
                    }
                })
              }
              })
            }
          })
        }
      })
    } else {
      res.status(401).send('user already exists')
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

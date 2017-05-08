var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');
var AWS = require('aws-sdk');

const config1 = require('./config.js')
let s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: config1.AWS_key,
  secretAccessKey: config1.AWS_secret,
  region: config1.AWS_region
});

exports.getUser = function (req, res, next) {
  console.log('getting user');
  db.validateEmail([req.params.email], function (err, user) {
    if(!err && user[0]) {
      db.getUser([Number(user[0].id)], function (err, user) {
        if (!err) {
          user[0].email = req.params.email
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
  console.log(values);
  values.education = JSON.stringify(values.education)
  values.work = JSON.stringify(values.work)
  values.relation = JSON.stringify(values.relation)
  values.lived = JSON.stringify(values.lived)
  values.gtky = JSON.stringify(values.gtky)
  console.log(req.body, req.params);
  db.updateUser([Number(req.params.id), values.first_name, values.last_name, values.pic, values.education, values.work, values.relationship_status, values.relation, values.lived, values.gtky], function (err) {
    if (!err) {
      console.log('worked');
      db.getUser([Number(req.params.id)], function (err, user) {
        if (!err) {
          console.log('double worked');
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

exports.postImage = function (req, res, next) {


  const newImage = req.body.newImage

  buf = new Buffer(newImage.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  // bucketName var below crates a "folder" for each user
  var bucketName = 'goodturn-pics/' + newImage.userEmail;
  var params = {
    Bucket: bucketName,
    Key: newImage.imageName,
    Body: buf,
    ContentType: 'image/' + newImage.imageExtension,
    ACL: 'public-read'
  };
  s3.upload(params, function (err, data) {

    if (err) {
      console.log('error:', err);
      return res.status(500).send(err);
    }

    console.log(data);
    res.json(data);
  });

}


exports.createUser = function (req, res, next) {
  console.log(req.body);
  db.createUserAccount([req.body.values.email], function (err) {
    if (!err) {
      db.validateEmail([req.body.values.email], function (err, user) {
        if (!err) {
          console.log(user);
          db.createUserInfo([req.body.values.firstName, req.body.values.lastName, user[0].id], function (err) {
            if(!err) {
              db.getUser([Number(user[0].id)], function (err, user) {
                if (!err) {
                  console.log(user);
                  res.status(200).send(user[0])
                } else {
                  console.log('error1');
                  res.status(401).send(false)
                }
              })
            }
          })
        }
      })
    } else {
      console.log('error2');

      res.status(401).send('error')
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

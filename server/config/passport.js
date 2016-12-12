var LocalStrategy = require('passport-local').Strategy;
var db = require('../db/dbConfig.js');
var fs = require('fs');
var Promise = require('bluebird');
var bcrypt = require('bcryptjs');
bcrypt.compare = Promise.promisify(bcrypt.compare);


module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.find({where: {id: id}})
      .then(function(user) {
        done(null, user);
      })
      .catch(function(err) {
        done(err, null);
      });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
    function(req, email, password, done) {
      console.log('email:', email, 'password:', password);
      db.User.findOne({where: {email: email}})
        .then(function(user) {
          if (!user) {
            return done(null, false, { message: 'Username not found.' });
          }
          bcrypt.compare(password, user.password)
          .then(function(match) {
            if (!match) {
              return done(null, false, { message: 'Incorrect password.' });
            } else {
              return done(null, user);
            }
          });
        })
        .catch(function(err) {
          return done(err);
        });
    }
  ));


  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
    function(req, email, password, done) {
      db.User.findOne({where: { email: email }})
        .then(function(user) {
          if (user) {
            return done(null, false, { message: 'Username not available.' });
          } else {
            var randomName = '';
            fs.readFile(__dirname + '/../lib/1syllableadjectives.txt', (err, data) => {
              var data = JSON.parse(data);
              randomName += data[Math.floor(Math.random() * data.length)];
              fs.readFile(__dirname + '/../lib/1syllablenouns.txt', (err, data) => {
                var data = JSON.parse(data);
                randomName += data[Math.floor(Math.random() * data.length)];
                db.User.create({
                  username: randomName,
                  password: password,
                  email: email
                });
              });
            });
          }
        })
        .catch(function(err) {
          return done(err);
        });
    })
  );
};














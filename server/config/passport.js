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
    db.User.find({where: {id: id}}).then(function(user) {
      done(null, user);
    }).error(function(err) {
      done(err, null);
    });
  });

  // Relies on specific databse schema implementation, assume model name is User, method validPassword and Sequelize is the ORM
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
    function(req, email, password, done) {
      console.log('EMAIL PASSWORD: ', email, password);
      db.User.findOne({where: {email: email}})
        .then(function(user) {
          console.log('userSearch result', user);
          if (!user) {
            return done(null, false, { message: 'Username not found.' });
          }
          console.log('passwords: ', user.password, password);
          bcrypt.compare(password, user.password)
          .then(function(match) {
            console.log('match', match);
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
      console.log(email, password);
      db.User.findOne({where: { email: email }})
        .then(function(user) {
          console.log('false?', user);
          if (user) {
            return done(null, false, { message: 'Username not available.' });
          } else {
            console.log('RANNNN');
            var randomName = '';
            fs.readFile(__dirname + '/../lib/1syllableadjectives.txt', (err, data) => {
              var data = JSON.parse(data);
              randomName += data[Math.floor(Math.random() * data.length)];
              fs.readFile(__dirname + '/../lib/1syllablenouns.txt', (err, data) => {
                var data = JSON.parse(data);
                randomName += data[Math.floor(Math.random() * data.length)];
                console.log('randomname:', randomName);
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














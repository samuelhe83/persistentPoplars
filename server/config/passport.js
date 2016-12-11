var LocalStrategy = require('passport-local').Strategy;
var db = require('../db/dbConfig.js');
var fs = require('fs');


module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.find({where: {id: id}}).success(function(user){
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
      db.User.findOne({ where: {email: email} }).then(function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Username not found.' });
        }
        validPassword(username, password, function(bool) {
          if (bool) {
            return done(null, false, { message: 'Incorrect password.' });
          }
        });
        
        return done(null, user);
      });
    }
  ));


  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
    function(req, email, password, done) {
      db.User.findOne({ where: {email: email} }).then(function(err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, { message: 'Username not available.' });
        } else {
          var randomName = '';
          fs.readFile('../lib/1syllableadjectives.txt', (err, data) => {
            randomName += data[Math.random() * data.length];
            fs.readFile('../lib/1syllablenouns', (err, data) => {
              randomName += data[Math.random() * data.length];
            });
          });
          db.User.create({
            username: randomName,
            password: password,
            email: email
          });
        }
      });
    })
  )
}














var LocalStrategy = require('passport-local').Strategy;
var User;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.find({where: {id: id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null);
  });
});

// Relies on specific databse schema implementation, assume model name is User, and Sequelize is the ORM
passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function(email, password, done) {
    User.findOne({ where: {email: email} }).then(function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Username not found.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));



//incomplete
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function(email, password, done) {
    User.findOne({ where: {email: email} }).then(function(err, user) {
      if (err) { return done(err); }
      if (user) {
        return done(null, false, { message: 'Username not available.' });
      } else {
      //create username and password in database


      }
    });
  }


);

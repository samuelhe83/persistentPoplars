module.exports = function(app, express, passport) {

  app.post('/login', passport.authenticate('local-login', { 
    successRedirect: '/', 
    failureRedirect: '/login', 
    failureFlash: true })
  );

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup', 
    failureFlash: true })
  );
}
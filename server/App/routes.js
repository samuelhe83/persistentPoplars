module.exports = function(app, express, passport) {

  app.post('/login', passport.authenticate('local-signup', { 
    successRedirect: '/', 
    failureRedirect: '/login', 
    failureFlash: true })
  );

  app.post('signup', passport.authenticate('local-signin', {
    successRedirect: '/', 
    failureRedirect: '/login', 
    failureFlash: true })
  );
}
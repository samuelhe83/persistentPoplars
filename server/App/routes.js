module.exports = function(app, express, passport) {

  app.post('/login', passport.authenticate('local-login', { 
    successRedirect: '/', 
    failureRedirect: '/login', 
    failureFlash: true })
  );

  app.post('logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup', 
    failureFlash: true })
  );
}

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}
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



  app.get('/proposals', function(req, res) {
    db.Proposal.findAll().then(function(proposals){
      console.log('proposals are: ', proposals);
      res.send(proposals);
    })
  });

  app.get('/proposals/:id', function(req, res) {
    var id = req.params.id;
    db.Proposal.findOne({ 
        where: {
          id: id
        }
      })
  });
/*
  app.post('/proposal', function(req, res){
    db.Proposal.create(req.body);
  })*/
}
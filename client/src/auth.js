import $ from 'jquery';

var authenticated = false;

module.exports = {
  login: function(email, password, reportAuthCB) {
    if (authenticated) {
      reportAuthCB(true);
      return;
    }
    loginAjax(email, password, function(res) {
      if (res.authenticated) {
        authenticated = true;
        reportAuthCB(true);
      } else {
        reportAuthCB(false);
      }
    });
  },
  loggedIn: function() {
    return authenticated;
  }
};

















function loginAjax(email, password, cb) {
  $.ajax({
    url: '/login',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({email: email, password: password}),
    success: function(data) {
      console.log('login success', data);
      cb({authenticated: true});
    },
    error: function(data) {
      console.log('loginFail', data);
      cb({authenticated: false});
    }
  });
};
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import $ from 'jquery';

import ProposalList from './ProposalList.jsx';
import Navbar from './NavBar.jsx';
import NotFound from './NotFound.jsx';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Binding 'this' here is necessary to have 'this' in requireAuth method bound
    // to the react class instance with ES6.
    this.requireAuth = this.requireAuth.bind(this);
    this.loginAjax = this.loginAjax.bind(this);
    this.state = {
      email: null,
      authenticated: false,
    };
  }

  requireAuth(nextState, replace) {
    if (!this.state.authenticated) {
      replace({pathname: '/login'});
    }
  }

  loginAjax(email, password) {
    console.log(email);
    $.ajax({
      url: '/login',
      method: 'POST',
      contentType: 'application/json',
      // data: JSON.stringify({email: this.state.email, password: this.state.password}),
      data: JSON.stringify({email: email, password: password}),
      success: (data) => { console.log(data); }
    });
  }

  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={NotFound} onEnter={this.requireAuth} />
          <Route loginAjax={this.loginAjax} path='/login' component={Login} />
          <Route path='*' component={NotFound} />
        </Router>
    );
  }
}






module.exports = App;
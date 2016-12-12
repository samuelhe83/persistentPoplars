import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';
import 'whatwg-fetch';

import ProposalList from './ProposalList.jsx';
import Navbar from './NavBar.jsx';
import NotFound from './NotFound.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NewProposal from './NewProposal.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Binding 'this' here is necessary to have 'this' in requireAuth method bound
    // to the react class instance with ES6.
    this.requireAuth = this.requireAuth.bind(this);
    this.loginAjax = this.loginAjax.bind(this);
    this.getProposalsAjax = this.getProposalsAjax.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
  }


  requireAuth(nextState, replace) {
    console.log(this.state.authenticated);
    if (!this.state.authenticated) {
      replace({pathname: '/login'});
    }
  }


  loginAjax(email, password, e) {
    e.preventDefault();
    var component = this;
    $.ajax({
      url: '/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({email: email, password: password}),
      success: function(data) {
        console.log('Login successful');
        component.setState({lorginError: false, authenticated: true});
      },
      error: function(data) {
        console.log('Login error');
        component.setState({loginError: true});
        console.log(component.state.loginError);
      }
    });
  }

  getProposalsAjax(cb) {
    $.ajax({
      url:'/proposals',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {cb(data);}
    });
  }


  render() {
    return (

        <Router history={browserHistory}>
          

          <Route path='/login' loginAjax={this.loginAjax} component={Login} />
          <Route path='/home' getProposalsAjax={this.getProposalsAjax} component={Dashboard}>
            <Route path='/newproposal' component={NewProposal} />
          </Route>
          <Route path='/signup' onEnter={this.requireAuth} component={Signup} />
          <Route path='/login' loginError={this.state.loginError} loginAjax={this.loginAjax} component={Login} />
          <Route path="*" component={NotFound} />
        </Router>
    );
  }
}






module.exports = App;
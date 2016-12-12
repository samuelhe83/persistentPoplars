import React from 'react';
import { Link } from 'react-router';
import auth from '../auth.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.state = {
      email: null,
      password: null,
      error: false
    };
  }

  changeEmail(e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  }
  changePassword(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  handleLogin(email, password, component, e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    auth.login(email, password, function(loggedIn) {
      if (!loggedIn) {
        return component.setState({error: true});
      }
      component.props.router.replace('/home');
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin.bind(this, this.state.email, this.state.password, this)}>
          <input onChange={this.changeEmail} type="text" placeholder="Email" /><br/>
          <input onChange={this.changePassword} type="password" placeholder="Password" /><br/>
          <button>Login</button>
          {this.state.error && (<p>Login Failed</p>)}
        </form>
        <Link to='/signup'>Create an account</Link><br/>
        <Link to='/secure'>Link to secure</Link>
      </div>
    );
  }
}


module.exports = Login;
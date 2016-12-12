import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signupAjax = this.signupAjax.bind(this);
    this.state = {
      email: null,
      password: null
    };
  }

  changeEmail(e) {
    console.log(e.target);
    this.setState({email: e.target.value});
  }
  changePassword(e) {
    this.setState({password: e.target.value});
  }

  signupAjax() {
    console.log('SEND');
    $.ajax({
      url: '/signup',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({email: this.state.email, password: this.state.password}),
      success: (data) => { console.log(data); }
    });
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.signupAjax}>
          <input onChange={this.changeEmail} name="email" type="text" placeholder="Email" /><br/>
          <input onChange={this.changePassword} type="password" placeholder="Password" /><br/>
          <button>Create Account</button>
        </form>
        Already have an account? <Link to='/login'>Sign in</Link>
      </div>
    );
  }
}

module.exports = Signup;
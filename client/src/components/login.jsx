import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.state = {
      email: null,
      password: null
    };
  }

  changeEmail(e) {
    this.setState({email: e.target.value});
  }
  changePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.props.route.loginAjax.bind(null, this.state.email, this.state.password)}>
          <input onChange={this.changeEmail} type="text" placeholder="Email" /><br/>
          <input onChange={this.changePassword} type="password" placeholder="Password" /><br/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}


module.exports = Login;
import React from 'react';

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.route.loginAjax}>
        <input onChange={props.route.changeEmail} type="text" placeholder="Email" /><br/>
        <input onChange={props.route.changePassword} type="password" placeholder="Password" /><br/>
        <button>Login</button>
      </form>
    </div>
  );
};


module.exports = Login;
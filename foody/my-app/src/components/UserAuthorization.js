import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class UserAuthorizationForm extends Component {
  state = {
    on: true,
  };

  handleCheckSignIn = () => {
    this.setState({
      on: true,
    });
  };

  handleCheckSignUp = () => {
    this.setState({
      on: false,
    });
  };

  render() {
    const { on } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleCheckSignIn}>
          Sign in
        </button>{' '}
        <button type="button" onClick={this.handleCheckSignUp}>
          Sign up{' '}
        </button>{' '}
        {on ? <SignIn /> : <SignUp />}{' '}
      </div>
    );
  }
}

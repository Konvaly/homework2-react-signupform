import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ nameValue: value });
  };

  handleEmailChange = ({ targer: { value } }) => {
    this.setState({ emailValue: value });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ passwordValue: value });
  };

  render () {
    const { nameValue, emailValue, passwordValue } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Enter your name
          <input
            type='text'
            placeholder='name'
            name='name'
            value={nameValue}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Enter your e-mail
          <input
            type='email'
            placeholder='email'
            name='email'
            value={emailValue}
            onChange={this.handleEmailChange}
          />
        </label>
        <label>
          Enter your password
          <input
            type='password'
            placeholder='password'
            name='password'
            value={passwordValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <label>
          <button type='submit'>SignUp</button>
        </label>
      </form>
    );
  }
}

export default SignUpForm;

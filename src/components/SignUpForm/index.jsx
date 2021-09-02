import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      isPasswordValid: false,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ nameValue: value });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({ emailValue: value });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      passwordValue: value,
      isPasswordValid: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/.test(
        value
      ),
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render () {
    const {
      nameValue,
      emailValue,
      passwordValue,
      isPasswordValid,
    } = this.state;
    const passwordClassName = classNames(
      styles.input,
      isPasswordValid ? styles.valid : styles.invalid
    );
    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.inputLabel}>
          Enter your name
          <input
            className={styles.input}
            type='text'
            placeholder='name'
            name='nameValue'
            value={nameValue}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Enter your e-mail
          <input
            className={styles.input}
            type='email'
            placeholder='email'
            name='emailValue'
            value={emailValue}
            onChange={this.handleEmailChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Enter your password
          <input
            className={passwordClassName}
            type='password'
            placeholder='password'
            name='passwordValue'
            value={passwordValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <label className={styles.btnLabel}>
          <button className={styles.btnSignUp} type='submit'>
            SignUp
          </button>
        </label>
      </form>
    );
  }
}

export default SignUpForm;

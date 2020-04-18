import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.scss';

const SignIn = ({ emailSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email, password });
    } catch (err) {
      console.error(err);
    }

    setCredentials({ email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

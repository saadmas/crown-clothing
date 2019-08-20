import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './LoginPage.scss';

const LoginPage = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;

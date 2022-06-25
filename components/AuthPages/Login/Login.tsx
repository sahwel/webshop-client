import { useCallback, useState } from 'react';
import AuthPagesContainer from '../AuthPagesContainer';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import LoginInputs from './LoginInputs';

const Login = () => {
  return (
    <AuthPagesContainer>
      <form className="pt-20 grid gap-16 ">
        <LoginHeader />
        <LoginInputs />
        <LoginFooter />
      </form>
    </AuthPagesContainer>
  );
};

export default Login;

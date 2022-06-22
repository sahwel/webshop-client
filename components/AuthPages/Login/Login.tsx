import { useCallback, useState } from 'react';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import LoginInputs from './LoginInputs';

const Login = () => {
  return (
    <div>
      <form className="pt-20 grid gap-16 ">
        <LoginHeader />
        <LoginInputs />
        <LoginFooter />
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import AuthPagesContainer from '../AuthPagesContainer';
import ForgotFooter from './Components/ForgotFooter';
import ForgotHeader from './Components/ForgotHeader';
import ForgotInputs from './Components/ForgotInputs';

const Forgot = () => {
  return (
    <AuthPagesContainer>
      <form className="pt-20 grid gap-16 ">
        <ForgotHeader />
        <ForgotInputs />
        <ForgotFooter />
      </form>
    </AuthPagesContainer>
  );
};

export default Forgot;

import React from 'react';
import AuthPagesContainer from '../components/AuthPages/AuthPagesContainer';
import Register from '../components/AuthPages/Register/Register';

const register = () => {
  return (
    <AuthPagesContainer>
      <Register />
    </AuthPagesContainer>
  );
};

export default register;

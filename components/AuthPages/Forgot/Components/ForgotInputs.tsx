import Input from '@/components/common/Form/Input/Input';
import InputContainer from '@/components/common/Form/InputContainer';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const ForgotInputs = () => {
  return (
    <InputContainer>
      <p>
        Enter the email associated with your account and we’ll send you an email
        with instructions to reset your password
      </p>
      <Input type="text" placeholder="Email" icon={faEnvelope} />
    </InputContainer>
  );
};

export default ForgotInputs;

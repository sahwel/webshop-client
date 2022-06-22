import React from 'react';
import { faEnvelope, faFaceGrin } from '@fortawesome/free-regular-svg-icons';
import Input from '../../../common/Form/Input/Input';

const FirstSection = () => {
  return (
    <>
      <p>Please enter some of your personal datas, then hit next!</p>
      <Input type="text" placeholder="Email" icon={faEnvelope} />
      <Input type="text" placeholder="First name" icon={faFaceGrin} />
      <Input type="text" placeholder="Last name" icon={faFaceGrin} />
    </>
  );
};

export default FirstSection;

import {
  faEnvelope,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Input from '../../common/Form/Input/Input';
import InputContainer from '../../common/Form/InputContainer';

const LoginInputs = ({}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handleIsPasswordShowChange = useCallback(() => {
    setIsPasswordShow((oldState) => !oldState);
  }, []);

  return (
    <InputContainer>
      <Input type="text" placeholder="Email" icon={faEnvelope} />
      <div>
        <Input
          type={isPasswordShow ? 'text' : 'password'}
          placeholder="Password"
          icon={isPasswordShow ? faEye : faEyeSlash}
          iconClassName="cursor-pointer"
          onIconClick={handleIsPasswordShowChange}
        />
        <Link href="/forgot">
          <p className="text-right text-sm cursor-pointer mt-1">
            Forgot you password?
          </p>
        </Link>
      </div>
    </InputContainer>
  );
};

export default LoginInputs;

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useState } from 'react';
import Input from '../../../common/Form/Input/Input';

const ThirdSection = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handleIsPasswordShowChange = useCallback(() => {
    setIsPasswordShow((oldState) => !oldState);
  }, []);

  return (
    <>
      <p>Please create a password for your profile</p>
      <Input
        type={isPasswordShow ? 'text' : 'password'}
        placeholder="Password"
        icon={isPasswordShow ? faEye : faEyeSlash}
        iconClassName="cursor-pointer"
        onIconClick={handleIsPasswordShowChange}
      />
      <Input
        type={isPasswordShow ? 'text' : 'password'}
        placeholder="Re-password"
        icon={isPasswordShow ? faEye : faEyeSlash}
        iconClassName="cursor-pointer"
        onIconClick={handleIsPasswordShowChange}
      />
    </>
  );
};

export default ThirdSection;

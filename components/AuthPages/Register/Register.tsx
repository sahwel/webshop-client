import { useCallback, useState } from 'react';
import AuthPagesContainer from '../AuthPagesContainer';
import RegisterFooter from './RegisterFooter';
import RegisterHeader from './RegisterHeader';
import RegisterInputs from './RegisterInputs';
import { Section } from './services/definitions';

const Register = () => {
  const [section, setSection] = useState<Section>(Section.firstSection);
  const handleSectionChange = useCallback((toFoward: boolean) => {
    setSection((oldSection) => oldSection + (toFoward ? 1 : -1));
  }, []);

  return (
    <AuthPagesContainer>
      <form className="pt-20 grid gap-12 ">
        <RegisterHeader />
        <RegisterInputs section={section} />
        <RegisterFooter
          handleSectionChange={handleSectionChange}
          section={section}
        />
      </form>
    </AuthPagesContainer>
  );
};

export default Register;

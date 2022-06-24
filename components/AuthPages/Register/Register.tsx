import { useCallback, useState } from 'react';
import RegisterFooter from './RegisterFooter';
import RegisterHeader from './RegisterHeader';
import RegisterInputs from './RegisterInputs';
import { Section } from './services/definitions';

const Register = () => {
  const [section, setSection] = useState<Section>(Section.firstSection);
  const handleSectionChange = useCallback((toFoward: boolean) => {
    console.log('asd');
    setSection((oldSection) => oldSection + (toFoward ? 1 : -1));
  }, []);

  return (
    <div>
      <form className="pt-20 grid gap-12 ">
        <RegisterHeader />
        <RegisterInputs section={section} />
        <RegisterFooter
          handleSectionChange={handleSectionChange}
          section={section}
        />
      </form>
    </div>
  );
};

export default Register;

import dynamic from 'next/dynamic';
import React, { FunctionComponent } from 'react';
import InputContainer from '../../common/Form/InputContainer';
import FirstSection from './Sectionts/FirstSection';
import { Section } from './services/definitions';
const SecondSection = dynamic(() => import('./Sectionts/SecondSection'), {
  ssr: false,
});

interface RegisterInputsProps {
  section: Section;
}

const RegisterInputs: FunctionComponent<RegisterInputsProps> = ({
  section,
}) => {
  return (
    <InputContainer>
      {section === Section.firstSection && <FirstSection />}
      {section === Section.secondSection && <SecondSection />}
    </InputContainer>
  );
};

export default RegisterInputs;

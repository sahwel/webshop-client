import dynamic from 'next/dynamic';
import React, { FunctionComponent, ReactNode } from 'react';
import InputContainer from '../../common/Form/InputContainer';
import Loading from '../../common/Loading/Loading';
import FirstSection from './Sectionts/FirstSection';
import { Section } from './services/definitions';
const SecondSection = dynamic(() => import('./Sectionts/SecondSection'), {
  loading: () => <Loading />,
});
const ThirdSection = dynamic(() => import('./Sectionts/ThirdSection'), {
  loading: () => <Loading />,
});

interface RegisterInputsProps {
  section: Section;
}

type neededSectionType = {
  [key in Section]: ReactNode;
};

const neededSection: neededSectionType = {
  [Section.firstSection]: <FirstSection />,
  [Section.secondSection]: <SecondSection />,
  [Section.thirdSection]: <ThirdSection />,
};

const RegisterInputs: FunctionComponent<RegisterInputsProps> = ({
  section,
}) => {
  return <InputContainer>{neededSection[section]}</InputContainer>;
};

export default RegisterInputs;

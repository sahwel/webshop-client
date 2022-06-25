import Link from 'next/link';
import { FunctionComponent, useCallback, MouseEvent } from 'react';
import Button from '../../common/Form/Button/Button';
import { Section } from './services/definitions';

interface RegisterFooterProps {
  handleSectionChange: (toFoward: boolean) => void;
  section: Section;
}

const RegisterFooter: FunctionComponent<RegisterFooterProps> = ({
  handleSectionChange,
  section,
}) => {
  const sectionChangeToFoward = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      section < Section.thirdSection && event.preventDefault();
      handleSectionChange(true);
    },
    []
  );

  const sectionChangeToBackward = useCallback(() => {
    handleSectionChange(false);
  }, []);

  return (
    <div>
      <Button
        children="Next"
        type={section >= Section.secondSection ? 'submit' : 'button'}
        onClick={sectionChangeToFoward}
      />
      {section === Section.firstSection && (
        <Link href="/login" passHref>
          <a className="text-center block text-sm mt-2 cursor-pointer">Back</a>
        </Link>
      )}
      {section >= Section.secondSection && (
        <p
          onClick={sectionChangeToBackward}
          className="text-center text-sm mt-2 cursor-pointer"
        >
          Back
        </p>
      )}
    </div>
  );
};

export default RegisterFooter;

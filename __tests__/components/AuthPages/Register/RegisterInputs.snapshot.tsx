import { render, renderHook } from '@testing-library/react';
import RegisterInputs from '@/components/AuthPages/Register/RegisterInputs';
import { Section } from '@/components/AuthPages/Register/services/definitions';

describe('RegisterInputs Snapshot with first section', () => {
  it('renders RegisterInputs with first sectionunchanged', () => {
    const { container } = render(
      <RegisterInputs section={Section.firstSection} />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('RegisterInputs Snapshot with second section', () => {
  it('renders RegisterInputs with second sectionunchanged', () => {
    const { container } = render(
      <RegisterInputs section={Section.secondSection} />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('RegisterInputs Snapshot with third section', () => {
  it('renders RegisterInputs with third sectionunchanged', () => {
    const { container } = render(
      <RegisterInputs section={Section.thirdSection} />
    );
    expect(container).toMatchSnapshot();
  });
});

import { render, renderHook, RenderHookResult } from '@testing-library/react';
import RegisterFooter from '@/components/AuthPages/Register/RegisterFooter';
import { Section } from '@/components/AuthPages/Register/services/definitions';

describe('RegisterFooter Snapshot with first section', () => {
  it('renders RegisterFooter with first sectionunchanged', () => {
    const { container } = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.firstSection}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('RegisterFooter Snapshot with second section', () => {
  it('renders RegisterFooter with second sectionunchanged', () => {
    const { container } = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.secondSection}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('RegisterFooter Snapshot with third section', () => {
  it('renders RegisterFooter with third sectionunchanged', () => {
    const { container } = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.thirdSection}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import RegisterFooter from '@/components/AuthPages/Register/RegisterFooter';
import { Section } from '@/components/AuthPages/Register/services/definitions';
import React from 'react';

describe('Register footer with first section', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.firstSection}
      />
    );
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the next button', () => {
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('button');
    expect(signInButton.textContent).toBe('Next');
  });

  it('renders the login link', () => {
    const forgotLink = page.container.getElementsByTagName('a')[0];
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/login');
  });
});

describe('Register footer with second section', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.secondSection}
      />
    );
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the next button', () => {
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('button');
    expect(signInButton.textContent).toBe('Next');
  });

  it('renders the back text', () => {
    const backText = page.container.getElementsByTagName('p')[0];
    expect(backText).toBeInTheDocument();
    expect(backText.textContent).toBe('Back');
  });
});

describe('Register footer with third section', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(
      <RegisterFooter
        handleSectionChange={function (toFoward: boolean): void {
          throw new Error('Function not implemented.');
        }}
        section={Section.thirdSection}
      />
    );
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the next button', () => {
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('submit');
    expect(signInButton.textContent).toBe('Sign up');
  });

  it('renders the back text', () => {
    const backText = page.container.getElementsByTagName('p')[0];
    expect(backText).toBeInTheDocument();
    expect(backText.textContent).toBe('Back');
  });
});

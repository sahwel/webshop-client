import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';
import RegisterHeader from '@/components/AuthPages/Register/RegisterHeader';

describe('Register header', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<RegisterHeader />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the heading with "Let’s sign up!"', () => {
    const heading = screen.getByRole('heading', {
      name: /Let’s sign up!/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading with "We are happy you’re,"', () => {
    const heading = screen.getByRole('heading', {
      name: 'We are happy you’re',
    });
    expect(heading).toBeInTheDocument();
  });

  it('joining us!"', () => {
    const heading = screen.getByRole('heading', {
      name: 'joining us!',
    });
    expect(heading).toBeInTheDocument();
  });
});

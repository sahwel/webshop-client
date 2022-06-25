import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';

describe('Login header', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<LoginHeader />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the heading with "lets sign you in!"', () => {
    const heading = screen.getByRole('heading', {
      name: /Let’s sign you in!/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading with "Welcome back,"', () => {
    const heading = screen.getByRole('heading', {
      name: /Welcome back,/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading with "you’ve been missed!"', () => {
    const heading = screen.getByRole('heading', {
      name: /you’ve been missed!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

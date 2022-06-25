import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import LoginInputs from '@/components/AuthPages/Login/LoginInputs';

describe('Login inputs', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<LoginInputs />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the email input', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('text');
  });

  it('renders the passowrd input', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  it('renders the forgot your password link', () => {
    const forgotLink = page.container.getElementsByTagName('a')[0];
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/forgot');
  });
});

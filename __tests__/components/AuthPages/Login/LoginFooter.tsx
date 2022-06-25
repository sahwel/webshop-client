import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import LoginFooter from '@/components/AuthPages/Login/LoginFooter';

describe('Login footer', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<LoginFooter />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the sign in button', () => {
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('submit');
    expect(signInButton.textContent).toBe('Sign in');
  });

  it('renders the register link', () => {
    const forgotLink = page.container.getElementsByTagName('a')[0];
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/register');
  });
});

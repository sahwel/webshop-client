import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import ForgotFooter from '@/components/AuthPages/Forgot/Components/ForgotFooter';

describe('Forgot footer', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<ForgotFooter />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the send email button', () => {
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('submit');
    expect(signInButton.textContent).toBe('Send email');
  });

  it('renders the back link', () => {
    const forgotLink = page.container.getElementsByTagName('a')[0];
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/login');
  });
});

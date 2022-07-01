import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import ForgotInputs from '@/components/AuthPages/Forgot/Components/ForgotInputs';

describe('Forogt inputs', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<ForgotInputs />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the email input', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('text');
  });

  it('renders the text', () => {
    const text = page.container.getElementsByTagName('p')[0];
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe(
      'Enter the email associated with your account and we’ll send you an email with instructions to reset your password'
    );
  });
});

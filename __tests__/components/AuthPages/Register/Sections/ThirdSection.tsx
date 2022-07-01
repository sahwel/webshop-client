import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import ThirdSection from '@/components/AuthPages/Register/Sectionts/ThirdSection';

describe('Register third section inputs', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<ThirdSection />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the password input', () => {
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('password');
  });

  it('renders the re-passwrod input', () => {
    const input = screen.getByPlaceholderText('Re-password');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('password');
  });
});

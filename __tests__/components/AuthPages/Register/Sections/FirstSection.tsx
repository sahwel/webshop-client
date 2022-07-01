import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import FirstSection from '@/components/AuthPages/Register/Sectionts/FirstSection';

describe('Register first section inputs', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<FirstSection />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the email input', () => {
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the first name input', () => {
    const input = screen.getByPlaceholderText('First name');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the last name input', () => {
    const input = screen.getByPlaceholderText('Last name');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });
});

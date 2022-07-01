import SecondSection from '@/components/AuthPages/Register/Sectionts/SecondSection';
import { cleanup, render, RenderResult, screen } from '@testing-library/react';

describe('Register second section inputs', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<SecondSection />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the country input', () => {
    const input = screen.getByPlaceholderText('Country');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the zip code input', () => {
    const input = screen.getByPlaceholderText('Zip Code');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the city input', () => {
    const input = screen.getByPlaceholderText('City');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the street input', () => {
    const input = screen.getByPlaceholderText('Street');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the house input', () => {
    const input = screen.getByPlaceholderText('House');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the other input', () => {
    const input = screen.getByPlaceholderText('Other');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
  });

  it('renders the billing address same... checkbox', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.getAttribute('type')).toBe('checkbox');
    expect(checkbox.getAttribute('id')).toBe('is-billing-same-as-normal-address');
    expect(checkbox.getAttribute('value')).toBe(
      'is-billing-same-as-normal-address'
    );
    expect(checkbox.getAttribute('name')).toBe(
      'is-billing-same-as-normal-address'
    );
  });

  it('renders the billing address same... label', () => {
    const label = page.container.getElementsByTagName('label')[0];
    expect(label).toBeInTheDocument();
    expect(label.getAttribute('for')).toBe('is-billing-same-as-normal-address');
    expect(label.textContent).toBe('Billing address equals with your address.');
  });
});

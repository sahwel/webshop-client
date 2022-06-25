import { render, screen } from '@testing-library/react';
import Button from '@/components/common/Form/Button/Button';

describe('Button', () => {
  it('renders with type and children', () => {
    render(<Button type="button">Save</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('type')).toBe('button');
    expect(button.textContent).toBe('Save');
  });
});

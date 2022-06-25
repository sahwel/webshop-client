import { render, screen } from '@testing-library/react';
import Input from '@/components/common/Form/Input/Input';
import { faEye } from '@fortawesome/free-regular-svg-icons';

describe('Input', () => {
  it('renders with type and icon', () => {
    const page = render(<Input type="text" placeholder="test" icon={faEye} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('placeholder')).toBe('test');
    expect(input.getAttribute('class')).toEqual('input');

    const icon = page.container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders with checkbox classname', () => {
    const page = render(<Input type="checkbox" placeholder="test" />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('checkbox');
    expect(input.getAttribute('placeholder')).toBe('test');
    expect(input.getAttribute('class')).toEqual('checkbox');
  });

  it('should not renders icon if type is checkbox', () => {
    const page = render(
      <Input type="checkbox" placeholder="test" icon={faEye} />
    );
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('checkbox');
    expect(input.getAttribute('placeholder')).toBe('test');
    expect(input.getAttribute('class')).toEqual('checkbox');

    const icon = page.container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });
});

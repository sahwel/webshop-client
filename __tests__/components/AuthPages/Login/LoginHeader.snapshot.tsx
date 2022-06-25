import { render } from '@testing-library/react';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';

describe('LoginHeader snapshot', () => {
  it('renders LoginHeader unchanged', () => {
    const { container } = render(<LoginHeader />);
    expect(container).toMatchSnapshot();
  });
});

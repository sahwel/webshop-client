import { render } from '@testing-library/react';
import LoginFooter from '@/components/AuthPages/Login/LoginFooter';

it('renders LoginFooter unchanged', () => {
  const { container } = render(<LoginFooter />);
  expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';

it('renders LoginHeader unchanged', () => {
  const { container } = render(<LoginHeader />);
  expect(container).toMatchSnapshot();
});

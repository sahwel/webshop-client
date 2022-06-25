import { render } from '@testing-library/react';
import LoginInputs from '@/components/AuthPages/Login/LoginInputs';

it('renders LoginInputs unchanged', () => {
  const { container } = render(<LoginInputs />);
  expect(container).toMatchSnapshot();
});

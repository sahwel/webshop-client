import { render, renderHook, RenderHookResult } from '@testing-library/react';
import ForgotFooter from '@/components/AuthPages/Forgot/Components/ForgotFooter';

describe('ForgotFooter Snapshot', () => {
  it('renders ForgotFooter unchanged', () => {
    const { container } = render(<ForgotFooter />);
    expect(container).toMatchSnapshot();
  });
});

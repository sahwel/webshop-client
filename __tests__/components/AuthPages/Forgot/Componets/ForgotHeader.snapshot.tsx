import { render, renderHook, RenderHookResult } from '@testing-library/react';
import ForgotHeader from '@/components/AuthPages/Forgot/Components/ForgotHeader';

describe('ForgotHeader Snapshot', () => {
  it('renders ForgotHeader unchanged', () => {
    const { container } = render(<ForgotHeader />);
    expect(container).toMatchSnapshot();
  });
});

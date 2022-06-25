import { render, renderHook, RenderHookResult } from '@testing-library/react';
import ForgotInputs from '@/components/AuthPages/Forgot/Components/ForgotInputs';

describe('ForgotInputs Snapshot', () => {
  it('renders ForgotInputs unchanged', () => {
    const { container } = render(<ForgotInputs />);
    expect(container).toMatchSnapshot();
  });
});

import { render, renderHook, RenderHookResult } from '@testing-library/react';
import RegisterHeader from '@/components/AuthPages/Register/RegisterHeader';

describe('RegisterHeader Snapshot', () => {
  it('renders RegisterHeader unchanged', () => {
    const { container } = render(<RegisterHeader />);
    expect(container).toMatchSnapshot();
  });
});

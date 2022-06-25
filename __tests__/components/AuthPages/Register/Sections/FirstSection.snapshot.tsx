import { render, renderHook, RenderHookResult } from '@testing-library/react';
import FirstSection from '@/components/AuthPages/Register/Sectionts/FirstSection';

describe('FirstSection Snapshot', () => {
  it('renders FirstSection unchanged', () => {
    const { container } = render(<FirstSection />);
    expect(container).toMatchSnapshot();
  });
});

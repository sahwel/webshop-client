import { render, renderHook, RenderHookResult } from '@testing-library/react';
import SecondSection from '@/components/AuthPages/Register/Sectionts/SecondSection';

describe('SecondSection Snapshot', () => {
  it('renders SecondSection unchanged', () => {
    const { container } = render(<SecondSection />);
    expect(container).toMatchSnapshot();
  });
});

import { render, renderHook, RenderHookResult } from '@testing-library/react';
import ThirdSection from '@/components/AuthPages/Register/Sectionts/ThirdSection';

describe('ThirdSection Snapshot', () => {
  it('renders ThirdSection unchanged', () => {
    const { container } = render(<ThirdSection />);
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import Button from '@/components/common/Form/Button/Button';

describe('Button Snapshot', () => {
  it('renders SecondButtonSection unchanged', () => {
    const { container } = render(<Button>Save</Button>);
    expect(container).toMatchSnapshot();
  });
});

import Loading from '@/components/common/Loading/Loading';
import { render } from '@testing-library/react';

describe('Loading snapshot', () => {
  it('renders Loading unchanged', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});

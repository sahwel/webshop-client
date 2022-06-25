import { render } from '@testing-library/react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Input from '@/components/common/Form/Input/Input';

describe('Input Snapshot', () => {
  it('renders Input unchanged (not checkbox)', () => {
    const { container } = render(
      <Input type="text" placeholder="test" icon={faEye} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders Input unchanged (nt checkbox)', () => {
    const { container } = render(
      <Input type="checkbox" placeholder="test" icon={faEye} />
    );
    expect(container).toMatchSnapshot();
  });
});

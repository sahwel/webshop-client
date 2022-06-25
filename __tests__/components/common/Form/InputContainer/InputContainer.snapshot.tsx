import InputContainer from '@/components/common/Form/InputContainer';
import { render } from '@testing-library/react';

describe('InputContainer snapshot', () => {
  it('renders InputContainer unchanged', () => {
    const { container } = render(
      <InputContainer children={<p>test children</p>} />
    );
    expect(container).toMatchSnapshot();
  });
});

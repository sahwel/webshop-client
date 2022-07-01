import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import ForgotHeader from '@/components/AuthPages/Forgot/Components/ForgotHeader';

describe('Forgot header', () => {
  let page: RenderResult;
  beforeEach(() => {
    page = render(<ForgotHeader />);
  });

  afterAll(() => {
    cleanup();
  });

  it('renders the heading ', () => {
    const heading = screen.getByRole('heading', {
      name: /Create your new password/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

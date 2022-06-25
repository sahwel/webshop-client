import {
  render,
  renderHook,
  RenderHookResult,
  screen,
} from '@testing-library/react';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import React from 'react';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../../../testUtils/MockThemeSelector';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';

React.useContext = mockUseThemeSelector;

describe('Login header', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders the heading with "lets sign you in!"', () => {
    render(<LoginHeader />);
    const heading = screen.getByRole('heading', {
      name: /Let’s sign you in!/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading with "Welcome back,"', () => {
    render(<LoginHeader />);
    const heading = screen.getByRole('heading', {
      name: /Welcome back,/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the heading with "you’ve been missed!"', () => {
    render(<LoginHeader />);
    const heading = screen.getByRole('heading', {
      name: /you’ve been missed!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

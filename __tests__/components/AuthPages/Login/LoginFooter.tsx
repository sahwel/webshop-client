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
import LoginFooter from '@/components/AuthPages/Login/LoginFooter';

React.useContext = mockUseThemeSelector;

describe('Login footer', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders the sign in button', () => {
    render(<LoginFooter />);
    const signInButton = screen.getByRole('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton.getAttribute('type')).toBe('submit');
    expect(signInButton.textContent).toBe('Sign in');
  });

  it('renders the register link', () => {
    const page = render(<LoginFooter />);
    const forgotLink = page.container.getElementsByTagName('a')[0];

    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/register');
  });
});

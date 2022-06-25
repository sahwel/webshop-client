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
import LoginInputs from '@/components/AuthPages/Login/LoginInputs';

React.useContext = mockUseThemeSelector;

describe('Login inputs', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders the email input', () => {
    render(<LoginInputs />);
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('text');
  });

  it('renders the passowrd input', () => {
    render(<LoginInputs />);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  it('renders the forgot your password link', () => {
    const page = render(<LoginInputs />);
    const forgotLink = page.container.getElementsByTagName('a')[0];
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink?.getAttribute('href')).toBe('/forgot');
  });
});

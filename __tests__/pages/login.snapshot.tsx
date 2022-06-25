import { render, renderHook } from '@testing-library/react';
import Login from '@/pages/login';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../testUtils/MockThemeSelector';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import React from 'react';

React.useContext = mockUseThemeSelector;

describe('login snapshot', () => {
  let _result;
  beforeEach(() => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });

    _result = result;
  });
  it('renders homepage unchanged', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});

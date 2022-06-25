import { render, renderHook } from '@testing-library/react';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../testUtils/MockThemeSelector';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import React from 'react';
import Register from '@/pages/register';

React.useContext = mockUseThemeSelector;

describe('register snapshot', () => {
  let _result;
  beforeEach(() => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });

    _result = result;
  });
  it('renders homepage unchanged', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});

import { render, renderHook } from '@testing-library/react';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../testUtils/MockThemeSelector';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import React from 'react';
import Forgot from '@/pages/forgot';

React.useContext = mockUseThemeSelector;

describe('forgot snapshot', () => {
  let _result;
  beforeEach(() => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });

    _result = result;
  });
  it('renders homepage unchanged', () => {
    const { container } = render(<Forgot />);
    expect(container).toMatchSnapshot();
  });
});

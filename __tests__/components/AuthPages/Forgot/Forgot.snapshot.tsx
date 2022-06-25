import { render, renderHook, RenderHookResult } from '@testing-library/react';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../../../testUtils/MockThemeSelector';
import React from 'react';
import Forgot from '@/pages/forgot';
React.useContext = mockUseThemeSelector;

describe('Forgot Snapshot', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders Forgot unchanged', () => {
    const { container } = render(<Forgot />);
    expect(container).toMatchSnapshot();
  });
});

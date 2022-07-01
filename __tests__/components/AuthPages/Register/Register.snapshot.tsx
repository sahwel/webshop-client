import { render, renderHook, RenderHookResult } from '@testing-library/react';
import Register from '@/components/AuthPages/Register/Register';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../../../testUtils/MockThemeSelector';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import React from 'react';

React.useContext = mockUseThemeSelector;

describe('Register Snapshot', () => {
  beforeEach(() => {
    renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });
  it('renders Register unchanged', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});

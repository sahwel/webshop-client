import { render, renderHook, RenderHookResult } from '@testing-library/react';
import LoginHeader from '@/components/AuthPages/Login/LoginHeader';
import AuthPagesContainer from '@/components/AuthPages/AuthPagesContainer';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../../testUtils/MockThemeSelector';
import React from 'react';
React.useContext = mockUseThemeSelector;

describe('AuhtPahtesContainer Snapshot', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders LoginHeader unchanged', () => {
    const { container } = render(<AuthPagesContainer children={'test'} />);
    expect(container).toMatchSnapshot();
  });
});

import { render, renderHook } from '@testing-library/react';
import Layout from '@/components/Layout/Layout';
import {
  mockUseThemeSelector,
  themeSelectorWrapper,
} from '../../../../testUtils/MockThemeSelector';
import React from 'react';
import { useTheme } from '@/components/common/ThemeSelector/ThemeProvider';

React.useContext = mockUseThemeSelector;

describe('Layout snapshot', () => {
  let _result;
  beforeEach(() => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });

    _result = result;
  });
  it('renders LoginFooter unchanged', () => {
    const { container } = render(<Layout children={<p>test children</p>} />);
    expect(container).toMatchSnapshot();
  });
});

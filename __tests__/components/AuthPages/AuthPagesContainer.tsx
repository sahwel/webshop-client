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
} from '../../../testUtils/MockThemeSelector';
import AuthPagesContainer from '@/components/AuthPages/AuthPagesContainer';

React.useContext = mockUseThemeSelector;

describe('AuhtPagesContainer ', () => {
  let result: RenderHookResult<any, any>;
  beforeEach(() => {
    result = renderHook(() => useTheme(), {
      wrapper: themeSelectorWrapper,
    });
  });

  it('renders the children', () => {
    render(<AuthPagesContainer children={<p>test children</p>} />);
    const children = screen.getByText('test children');
    expect(children).toBeInTheDocument();
  });
});

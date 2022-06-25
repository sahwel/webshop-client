import { Themes } from '@/components/common/ThemeSelector/definitions';
import {
  ThemeContext,
  ThemeContextModel,
} from '@/components/common/ThemeSelector/ThemeContext';
import { CompWithChild } from 'defintions/commonDefinitions';
import { FunctionComponent } from 'react';

let mockTheme: Themes = 'light';

const mockSetThemeSelector = jest.fn().mockImplementation(() => {
  mockTheme = mockTheme === 'light' ? 'dark' : 'light';
});

const mockGetTheme = jest.fn().mockImplementation((): Themes => {
  return mockTheme;
});

export const mockUseThemeSelector = jest.fn().mockImplementation(() => ({
  getTheme: mockGetTheme,
  setThemeSelector: mockSetThemeSelector,
}));

const ThemeSelectorContextProvider: FunctionComponent<CompWithChild> = ({
  children,
}) => (
  <ThemeContext.Provider value={mockUseThemeSelector()}>
    {children}
  </ThemeContext.Provider>
);

export const themeSelectorWrapper: FunctionComponent<CompWithChild> = ({
  children,
}) => <ThemeSelectorContextProvider>{children}</ThemeSelectorContextProvider>;

/* eslint-disable no-undef */
import { createContext } from 'react';
import { Themes } from './definitions';

export interface ThemeContextModel {
  setTheme(): void;
  getTheme(): Themes;
}

export const ThemeContext = createContext<ThemeContextModel>(null as any);

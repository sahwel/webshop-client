import {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeContext, ThemeContextModel } from './ThemeContext';
import { Themes } from './definitions';

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>('light');

  useLayoutEffect(() => {
    // todo: get alternative solution
    const theme = localStorage.theme ? localStorage.theme : 'light';

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setCurrentTheme(theme);

    return () => {};
  }, []);
  const contextValue: ThemeContextModel = useMemo(
    () => ({
      setTheme() {
        setCurrentTheme((oldTheme) => {
          const newTheme = oldTheme === 'light' ? 'dark' : 'light';

          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          localStorage.theme = newTheme;
          return newTheme;
        });
      },
      getTheme() {
        return currentTheme;
      },
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}

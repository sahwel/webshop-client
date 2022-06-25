import { SunIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';
import { useCallback, useLayoutEffect, useState } from 'react';
import cl from 'classnames';
import Theme from './Theme';
import styles from './ThemeSelector.module.css';
import { useTheme } from './ThemeProvider';

const ThemeSelector = () => {
  const siteTheme = useTheme();
  const handleChange = useCallback(() => {
    siteTheme.setTheme();
  }, []);

  return (
    <div className={styles.theme_sececltor} onClick={handleChange}>
      <Theme
        highlightedClass={styles.theme_sun_highlited}
        isHighlighted={siteTheme.getTheme() === 'light'}
      >
        <SunIcon className={cl('icon-6', styles.theme_sun)} />
      </Theme>

      <Theme
        highlightedClass={styles.theme_moon_highlited}
        isHighlighted={siteTheme.getTheme() === 'dark'}
      >
        <MoonIcon
          className={cl('icon-6', styles.theme_moon, {
            ['!text-white ']: siteTheme.getTheme() === 'dark',
          })}
        />
      </Theme>
    </div>
  );
};

export default ThemeSelector;

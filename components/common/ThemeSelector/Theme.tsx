import { FunctionComponent, ReactNode } from 'react';
import cl from 'classnames';
import styles from './Theme.module.css';

interface ThemeProps {
  children?: ReactNode;
  isHighlighted: boolean;
  highlightedClass: string;
}

const Theme: FunctionComponent<ThemeProps> = ({
  children,
  isHighlighted,
  highlightedClass,
}) => {
  return (
    <div className={cl({ [highlightedClass]: isHighlighted }, styles.theme)}>
      {children}
    </div>
  );
};

export default Theme;

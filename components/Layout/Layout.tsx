import { FunctionComponent, ReactNode } from 'react';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import styles from './Layout.module.css';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ThemeSelector />
      {children}
    </div>
  );
};

export default Layout;

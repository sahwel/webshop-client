import { FunctionComponent, ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;

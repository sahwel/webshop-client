import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import { useTheme } from '../ThemeSelector/ThemeProvider';
import styles from './AuthPagesContainer.module.css';

interface AuthPagesContainerProps {
  children: ReactNode;
}

const AuthPagesContainer: FunctionComponent<AuthPagesContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <div className={styles.auth_pages_container}>
      <div className={styles.blob_container}>
        <Image
          className={styles.blob}
          src={`/blobs/${theme.getTheme()}/login-register/blob.svg`}
          alt="blob"
          priority={true}
          layout="fill"
        />
      </div>
      {children}
    </div>
  );
};

export default AuthPagesContainer;

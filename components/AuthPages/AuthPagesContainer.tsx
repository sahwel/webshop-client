import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import { useTheme } from '../common/ThemeSelector/ThemeProvider';
import styles from './AuthPagesContainer.module.css';
import darkBlob from '../../public/blobs/dark/login-register/blob.svg';
import lightBlob from '../../public/blobs/light/login-register/blob.svg';
import ThemeSelector from '../common/ThemeSelector/ThemeSelector';
interface AuthPagesContainerProps {
  children: ReactNode;
}

const AuthPagesContainer: FunctionComponent<AuthPagesContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <>
      <ThemeSelector />
      <div className={styles.auth_pages_container}>
        <div className={styles.blob_container}>
          <Image
            className={styles.blob}
            src={theme.getTheme() === 'dark' ? darkBlob : lightBlob}
            alt="blob"
            priority={true}
            layout="fill"
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthPagesContainer;

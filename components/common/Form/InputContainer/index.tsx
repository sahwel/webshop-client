import { FunctionComponent, ReactNode } from 'react';
import styles from './InputContainer.module.css';

interface InputContainerProps {
  children: ReactNode;
}

const index: FunctionComponent<InputContainerProps> = ({ children }) => {
  return <div className={styles.input_container}>{children}</div>;
};

export default index;

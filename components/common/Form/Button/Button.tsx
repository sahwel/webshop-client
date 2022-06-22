import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styles from './Button.module.css';
import cl from 'classnames';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cl(className, styles.button)} {...props}>
      {children}
    </button>
  );
};

export default Button;

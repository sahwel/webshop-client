import { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';
import cl from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition as IconDefinitionSolid } from '@fortawesome/free-solid-svg-icons';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconDefinition | IconDefinitionSolid;
  iconClassName?: string;
  onIconClick?: () => void;
}

const Input: FunctionComponent<InputProps> = ({
  type,
  className,
  icon,
  iconClassName,
  onIconClick,
  ...props
}) => {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        {...props}
        className={cl(
          type === 'checkbox' ? styles.checkbox : styles.input,
          className
        )}
      />
      {icon &&
        (onIconClick !== undefined ? (
          <FontAwesomeIcon
            icon={icon}
            className={cl(styles.input_icon, iconClassName, 'icon-7')}
            onClick={onIconClick}
          />
        ) : (
          <FontAwesomeIcon
            icon={icon}
            className={cl(styles.input_icon, iconClassName, 'icon-7')}
          />
        ))}
    </div>
  );
};

export default Input;

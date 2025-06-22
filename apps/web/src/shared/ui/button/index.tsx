import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'yellow' | 'black' | 'white' | 'black-icon' | 'white-icon';
}

export const Button = ({ variant = 'green', type = 'button', className, children, ...props }: ButtonProps) => (
  <button className={clsx(className, styles.button, styles[variant])} type={type} {...props}>
    {children}
  </button>
);

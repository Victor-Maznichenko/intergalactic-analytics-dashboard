import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained-yellow' | 'contained-black' | 'text';
}

export const Button = ({
  variant = 'contained-yellow',
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button className={clsx(className, styles.button, styles[variant])} type={type} {...props}>
    {children}
  </button>
);

import clsx from 'clsx';
import { ButtonHTMLAttributes, MouseEventHandler, useMemo } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../../button';
import { Icons } from '../../../icons';
import { Status, statusMessages } from '../../lib';

export interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: Status;
  fileName?: string;
  onReset?: MouseEventHandler<HTMLButtonElement>;
}

export const UploadButton = ({
  status = Status.Default,
  onReset,
  fileName,
  children,
  className,
  type = 'button',
  ...props
}: UploadButtonProps) => {
  const showChildren = useMemo(() => [Status.Default, Status.Parsing].includes(status), [status]);
  const showReset = useMemo(() => ![Status.Default, Status.Parsing].includes(status), [status]);

  return (
    <div className={styles.uploadButton}>
      <div className={styles.uploadButton__top}>
        <button className={clsx(styles.button, styles[status], className)} type={type} {...props}>
          {showChildren ? children : (fileName ?? 'Ошибка')}
        </button>

        {showReset && onReset && (
          <Button onClick={onReset} variant="black-icon">
            <Icons.Close />
          </Button>
        )}
      </div>

      <p className={styles.description}>{statusMessages[status]}</p>
    </div>
  );
};

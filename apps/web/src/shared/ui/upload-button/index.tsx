import clsx from 'clsx';
import { ButtonHTMLAttributes, MouseEventHandler, useMemo } from 'react';
import { Icons, Button } from '@/shared/ui';
import { statusMessages } from './lib';
import { Status } from '@/shared/lib';
import styles from './styles.module.scss';

export interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: Status;
  percent?: number;
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

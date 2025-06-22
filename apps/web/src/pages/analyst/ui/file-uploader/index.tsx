/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useEffect } from 'react';
import clsx from 'clsx';
import { Button, UploadButton } from '@/shared/ui';
import { useFileUploader } from '../../lib/use-file-uploader';
import { Status } from '@/shared/lib';
import styles from './styles.module.scss';

interface FileUploaderProps {
  className?: string;
}

export const FileUploader = ({ className }: FileUploaderProps) => {
  const {
    file,
    status,
    progress,
    inputRef,
    isDragEnter,
    getAggregate,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleChange,
    handleReset,
    handleDrop,
  } = useFileUploader();
  const isButtonShow = [Status.Default, Status.Uploaded].includes(status);
  const isTransparent = [Status.Uploaded, Status.Parsing, Status.Done].includes(status);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <div className={styles.fileUploader}>
      <p className={styles.fileUploader__description}>
        Загрузите <strong>csv</strong> файл и получите <b>полную информацию</b> о нём за сверхнизкое время
      </p>
      <div
        className={clsx(
          styles.fileUploader__dropzone,
          status === Status.Fail && styles.fail,
          isTransparent && styles.transparent,
          isDragEnter && styles.enter,
          className,
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          className={styles.fileUploader__input}
          onChange={handleChange}
          accept=".csv,text/csv"
          ref={inputRef}
          type="file"
        />
        <UploadButton
          className={styles.fileUploader__button}
          onClick={() => inputRef.current?.click()}
          onReset={handleReset}
          fileName={file?.name}
          status={status}
        >
          Загрузить файл
        </UploadButton>
      </div>
      {isButtonShow && (
        <Button onClick={() => getAggregate(file, 2)} disabled={status !== Status.Uploaded}>
          Отправить
        </Button>
      )}
    </div>
  );
};

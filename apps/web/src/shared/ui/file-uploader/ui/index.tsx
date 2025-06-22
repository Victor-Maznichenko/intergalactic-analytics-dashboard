/* eslint-disable no-alert */
/* eslint-disable no-console */
import clsx from 'clsx';
import styles from './styles.module.scss';
import { UploadButton } from './upload-button';
import { Button } from '../../button';
import { useDragAndDrop } from '../lib';

interface FileUploaderProps {
  className?: string;
}

export const FileUploader = ({ className }: FileUploaderProps) => {
  const {
    status,
    inputRef,
    currentFile,
    isDragEnter,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleChange,
    handleReset,
    handleDrop,
  } = useDragAndDrop();

  return (
    <div>
      <p>
        Загрузите <strong>csv</strong> файл и получите <b>полную информацию</b> о нём за сверхнизкое время
      </p>
      <div
        className={clsx(styles.fileUploader, isDragEnter && styles.enter, className)}
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
          fileName={currentFile?.name}
          status={status}
          onClick={() => inputRef.current?.click()}
          onReset={handleReset}
        >
          Загрузить файл
        </UploadButton>
      </div>
      <Button disabled={!currentFile?.name}>Отправить</Button>
    </div>
  );
};

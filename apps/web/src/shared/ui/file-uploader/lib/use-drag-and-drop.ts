/* eslint-disable no-alert */
import { useState, useRef, useCallback, DragEvent } from 'react';
import { Status } from './constants';

export const useDragAndDrop = () => {
  const [status, setStatus] = useState(Status.Default);
  const [dragCounter, setDragCounter] = useState(0);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Включаем подсветку при ВХОДЕ
  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setDragCounter((prev) => prev + 1);
  };

  // Выключаем подсветку при ВЫХОДЕ
  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setDragCounter((prev) => Math.max(0, prev - 1));
  };

  // Обязательно для работы onDrop (Выключить открытие/скачивание файла, стандартное поведение)
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleFile = useCallback(
    (file: File) => {
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        setCurrentFile(file);
        setStatus(Status.Uploaded);
      } else {
        alert('Пожалуйста, загрузите файл в формате CSV.');
      }
    },
    [setCurrentFile],
  );

  // Когда сбросили файл(ы) над текущим блоком
  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setDragCounter(0);
    if (event.dataTransfer?.files.length) {
      handleFile(event.dataTransfer.files[0]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setStatus(Status.Default);
    setCurrentFile(null);
    setDragCounter(0);
  };

  return {
    status,
    inputRef,
    currentFile,
    isDragEnter: !!dragCounter,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleChange,
    handleReset,
    handleDrop,
  };
};

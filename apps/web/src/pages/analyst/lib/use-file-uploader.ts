/* eslint-disable no-alert */
import { useState, useRef, DragEvent } from 'react';
import { model } from '../model';

export const useFileUploader = () => {
  const file = model.useFileUploaderStore((state) => state.file);
  const status = model.useFileUploaderStore((state) => state.status);
  const setFile = model.useFileUploaderStore((state) => state.setFile);
  const getAggregate = model.useFileUploaderStore((state) => state.getAggregate);
  const progress = model.useFileUploaderStore((state) => state.progress);
  const reset = model.useFileUploaderStore((state) => state.reset);

  const [dragCounter, setDragCounter] = useState(0);
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

  // Когда сбросили файл(ы) над текущим блоком
  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setDragCounter(0);
    if (event.dataTransfer?.files.length) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = event.target.files?.[0];
    if (currentFile) {
      setFile(currentFile);
    }
  };

  const handleReset = () => {
    reset();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return {
    file,
    status,
    progress,
    inputRef,
    isDragEnter: !!dragCounter,
    getAggregate,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleChange,
    handleReset,
    handleDrop,
  };
};

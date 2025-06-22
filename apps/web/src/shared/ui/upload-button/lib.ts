import { Status } from '@/shared/lib';

export const statusMessages: Record<Status, string> = {
  [Status.Default]: 'или перетащите сюда',
  [Status.Parsing]: 'Идёт парсинг файла...',
  [Status.Uploaded]: 'Файл загружен!',
  [Status.Done]: 'Готово!',
  [Status.Fail]: 'Упс, не то...',
};

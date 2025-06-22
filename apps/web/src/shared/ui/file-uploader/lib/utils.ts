export enum Status2 {
  Default = 'default',
  Parsing = 'parsing',
  Uploaded = 'uploaded',
  Done = 'done',
  Fail = 'fail',
}

export const statusMessages2: Record<Status2, string> = {
  [Status2.Default]: 'или перетащите сюда',
  [Status2.Parsing]: 'Идёт парсинг файла...',
  [Status2.Uploaded]: 'Файл загружен!',
  [Status2.Done]: 'Готово!',
  [Status2.Fail]: 'Упс, не то...',
};

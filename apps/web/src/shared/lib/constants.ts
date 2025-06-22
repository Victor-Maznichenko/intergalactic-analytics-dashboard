export const enum ROUTES {
  NotFound = '/*',
  Analyst = '/',
  History = '/history',
  Generator = '/generator',
}

export enum Status {
  Default = 'default',
  Parsing = 'parsing',
  Uploaded = 'uploaded',
  Done = 'done',
  Fail = 'fail',
}

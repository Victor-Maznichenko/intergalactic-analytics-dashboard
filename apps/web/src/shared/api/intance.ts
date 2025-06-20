export const createRequest = <T>(mockData: T) =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(mockData), 500 + Math.random() * 1000);
  });

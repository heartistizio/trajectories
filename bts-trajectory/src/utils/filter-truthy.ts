export const filterTruthy = <T>(array: (T | void | undefined)[]): T[] =>
  array.filter(Boolean) as T[];

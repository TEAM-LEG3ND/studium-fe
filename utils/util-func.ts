export const cloneObjectForNTimes = <T>(obj: (id: number) => T, n: number) =>
  Array.from({ length: n }, (_, i) => i + 1).map(obj);

export const deepSlice = <T>(objArray: T[], begin: number, size: number) =>
  structuredClone(objArray).slice(begin, begin + size);

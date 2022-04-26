export const randomColor = (arr: string[]): string => {
  const index = Math.floor(Math.random() * arr.length) + 1;
  return arr[index];
};

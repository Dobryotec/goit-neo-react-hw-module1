export const firstLetterToUpperCase = (type: string): string => {
  const firstLetterUpperCase = type.split('')[0].toUpperCase();

  return firstLetterUpperCase + type.slice(1);
};

export const extractIdFromUrl = (url: string): number => {
  const urlWithoutLastSlash = url.substring(0, url.length - 1);

  const positionOfPreviousSlash = urlWithoutLastSlash.lastIndexOf('/');

  const id = urlWithoutLastSlash.substring(positionOfPreviousSlash + 1);

  return Number(id);
};

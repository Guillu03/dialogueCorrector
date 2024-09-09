/**
 *
 *
 * @param string
 * @returns number
 */
export const useGeneratePseudonym = (_length: number): string => {
  let result = " ";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const charactersLength = characters.length;
  for (let i = 0; i < _length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

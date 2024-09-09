/**
 * Normalize String
 *
 * @param _text
 * @returns string
 */
export const useNormalizeString = (_text: string, ) => {
  let normalizedText = _text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  normalizedText = normalizedText.replace(/['"]/g, "");

  return normalizedText;
};

import DOMPurify from "dompurify";

/**
 * Checks if a string is safe and does not contain malicious logic
 *
 * @param _data
 * @returns string
 */
export const useSanitizedData = (_data: string) => {
  const sanitizedData = DOMPurify.sanitize(_data);
  return { __html: sanitizedData };
};

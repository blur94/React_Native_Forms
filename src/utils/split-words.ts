/**
 * Splits camelCase or PascalCase words into separate words with spaces.
 * @param {string} input - The camelCase or PascalCase string.
 * @returns {string} - The string with spaces between words.
 */
export function splitCamelCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
}

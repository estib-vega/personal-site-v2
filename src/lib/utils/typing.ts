
/**
 * Checks if the given value is a string.
 *
 * @param something - The value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 */
export function isStr(something: unknown): something is string {
  return typeof something === "string";
}
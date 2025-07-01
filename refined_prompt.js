/**
 * Converts a given string to camelCase format.
 *
 * The function:
 * - Treats spaces, hyphens, and underscores as word separators.
 * - Removes all non-alphanumeric characters from each word.
 * - Preserves acronyms (words with all uppercase letters and/or numbers) in their original form except for the first word, which is lowercased.
 * - Throws an error if the input is null, undefined, not a string, empty, or contains no alphanumeric characters.
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert.
 * @throws {Error} If the input is null, undefined, not a string, empty, or contains no alphanumeric characters.
 * @returns {string} The camelCase formatted string.
 * @example
 * toCamelCase('hello_world-FOO bar'); // Returns "helloWorldFOOBar"
 */
function toCamelCase(str) {
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty.');
    }

    // Split by space, hyphen, underscore, or any non-letter/number separator
    const words = str
        .split(/[\s\-_]+/)
        .map(word => word.replace(/[^a-zA-Z0-9]/g, '')) // Remove non-alphanumeric chars
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one alphanumeric character.');
    }

    return words
        .map((word, idx) => {
            // Preserve acronyms (all uppercase, more than 1 letter)
            if (word.length > 1 && /^[A-Z0-9]+$/.test(word)) {
                return idx === 0 ? word.toLowerCase() : word;
            }
            if (idx === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}



// Example usage:
// console.log(toCamelCase('hello_world-FOO bar')); // "helloWorldFOOBar"


/**
 * Converts a given string to dot.case format.
 *
 * The function:
 * - Treats spaces, hyphens, and underscores as word separators.
 * - Removes all non-alphanumeric characters from each word.
 * - Converts all words to lowercase, including acronyms.
 * - Joins the words with dots ('.').
 * - Throws an error if the input is null, undefined, not a string, empty, or contains no alphanumeric characters.
 *
 * @function toDotCase
 * @param {string} str - The input string to convert.
 * @throws {Error} If the input is null, undefined, not a string, empty, or contains no alphanumeric characters.
 * @returns {string} The dot.case formatted string.
 * @example
 * toDotCase('hello_world-FOO bar'); // Returns "hello.world.foo.bar"
 */
function toDotCase(str) {
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty.');
    }

    const words = str
        .split(/[\s\-_]+/)
        .map(word => word.replace(/[^a-zA-Z0-9]/g, ''))
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one alphanumeric character.');
    }

    return words
        .map(word => /^[A-Z0-9]+$/.test(word) ? word.toLowerCase() : word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('hello_world-FOO bar')); // "hello.world.foo.bar"








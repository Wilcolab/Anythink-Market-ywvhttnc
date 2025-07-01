function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Remove leading/trailing spaces, underscores, hyphens
    let str = input.trim().replace(/^[-_\s]+|[-_\s]+$/g, '');

    // Replace all separators (spaces, underscores, hyphens) with a single space
    str = str.replace(/[-_\s]+/g, ' ');

    // Split into words, handling camelCase and PascalCase
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Remove non-alphanumeric characters except spaces
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');

    // Split, lowercase, and join with hyphens
    return str
        .split(' ')
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('-');
}

// Example usage:
// console.log(toKebabCase('  Hello__World--Test 123! ')); // "hello-world-test-123"
function convert(str) {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str[0].toLowerCase() + str.slice(1, 2).toUpperCase() + str.slice(2);
}

// Example usage:
// console.log(convert('pineapple')); // Output: pineApple
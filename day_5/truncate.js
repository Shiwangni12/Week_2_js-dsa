function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}


console.log(truncateString("Hello, world!", 5));
console.log(truncateString("JavaScript is fun", 10));
console.log(truncateString("Short", 10));

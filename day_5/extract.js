function extractNumbers(str) {
    let numbers = str.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
}

// Example usage:
console.log(extractNumbers("I have 2 apples and 15 bananas.")); 
console.log(extractNumbers("No numbers here!")); 
console.log(extractNumbers("The price is 199 and the discount is 20.")); 

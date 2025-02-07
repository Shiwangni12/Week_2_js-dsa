function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javaScript is fun"));

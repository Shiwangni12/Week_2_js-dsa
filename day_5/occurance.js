function countOccurrences(str, substring) {
    if (substring === "") return 0;

    let count = 0;
    let pos = str.indexOf(substring);

    while (pos !== -1) {
        count++;
        pos = str.indexOf(substring, pos + substring.length);
    }

    return count;
}


console.log(countOccurrences("hello hello world", "hello"));
console.log(countOccurrences("ababab", "ab")); 
console.log(countOccurrences("JavaScri

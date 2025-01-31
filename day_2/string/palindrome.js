function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
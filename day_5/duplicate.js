function removeDuplicates(str) {
    let uniqueChars = new Set(str); 
    return [...uniqueChars].join('');
}


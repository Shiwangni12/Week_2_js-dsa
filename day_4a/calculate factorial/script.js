
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText = "Please enter a valid non-negative number.";
    } else {
        let result = factorial(num);
        document.getElementById("result").innerText = `Factorial: ${result}`;
    }
}
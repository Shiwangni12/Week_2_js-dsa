function faultyCalculation(a, b, op) {
    let correctResult;
    switch (op) {
        case '+': correctResult = a + b; break;
        case '-': correctResult = a - b; break;
        case '*': correctResult = a * b; break;
        case '/': correctResult = a / b; break;
        default: return "Invalid Operation";
    }
    
    if (Math.random() > 0.3) {
        return correctResult + Math.floor(Math.random() * 10) - 5;
    } else {
        return correctResult;
    }
}

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    
    let result = faultyCalculation(num1, num2, operator);
    document.getElementById("result").innerText = "Result: " + result;
}

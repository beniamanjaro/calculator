function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            console.log(add(a, b));
            break;
        case '-':
            console.log(substract(a, b));
            break;
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a, b));
            break;
        default:
            console.log('idiot choose one of these operators: + - * /')
    }
}

operate('+', 5, 5)
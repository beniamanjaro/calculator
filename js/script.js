// Dsiplay element
const display =  document.querySelector('.result');
// All number buttons
const numbers = document.querySelectorAll('.number');
// Operator button + - x /
const operators = document.querySelectorAll('.operator');
// Equal element
const equal = document.getElementById('equal');
// Decimal element
const decimal = document.getElementById('dot');
// Clear element
const clear = document.getElementById('AC');
// A variable to display the value
let displayValue = '';
// First number
let firstNumber = '';




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
             add(a, b);
            break;
        case '-':
             substract(a, b);
            break;
        case '*':
             multiply(a, b);
            break;
        case '/':
             divide(a, b);
            break;
        default:
            console.log('stop being a nigger choose one of these operators: + - * /')
    }
}

function getDisplayValue() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            display.textContent += number.value;
            displayValue = display.textContent;
        })
    })
}
getDisplayValue();

function calculate() {

}
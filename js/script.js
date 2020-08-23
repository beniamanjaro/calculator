// Dsiplay first number
const display = document.querySelector('.result');
// Display operator
const displayOperator = document.querySelector('.result-line2')
    // Display second number
const displaySecondNumber = document.querySelector('.result-line3')
    // All number buttons
const numbers = document.querySelectorAll('.number');
// Operator buttons + - x /
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
// Second number
let secondNumber = '';
let basicOperator = '';
let result;

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function substract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
}
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

// Populates the display
function getDisplayValue() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            // If an operator was selected the numbers are stored in the secondNumber variable
            if (basicOperator.length == 1) {
                secondNumber += number.value;
                displaySecondNumber.textContent = secondNumber;
                // If there's no operator selected yet, the numbers are stored in the firstNumber variable
            } else {
                if (firstNumber.charAt(0) == 0) {
                    firstNumber.slice(0, 1);
                    firstNumber += number.value;
                    display.textContent = firstNumber;
                } else {
                    firstNumber += number.value;
                    display.textContent = firstNumber;
                }
            }
        })
    })
}

decimal.addEventListener('click', () => {
    if (basicOperator.length == 1) {
        if(!secondNumber.includes('.'))
            secondNumber += '.';
            displaySecondNumber.textContent = secondNumber;
    } else {
            if(!firstNumber.includes('.'))
                firstNumber += '.';
                display.textContent = firstNumber;
        }
})

// When an operator button is clicked the value is stored in basicOperator
function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            basicOperator = operator.value
            displayOperator.textContent = basicOperator;
        })
    })
}

// Resets the variables and the content
function allClear() {
    clear.addEventListener('click', () => {
        display.textContent = 0;
        displaySecondNumber.textContent = '';
        displayOperator.textContent = '';
        displayValue = '';
        basicOperator = '';
        secondNumber = '';
        firstNumber = '';
    })
}

function allClearEqual() {
    displaySecondNumber.textContent = '';
    displayOperator.textContent = '';
    displayValue = '';
    basicOperator = '';
    secondNumber = '';
}

//When equal is pressed the result appears on the first line
equal.addEventListener('click', () => {
    if (secondNumber.length == 0) {
        display.textContent = firstNumber;
    } else {
        result = operate(basicOperator, firstNumber, secondNumber);
        allClearEqual();
        firstNumber = result;
        display.textContent = result;
    }
})


getDisplayValue();
getOperator();
allClear();

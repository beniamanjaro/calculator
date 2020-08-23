"use strict";

// Dsiplay first number
var display = document.querySelector('.result'); // Display operator

var displayOperator = document.querySelector('.result-line2'); // Display second number

var displaySecondNumber = document.querySelector('.result-line3'); // All number buttons

var numbers = document.querySelectorAll('.number'); // Operator buttons + - x /

var operators = document.querySelectorAll('.operator'); // Equal element

var equal = document.getElementById('equal'); // Decimal element

var decimal = document.getElementById('dot'); // Clear element

var clear = document.getElementById('AC'); // A variable to display the value

var displayValue = ''; // First number

var firstNumber = ''; // Second number

var secondNumber = '';
var basicOperator = '';
var result;

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
  return Math.round(a / b * 1000) / 1000;
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
} // Populates the display


function getDisplayValue() {
  numbers.forEach(function (number) {
    number.addEventListener('click', function () {
      // If an operator was selected the numbers are stored in the secondNumber variable
      if (basicOperator.length == 1) {
        secondNumber += number.value;
        displaySecondNumber.textContent = secondNumber; // If there's no operator selected yet, the numbers are stored in the firstNumber variable
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
    });
  });
} // When an operator button is clicked the value is stored in basicOperator


function getOperator() {
  operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
      basicOperator = operator.value;
      displayOperator.textContent = basicOperator;
    });
  });
}

decimal.addEventListener('click', function () {
  if (basicOperator.length == 1) {
    if (!secondNumber.includes('.')) secondNumber += '.';
    displaySecondNumber.textContent = secondNumber;
  } else {
    if (!firstNumber.includes('.')) firstNumber += '.';
    display.textContent = firstNumber;
  }
}); // Resets the variables and the content

function allClear() {
  clear.addEventListener('click', function () {
    display.textContent = 0;
    displaySecondNumber.textContent = '';
    displayOperator.textContent = '';
    displayValue = '';
    basicOperator = '';
    secondNumber = '';
    firstNumber = '';
  });
}

function allClearEqual() {
  displaySecondNumber.textContent = '';
  displayOperator.textContent = '';
  displayValue = '';
  basicOperator = '';
  secondNumber = '';
} //When equal is pressed the result appears on the first line


equal.addEventListener('click', function () {
  if (secondNumber.length == 0) {
    display.textContent = firstNumber;
  } else {
    result = operate(basicOperator, firstNumber, secondNumber);
    allClearEqual();
    firstNumber = result;
    display.textContent = result;
  }
});
getDisplayValue();
getOperator();
allClear();
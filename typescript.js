"use strict";
const display = document.getElementById('display');
// Get all the button elements
const buttons = document.querySelectorAll('button');
// Initialize the current number and operator
let currentNumber = '';
let operator = '';
let previousNumber = '';
// Add event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        // Handle number buttons
        if (!isNaN(parseInt(value))) {
            currentNumber += value;
            display.value = currentNumber;
        }
        // Handle operator buttons
        else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousNumber = currentNumber;
            currentNumber = '';
        }
        // Handle equals button
        else if (value === '=') {
            const result = calculateResult(previousNumber, operator, currentNumber);
            display.value = result.toString();
            currentNumber = result.toString();
            operator = '';
            previousNumber = '';
        }
        // Handle clear button
        else if (value === 'C') {
            display.value = '';
            currentNumber = '';
            operator = '';
            previousNumber = '';
        }
        // Handle backspace button
        else if (value === '<') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        }
    });
});
// Function to calculate the result
function calculateResult(num1, operator, num2) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            throw new Error('Invalid operator');
    }
}

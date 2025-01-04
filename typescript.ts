
const display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;

// Get all the button elements
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

// Initialize the current number and operator
let currentNumber: string = '';
let operator: string = '';
let previousNumber: string = '';

// Add event listeners to the buttons
buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
        const value: string = button.textContent as string;

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
            const result: number = calculateResult(previousNumber, operator, currentNumber);
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
function calculateResult(num1: string, operator: string, num2: string): number {
    const number1: number = parseFloat(num1);
    const number2: number = parseFloat(num2);

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


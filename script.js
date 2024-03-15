function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(a, b, operator) {
    switch (operator) {
        case '+':
            result = add(a, b);
            console.log("This is the result: " + result);
            console.log("num1 is : " + num1);
            console.log("num2 is : " + num2);
            display.textContent = result;
            return result;
        case '-':
            result = subtract(a, b);
            display.textContent = result;
            return result;
        case '*':
            result = multiply(a, b);
            display.textContent = result;
            return result;
        case '/':
            result = divide(a, b);
            display.textContent = result;
            return result;
        default:
            return ('Invalid operator');
    }
}

const buttons = document.querySelectorAll('.btn-num');
const operatorBtn = document.querySelectorAll('.btn-operator');
const clearBtn = document.querySelector('.btn-clear');
const display = document.querySelector('.display');
const btnEqual = document.querySelector('.btn-equal');

// stores the numbers
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';

// clears the calculator
clearBtn.addEventListener("click", () => {
    display.textContent = 0;
    num1, num2 = 0;
    operator = '';
})





// adds number to the display
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.textContent == 0) {
            display.textContent = '';
        } else if(operator) {
            display.textContent = '';
        }

        display.textContent += button.textContent;
        const number1 = display.textContent;
        console.log(number1);
    })
})


operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        let operation = button.textContent;
        console.log(num1 + 's');
        switch (operation) {
            case '+':
                num1 = +display.textContent;
                if (num1 > 0) {
                    num2 = display.textContent;
                }
                operator = '+';
                break;
            case '=':
                
        }
    })
})


btnEqual.addEventListener("click", () => {
    console.log("Pressed Equal");
    operate(num1, num2, operator);
})
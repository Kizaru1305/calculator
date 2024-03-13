function add(a, b) {
    return a + b;
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
            add(a, b);
        case '-':
            subtract(a, b);
        case '*':
            multiply(a, b);
        case '/':
            divide(a, b);
        default:
            throw new Error('Invalid operator');
    }
}

const buttons = document.querySelectorAll('.btn-num');
const display = document.querySelector('.display');



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.textContent == 0) {
            display.textContent = '';
        }
        display.textContent += button.textContent;
    })
})


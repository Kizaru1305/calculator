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
    case "+":
      result = add(a, b);
      display.textContent = result;
      return result;
    case "-":
      result = subtract(a, b);
      display.textContent = result;
      return result;
    case "*":
      result = multiply(a, b);
      display.textContent = result;
      return result;
    case "/":
      parseFloat(a);
      parseFloat(b);
      result = divide(a, b);
      if (result == Infinity) {
        alert("Error");
        num1 = 0;
        num2 = 0;
      } else {
        display.textContent = result;
        return result;
      }

    default:
      return "Invalid operator";
  }
}

const buttons = document.querySelectorAll(".btn-num");
const operatorBtn = document.querySelectorAll(".btn-operator");
const clearBtn = document.querySelector(".btn-clear");
const display = document.querySelector(".display");
const btnEqual = document.querySelector(".btn-equal");

// stores the numbers
let num1 = 0;
let num2 = 0;
let result = 0;

// operator +, *, -, /
let operator = false;

// resets display of 1st number after clicking operator
let reset = false;

// clears the calculator
clearBtn.addEventListener("click", () => {
  display.textContent = 0;
  num1, (num2 = 0);
  operator = "";
});

// adds number to the display
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent == 0) {
      display.textContent = "";
    } else if (num1 && reset) {
      display.textContent = "";
      reset = false;
    }
    if (display.textContent.length < 9) {
      display.textContent += button.textContent;
    }
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator && num1) {
      num2 = display.textContent;
      operate(num1, num2, operator);
    }
    operator = button.textContent;
    console.log(operator);
    if (operator === "X") {
      operator = "*";
    }
    num1 = display.textContent;
    reset = true;
  });
});

btnEqual.addEventListener("click", () => {
  if (!num2 || (num2 && operator)) {
    num2 = +display.textContent;
  }

  console.log(num1, num2);
  result = operate(num1, num2, operator);
});

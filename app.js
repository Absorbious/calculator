let display = document.querySelector("span");
let btn = document.querySelectorAll("button");
let button;
let num1 = 0;
let num2 = 0;
let userOperator;

// Need to use ForEach loop on the btn because querySelectorAll returns a nodeList
btn.forEach((but) =>
  but.addEventListener("click", function (e) {
    updateDisplay(e);
  })
);

function clear() {
  display.innerText = "";
  num1 = 0;
  num2 = 0;
  userOperator = "";
}

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
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return b === 0 ? null : divide(a, b);

    default:
      return;
  }
}

// Function for displaying numbers and assigning them to a value
function updateDisplay(e) {
  if (e.target.parentElement.className === "numbers") {
    // Displays number that's been clicked, if clicked after an operator, it is displayed instead of the first value
    if (display.innerText == num1) {
      display.innerText = "";
    }
    display.innerText += e.target.innerText;
  } else if (e.target.innerText === "C") {
    // Resets the calculator
    clear();
  } else if (
    e.target.parentElement.className === "operators" &&
    e.target.className !== "equals"
  ) {
    // When an operator is clicked, this assigns value of the display to the first variable
    userOperator = e.target.innerText;
    num1 = parseInt(display.innerText);
    userOperator = e.target.innerText;
    console.log(userOperator);
  } else if (e.target.className === "equals") {
    // When equal is clicked, it assigns the display value to the second variable, erases the display and calls the operation function which displays the result
    // If tried to divide by 0, display returns an error
    num2 = parseInt(display.innerText);
    display.innerText = "";
    if (userOperator === "/" && (num1 === 0 || num2 === 0)) {
      display.innerText = "Can't divide by 0!";
    } else {
      display.innerText = operate(userOperator, num1, num2);
    }
  }
}


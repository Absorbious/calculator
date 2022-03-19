let display = document.querySelector("span");
let btn = document.querySelectorAll("button");
let button;
let num1 = 0;
let num2 = 0;
let userOperator;
let keyNum;


document.addEventListener("keydown", function (e) {
  updateDisplay(e);
});

// Need to use ForEach loop on the btn because querySelectorAll returns a nodeList
btn.forEach((but) =>
  but.addEventListener("click", function (e) {
    if(display.innerText === "Please choose an operation"){
      display.innerText = "";
    }
    updateDisplay(e);
  })
);

function clear() {
  
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
  clickNumber(e);
  clear(e);
  clickOperator(e);
  clickEqual(e);
}

// ---NUMBER CLICKED---
// Displays number that's been clicked, if clicked after an operator, it is displayed instead of the first value
 function clickNumber(e){
   let x = e.key;
  if (e.target.parentElement.className === "numbers") {
    if (display.innerText == num1) {
      display.innerText = "";
    }
    display.innerText += e.target.innerText;
  } else if(x >= 0 && x <= 9){
    if (display.innerText == num1) {
      display.innerText = "";
    }
    display.innerText += x;
  }
 }

// --- RESET CALCULATOR ---
 function clear(e){
  if (e.target.innerText === "C") {
    display.innerText = "";
    num1 = 0;
    num2 = 0;
    userOperator = "";
  }
 }

// --- OPERATOR CLICKED ---
// When an operator is clicked, this assigns value of the display to the first variable
 function clickOperator(e){
  if (
    e.target.parentElement.className === "operators" &&
    e.target.className !== "equals"
  ) {
    userOperator = e.target.innerText;
    num1 = parseInt(display.innerText);
    userOperator = e.target.innerText;
    console.log(userOperator);
  }
 } 

// --- EQUAL CLICKED ---
// When equal is clicked, it assigns the display value to the second variable, erases the display and calls the operation function which displays the result
// If tried to divide by 0, display returns an error
  function clickEqual(e){
    if (e.target.className === "equals") {
      num2 = parseInt(display.innerText);
      display.innerText = "";
      if (userOperator === "/" && (num1 === 0 || num2 === 0)) {
        display.innerText = "Can't divide by 0!";
      } else if(!userOperator){
        display.innerText = "Please choose an operation"
      } else {
        display.innerText = operate(userOperator, num1, num2);
      }
    }
  }


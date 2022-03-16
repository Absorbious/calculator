let displaySpan = document.querySelector("span");
let btn = document.querySelectorAll("button");
let display = 0;
let button;
let num1 = 0;
let num2 = 0;
let userOperator;

// Need to use ForEach loop on the btn because querySelectorAll returns a nodeList
btn.forEach((but) =>
  but.addEventListener("click", function (e) {
    // Adding numbers to display and assigning it to a value
    if (e.target.parentElement.className === "numbers") {
      displaySpan.innerText += e.target.innerText;
      display = parseInt(displaySpan.innerText);
    } else if (e.target.innerText === "Clear") {
      clear();
      console.log("cleared");
    } else if (e.target.parentElement.className === "operators" && e.target.className !== "equals") {
      if (display === 0 && userOperator === "/") {
        alert("Can't operate with 0");
      } else if(num1 != 0){

      } else {
        num1 = display;
        userOperator = e.target.innerText;
        console.log(userOperator);
      }
    } else if(e.target.className === "equals"){

    }
  })
);

function clear() {
  display = 0;
  displaySpan.innerText = "";
  num1 = 0;
  num2 = 0;
  userOperator = '';
}

// Kad se pritisne neki operator, prvi broj se uzme u funkciju i kada se pritisne tipka 'jednako', u funkciju operate se uzmu oba broja i operator i izvrsi se matematicka jednadzba ciji se rezultat prikaze nakon toga na displayu

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

let displaySpan = document.querySelector("span");
let btn = document.querySelectorAll("button");
let display = 0;
let button;

// Need to use ForEach loop on the btn because querySelectorAll returns a nodeList
btn.forEach((but) =>
  but.addEventListener("click", function (e) {
    if (e.target.parentElement.className === "numbers") {
      displaySpan.innerText += e.target.innerText;
      display = parseInt(displaySpan.innerText);
    } else if(e.target.innerText === 'Clear'){
      clearDisplay();
    }
  })
);

function clearDisplay() {
  display = 0;
  displaySpan.innerText = "";
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

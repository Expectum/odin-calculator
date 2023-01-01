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
function operate(a, operator, b) {
switch(operator) {
    case '+': 
              add(a, b);  
              break;
    case '-': 
              subtract(a, b);  
              break;
    case '*': 
              multiply(a, b);  
              break;
    case '/': 
              divide(a, b);  
              break;
    default:
              console.log("Something went horribly wrong..."); 
}
}
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const equals = document.querySelector('.equals');
const multiply = document.querySelector('.multiply');
const obelus = document.querySelector('.obelus');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let displayValue = 0;

one.addEventListener('click', () => {
displayValue *= 10;
displayValue += 1;
})
two.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 2;
})
three.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 3;
})
four.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 4;
})
five.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 5;
})
six.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 6;
})
seven.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 7;
})
eight.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 8;
})
nine.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 9;
})
zero.addEventListener('click', () => {
    displayValue *= 10;
})
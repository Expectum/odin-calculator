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

let decimal = 1;
let displayValue = 0;

one.addEventListener('click', () => {
displayValue += decimal * 1;
decimal *= 10;
})
two.addEventListener('click', () => {
    displayValue += decimal * 2;
    decimal *= 10;
})
three.addEventListener('click', () => {
    displayValue += decimal * 3;
    decimal *= 10;
})
four.addEventListener('click', () => {
    displayValue += decimal * 4;
    decimal *= 10;
})
five.addEventListener('click', () => {
    displayValue += decimal * 5;
    decimal *= 10;
})
six.addEventListener('click', () => {
    displayValue += decimal * 6;
    decimal *= 10;
})
seven.addEventListener('click', () => {
    displayValue += decimal * 7;
    decimal *= 10;
})
eight.addEventListener('click', () => {
    displayValue += decimal * 8;
    decimal *= 10;
})
nine.addEventListener('click', () => {
    displayValue += decimal * 9;
    decimal *= 10;
})
zero.addEventListener('click', () => {
    decimal *= 10;
})
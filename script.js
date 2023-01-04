function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiplicate(a, b) {
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
    case 'x': 
              multiply(a, b);  
              break;
    case '÷': 
              divide(a, b);  
              break;
    default:
              console.log("Something went horribly wrong..."); 
}
}

let stringCalculation = "";
let display = "";

function displayCalculationFromNumber(lastDisplayValue) {
display = display.slice(-1,display.lastIndexOf('+'&'-'&'x'&'÷'));
display += lastDisplayValue[lastDisplayValue.length-1];
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
const obelus = document.querySelector('.obelus');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');

let operators = [];
let numbers = [];
let displayValue = 0;
let lastDisplayValue = [];

one.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 1;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
two.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 2;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
three.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 3;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
four.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 4;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
five.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 5;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
six.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 6;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
seven.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 7;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
eight.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 8;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
nine.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 9;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
zero.addEventListener('click', () => {
    displayValue *= 10;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue);
})
obelus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('÷');
    displayValue = 0;
})
plus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('+');
    displayValue = 0;
})
minus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('-');
    displayValue = 0;
})
multiply.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('x');
    displayValue = 0;
})
equals.addEventListener('click', () => {
    numbers.push(displayValue);
    console.log(operators);
    console.log(numbers);
})
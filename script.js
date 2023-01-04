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
let lastDisplayValueString = "";
let opNum = 0;

function displayCalculationFromNumber(lastDisplayValue, opNum) {

lastDisplayValueString = lastDisplayValue[lastDisplayValue.length-2];
lastDisplayValueString = lastDisplayValueString.toString();

display = display.slice(0,display.length+opNum-lastDisplayValueString.length);

display += lastDisplayValue[lastDisplayValue.length-1];
}

function displayCalculationFromOperator(operators) {
display += operators[operators.length-1];
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
let lastDisplayValue = [0];

one.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 1;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
two.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 2;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
three.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 3;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
four.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 4;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
five.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 5;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
six.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 6;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
seven.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 7;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
eight.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 8;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
nine.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 9;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
zero.addEventListener('click', () => {
    displayValue *= 10;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})
obelus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('÷');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum += 1;
    displayCalculationFromOperator(operators);
})
plus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('+');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum += 1;
    displayCalculationFromOperator(operators);
})
minus.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('-');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum += 1;
    displayCalculationFromOperator(operators);
})
multiply.addEventListener('click', () => {
    numbers.push(displayValue);
    operators.push('x');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum += 1;
    displayCalculationFromOperator(operators);
})
equals.addEventListener('click', () => {
    numbers.push(displayValue);
    console.log(operators);
    console.log(numbers);
})
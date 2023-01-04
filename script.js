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
              return add(a, b);  
              break;
    case '-': 
              return subtract(a, b);  
              break;
    case 'x': 
              return multiplicate(a, b);  
              break;
    case '÷': 
              return divide(a, b);  
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

let operator = "";
let operators = [];
let numbers = [];
let displayValue = 0;
let lastDisplayValue = [0];
let result = 0;
let fromEquals = false;

one.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 1;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
two.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 2;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
three.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 3;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
four.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 4;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
five.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 5;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
six.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 6;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
seven.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 7;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
eight.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 8;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
nine.addEventListener('click', () => {
    displayValue *= 10;
    displayValue += 9;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
zero.addEventListener('click', () => {
    displayValue *= 10;
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
obelus.addEventListener('click', () => {
    if (fromEquals != true) {
        numbers.push(displayValue);
        }
    operators.push('÷');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum = 1;
    displayCalculationFromOperator(operators);
})
plus.addEventListener('click', () => {
    if (fromEquals != true) {
    numbers.push(displayValue);
    }
    operators.push('+');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum = 1;
    displayCalculationFromOperator(operators);
})
minus.addEventListener('click', () => {
    if (fromEquals != true) {
        numbers.push(displayValue);
        }
    operators.push('-');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum = 1;
    displayCalculationFromOperator(operators);
})
multiply.addEventListener('click', () => {
    if (fromEquals != true) {
        numbers.push(displayValue);
        }
    operators.push('x');
    lastDisplayValue = [0];
    displayValue = 0;
    opNum = 1;
    displayCalculationFromOperator(operators);
})

equals.addEventListener('click', () => {
    numbers.push(displayValue);
    for (i=0;i<operators.length;) {
        if (operators[i] == 'x') {
        operator = 'x';
        result = operate(numbers[i],operator,numbers[i+1]);
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        } else if (operators[i] == '÷') {
        operator = '÷';
        result = operate(numbers[i],operator,numbers[i+1]);
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        } else if (operators[i] == '-') {
        i += 1;
        } else if (operators[i] == '+') {
        i += 1;
        }
    } 
    for (i = 0;i<operators.length;) {
        if (operators[i] == '-') {
            operator = '-';
            result = operate(numbers[i],operator,numbers[i+1]);
            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            } else if (operators[i] == '+') {
            operator = '+';
            result = operate(numbers[i],operator,numbers[i+1]);
            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            } 
    } 
    lastDisplayValue = [0];
    lastDisplayValue.push(numbers[0]);
    displayValue = 0;
    fromEquals = true;
    opNum -= numbers[0].length+1;
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
})

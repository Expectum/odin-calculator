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
let displayResult = document.querySelector('.result');
displayResult.innerText = '';

function displayCalculationFromNumber(lastDisplayValue, opNum) {

lastDisplayValueString = lastDisplayValue[lastDisplayValue.length-2];
lastDisplayValueString = lastDisplayValueString.toString();

display = display.slice(0,display.length+opNum-lastDisplayValueString.length);

display += lastDisplayValue[lastDisplayValue.length-1];
displayResult.innerText = display;
}

function displayCalculationFromOperator(operators) {
display += operators[operators.length-1];
displayResult.innerText = display;
if (negativeNumber == true) {
    operators.pop();
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
const obelus = document.querySelector('.obelus');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const clear = document.querySelector('.clear');

let operator = "";
let operators = [];
let numbers = [];
let displayValue = 0;
let lastDisplayValue = [0];
let result = 0;
let fromEquals = false;
let negativeNumber = false;
let negativeEquals = false;
let negativeNotEquals = false;
let equalsMoreThanOnce = false;

function allSmiles() {
    lastDisplayValue = [0];
    displayValue = 0;
    numbers = [];
    operators = [];
    result = 0;
    operator = '';
    fromEquals = false;
    negativeNumber = false;
    negativeEquals = false;
    negativeNotEquals = false;
    equalsMoreThanOnce = false;
    stringCalculation = "";
    display = "";
    lastDisplayValueString = "";
    opNum = 0;
    display = "All Smiles";
    displayResult.innerText = display;
}

clear.addEventListener('click', () => {
    lastDisplayValue = [0];
    displayValue = 0;
    numbers = [];
    operators = [];
    result = 0;
    operator = '';
    fromEquals = false;
    negativeNumber = false;
    negativeEquals = false;
    negativeNotEquals = false;
    equalsMoreThanOnce = false;
    stringCalculation = "";
    display = "";
    lastDisplayValueString = "";
    opNum = 0;
    displayResult.innerText = "";
})

one.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 1;
    } else {
        displayValue += 1;
    }
    if (negativeNumber == true) {
    displayValue *= -1;
    opNum = 0;
    negativeEquals = true;
    if (fromEquals == true) {
    negativeNotEquals = true;
    }
    negativeNumber = false;
    }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
two.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 2;
    } else {
        displayValue += 2;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        if (fromEquals == true) {
            negativeNotEquals = true;
            }
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
three.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 3;
    } else {
        displayValue += 3;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
four.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 4;
    } else {
        displayValue += 4;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
five.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 5;
    } else {
        displayValue += 5;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
six.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 6;
    } else {
        displayValue += 6;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
seven.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 7;
    } else {
        displayValue += 7;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
eight.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 8;
    } else {
        displayValue += 8;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
nine.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeEquals == true) {
        displayValue -= 9;
    } else {
        displayValue += 9;
    }
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
    lastDisplayValue.push(displayValue);
    displayCalculationFromNumber(lastDisplayValue, opNum);
    opNum = 0;
    fromEquals = false;
})
zero.addEventListener('click', () => {
    displayValue *= 10;
    if (negativeNumber == true) {
        displayValue *= -1;
        opNum = 0;
        negativeEquals = true;
        negativeNumber = false;
        }
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
    if (opNum == 1) {
    negativeNumber = true;
    } else {
    negativeNumber = false;
    }
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
    if (!(numbers.length > 0) || !(operators.length > 0)) {
        return;
    }
    if ((negativeEquals == true) && (negativeNotEquals == false)) {
    numbers.pop();
    }
    negativeEquals = false;
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
        if ((result == Infinity) || (isNaN(result))) {
        allSmiles();
        return;
        }
        result = Math.round((result + Number.EPSILON) * 100) / 100
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

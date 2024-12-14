

// addition:
const addition = (firstNr, secondNr) => {
    return firstNr + secondNr;
}

// subtraction:
const subtraction = (firstNr, secondNr) => {
    return firstNr - secondNr;
}

// multiplication:
const multiplication = (firstNr, secondNr) => {
    return firstNr * secondNr;
}

// division:
const division = (firstNr, secondNr) => {
    return firstNr / secondNr;
}

// testing the functions
/*
console.log(addition(10,37));
console.log(subtraction(10,37));
console.log(multiplication(10,37));
console.log(division(10,37));
*/


const operate = (numberOne, operator, numberTwo) => {
    switch (operator) {
        case '+':
            return addition(numberOne, numberTwo);
            break;
        case '-':
            return subtraction(numberOne, numberTwo);
            break;
        case 'x':
            return multiplication(numberOne, numberTwo);
            break;
        case '/':
            return division(numberOne, numberTwo);
            break;
    }
}

/*
console.log(operate(20, '+', 30));
*/

let firstNo = 0;
let operator = "";
let secondNo = 0;

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");




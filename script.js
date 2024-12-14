

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

let numberOne = 20;
let operator = 'plus';
let numberTwo = 30;

const operate = (numberOne, operator, numberTwo) => {
    switch (operator) {
        case 'plus':
            return addition(numberOne, numberTwo);
            break;
        case 'minus':
            return subtraction(numberOne, numberTwo);
            break;
        case 'multiply':
            return multiplication(numberOne, numberTwo);
            break;
        case 'divide':
            return division(numberOne, numberTwo);
            break;
    }
}

console.log(operate(20, 'plus', 30));
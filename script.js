

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
let secondNo = 0
let operationResult = "";

// number listeners 
const displayFirst = document.querySelector("#display-first");
const displaySecond = document.querySelector("#display-second");

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNo === 0) {
            firstNo = button.id;
            displayFirst.textContent = firstNo;
        } else if (operator === "" && firstNo !== 0) {
            firstNo += button.id;
            displayFirst.textContent = firstNo;
        } else if (operator !== "" && secondNo === 0) {
            secondNo = button.id;
            displaySecond.textContent = secondNo;
        } else if (secondNo !== 0) {
            secondNo += button.id;
            displaySecond.textContent = secondNo;
        }
    })
})

// operator listener
const displayOperator = document.querySelector("#display-operator");

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = button.id;
            displayOperator.textContent = operator;
        }
    })
})

// clear button:

const clearButton = document.querySelector("#ac-button");

clearButton.addEventListener("click", () => {
    displayFirst.textContent = "0";
    displayOperator.textContent = "";
    displaySecond.textContent = "";
    displayResult.textContent = "";
    firstNo = 0;
    operator = "";
    secondNo = 0;
})

// results button =

const resultsButton = document.querySelector("#results-button");
const displayResult = document.querySelector("#display-result");

resultsButton.addEventListener("click", () => {
    if (operator !== "") {
        firstNo = parseInt(firstNo);
        secondNo = parseInt(secondNo);
        operationResult = operate(firstNo, operator, secondNo);
        displayResult.textContent = ` = ${operationResult}`;
        displayResult.style.color = "gray";
    }
})
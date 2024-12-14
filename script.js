

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
    if (secondNr === 0) {
        return 'Error this, error that';
    } else {
    return firstNr / secondNr;
    }
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

let firstNo = 0;
let operator = "";
let secondNo = "";
let operationResult = "";

// div to hold all firstNo, operator, secondNo
const displayNumbers = document.querySelector("#display-numbers");

const displayFirst = document.querySelector("#display-first");
const displaySecond = document.querySelector("#display-second");
const displayOperator = document.querySelector("#display-operator");

// div to hold result:
const displayResult = document.querySelector("#display-result");

// number listener

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNo === 0) {
            firstNo = button.id;
            displayFirst.textContent = firstNo;
        } else if (operator === "" && firstNo !== 0) {
            firstNo += button.id;
            displayFirst.textContent = firstNo;
        } else if (operator !== "" && secondNo === "") {
            secondNo = button.id;
            displaySecond.textContent = secondNo;
        } else if (secondNo !== "") {
            secondNo += button.id;
            displaySecond.textContent = secondNo;
        }
    })
})

// operator listener

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = button.id;
            displayOperator.textContent = operator;
        } else if (operator !== "" && operationResult !== "") {
            firstNo = operationResult;
            displayFirst.textContent = firstNo;
            displayNumbers.style.color = "white";
            displayNumbers.style.fontSize = "4rem";
            operationResult = "";
            displayResult.textContent = "";
            operator = button.id;
            displayOperator.textContent = operator;
            secondNo = "";
            displaySecond.textContent = "";
        } 
    })
})

// clear listener:

const clearButton = document.querySelector("#ac-button");

clearButton.addEventListener("click", () => {
    displayFirst.textContent = "0";
    displayOperator.textContent = "";
    displaySecond.textContent = "";
    displayResult.textContent = "";
    displayNumbers.style.color = "white";
    displayNumbers.style.fontSize = "4rem";
    firstNo = 0;
    operator = "";
    secondNo = "";
})

// results button =

const resultsButton = document.querySelector("#results-button");

resultsButton.addEventListener("click", () => {
    if (operator !== "") {
        firstNo = parseInt(firstNo);
        secondNo = parseInt(secondNo);
        operationResult = parseFloat(operate(firstNo, operator, secondNo).toFixed(2));
        /*operationResult = operationResult.toFixed(2);
        operationResult = parseFloat(operationResult);*/
        displayResult.textContent = operationResult;
        displayNumbers.style.color = "gray";
        displayNumbers.style.fontSize = "2rem";
    }
})

/* problems: 

- rounding issues. First it rounds, but if you do 
another operation with a decimal place then it doesn't round

- using operators multiple times without = button

- too verbose (add some functions to make it simpler?)
*/
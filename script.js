

// operations:
const addition = (firstNr, secondNr) => {
    return firstNr + secondNr;
}

const subtraction = (firstNr, secondNr) => {
    return firstNr - secondNr;
}

const multiplication = (firstNr, secondNr) => {
    return firstNr * secondNr;
}

const division = (firstNr, secondNr) => {
    if (secondNr === 0) {
        return 'Error this, error that';
    } else {
    return firstNr / secondNr;
    }
}

// main function:
const operate = (numberOne, operator, numberTwo) => {
    switch (operator) {
        case '+':
            return parseFloat(addition(numberOne, numberTwo).toFixed(2));
            break;
        case '-':
            return parseFloat(subtraction(numberOne, numberTwo).toFixed(2));
            break;
        case 'x':
            return parseFloat(multiplication(numberOne, numberTwo).toFixed(2));
            break;
        case '/':
            return parseFloat(division(numberOne, numberTwo).toFixed(2));
            break;
    }
}

let firstNo = 0;
let operator = "";
let secondNo = "";
let operationResult = "";

// div to hold all firstNo, operator, secondNo:
const displayNumbers = document.querySelector("#display-numbers");

const displayFirst = document.querySelector("#display-first");
const displaySecond = document.querySelector("#display-second");
const displayOperator = document.querySelector("#display-operator");

// div to hold result:
const displayResult = document.querySelector("#display-result");

// number buttons' listener:
const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNo === 0) {
            firstNo = button.id; // first digit of first number
        } else if (operator === "" && firstNo !== 0) {
            firstNo += button.id; // other digits of first number
        } else if (operator !== "" && secondNo === "") {
            secondNo = button.id; // first digit of second number
        } else if (secondNo !== "" && operationResult === "") {
            secondNo += button.id; // other digits of second number
        }
        displayFirst.textContent = firstNo;
        displaySecond.textContent = secondNo;
    })
})

// operator buttons and listener:
const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = button.id;
            displayOperator.textContent = operator;
        } else if (operator !== "" && operationResult !== "") {
            operateAfterResult();
            operator = button.id;
            displayOperator.textContent = operator;
        } else if (operator !== "" && secondNo !== "" && operationResult === "") {
            operateAgainBeforeResult();
            operator = button.id;
            displayOperator.textContent = operator;
        } else if (secondNo === "") {
            operator = button.id;
            displayOperator.textContent = operator;
        }
    })
})

// continue operating before the result: 

const operateAgainBeforeResult = () => {
    getResult();
    firstNo = operationResult;
    operationResult = "";
    displayFirst.textContent = firstNo;

    secondNo = "";
    displaySecond.textContent = "";
}

// continue operating after the result:
const operateAfterResult = () => {
    firstNo = operationResult;
    displayFirst.textContent = firstNo;

    secondNo = "";
    displaySecond.textContent = "";

    displayReset(); 
}

// reset display style: 

const displayReset = () => {
    displayNumbers.style.color = "white";
    displayNumbers.style.fontSize = "4rem";
    operationResult = "";
    displayResult.textContent = "";
}

// clear button and listener:
const clearButton = document.querySelector("#ac-button");

clearButton.addEventListener("click", () => {
    displayFirst.textContent = "0";
    displayOperator.textContent = "";
    displaySecond.textContent = "";
    displayReset();

    firstNo = 0;
    operator = "";
    secondNo = "";


})

// results button =

const resultsButton = document.querySelector("#results-button");

resultsButton.addEventListener("click", () => {
    if (operator !== "" && secondNo !== "") {
        getResult();
        displayResult.textContent = operationResult;
        displayNumbers.style.color = "gray";
        displayNumbers.style.fontSize = "2rem";
    }
})

/*const getResult = () => {
    firstNo = Number(parseFloat(firstNo).toFixed(2));
    secondNo = Number(parseFloat(secondNo).toFixed(2));
    operationResult = operate(firstNo, operator, secondNo);
}*/

const getResult = () => {
    firstNo = Number(firstNo);
    secondNo = Number(secondNo);
    operationResult = operate(firstNo, operator, secondNo);
}

/* 

to add:

- ability to add comma (but only 1 per number)

- ability to delete digits

*/
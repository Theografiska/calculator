

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
    return firstNr / secondNr;
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
        const setOperator = () => {
            operator = button.id;
            displayOperator.textContent = operator;
        }

        if (operator === "") {
            setOperator(); // pressing operator when there's only firstNr
        } else if (operator !== "" && operationResult !== "") {
            operateAfterResult(); // continuing operating after the result
            setOperator();
        } else if (operator !== "" && secondNo !== "" && operationResult === "") {
            operateAgainBeforeResult(); // continuing operating before the result
            setOperator();
        } else if (secondNo === "") {
            setOperator(); // ability to change operator before getting result
        }
    })
})

// continuing operating before the result
const operateAgainBeforeResult = () => {
    getResult();
    firstNo = operationResult;
    displayFirst.textContent = firstNo;

    resetResult();
    resetSecond();
}

// continue operating after the result:
const operateAfterResult = () => {
    firstNo = operationResult;
    displayFirst.textContent = firstNo;

    resetSecond();
    resetResult();
    displayStyleReset(); 
}

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

const getResult = () => {
    firstNo = Number(firstNo);
    secondNo = Number(secondNo);
    operationResult = operate(firstNo, operator, secondNo);
}

// clear button and listener:
const clearButton = document.querySelector("#ac-button");

clearButton.addEventListener("click", () => {
    resetFirst();
    resetSecond();
    resetOperator();
    resetResult();
    displayStyleReset();
})

// reset firstNr:
const resetFirst = () => {
    displayFirst.textContent = "0";
    firstNo = 0;
}

// reset secondNr:
const resetSecond = () => {
    displaySecond.textContent = "";
    secondNo = "";
}

// reset operator

const resetOperator = () => {
    displayOperator.textContent = "";
    operator = "";
}

// reset result

const resetResult = () => {
    operationResult = "";
    displayResult.textContent = "";
}

// reset display style

const displayStyleReset = () => {
    displayNumbers.style.color = "white";
    displayNumbers.style.fontSize = "4rem";
}



/* 

to add:

- ability to add comma (but only 1 per number)

- ability to delete digits

*/
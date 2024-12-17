// basic operations:
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

// main function to complete the operation:
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

let firstNr = "0";
let operator = "";
let secondNr = "";
let operationResult = "";

// div to hold all firstNr, operator, secondNr:
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
        makeString();
        if (operator === "" && firstNr === "0") {
            firstNr = button.id; // first digit of first number
        } else if (operator === "" && firstNr !== "0" && firstNr.length <= 12) {
            firstNr += button.id; // other digits of first number
        } else if (operator !== "" && secondNr === "") {
            secondNr = button.id; // first digit of second number
        } else if (secondNr !== "" && operationResult === "" && secondNr.length <= 12) {
            if (secondNr === "0") {
                secondNr = button.id; // if second number begins with 0, go back to changing first digit instead of adding more 
            } else {
                secondNr += button.id; // other digits of second number
            }
        } else if (operationResult !== "" && operationResult.length <= 16) { // ability to add numbers to the result number
            operationResult += button.id;
            displayResult.textContent = operationResult;
            firstNr = operationResult;
            resetSecond();
            resetOperator();
            resetResult();
            displayStyleReset();
        }
        displayFirst.textContent = firstNr;
        displaySecond.textContent = secondNr;
    })
})

// operator buttons' listener:
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
        } else if (operator !== "" && secondNr !== "" && operationResult === "") {
            operateAgainBeforeResult(); // continuing operating before the result
            setOperator();
        } else if (secondNr === "") {
            setOperator(); // ability to change operator before getting result
        } 
    })
})

// results button and function to get the result:

const resultsButton = document.querySelector("#results-button");

resultsButton.addEventListener("click", () => {
    if (operator !== "" && secondNr !== "") {
        getResult();
        displayResult.textContent = operationResult;
        displayNumbers.style.color = "gray";
        displayNumbers.style.fontSize = "1.5rem";
    }
})

const getResult = () => {
    makeNumber();
    operationResult = operate(firstNr, operator, secondNr);
}

// function to continue operating before the result (for example, 4+5+6 shows 9+6 after completing first sum)
const operateAgainBeforeResult = () => {
    getResult();
    firstNr = operationResult;
    displayFirst.textContent = firstNr;

    resetResult();
    resetSecond();
}

// function to continue operating after the result:
const operateAfterResult = () => {
    firstNr = operationResult;
    displayFirst.textContent = firstNr;

    resetSecond();
    resetResult();
    displayStyleReset(); 
}

// function to clear button and listener:
const clearButton = document.querySelector("#ac-button");

clearButton.addEventListener("click", () => {
    resetFirst();
    resetSecond();
    resetOperator();
    resetResult();
    displayStyleReset();
})

// function to reset firstNr:
const resetFirst = () => {
    displayFirst.textContent = "0";
    firstNr = "0";
}

// function toreset secondNr:
const resetSecond = () => {
    displaySecond.textContent = "";
    secondNr = "";
}

// function to reset operator:
const resetOperator = () => {
    displayOperator.textContent = "";
    operator = "";
}

// function to reset result:
const resetResult = () => {
    operationResult = "";
    displayResult.textContent = "";
}

// function to reset display style (for the #display-numbers div):
const displayStyleReset = () => {
    displayNumbers.style.color = "#dedede";
    displayNumbers.style.fontSize = "3rem";
}

// function to make a number into a string:

const makeString = () => {
    firstNr = String(firstNr);
    secondNr = String(secondNr);
    operationResult = String(operationResult);
}

// function to make a string into a number:

const makeNumber = () => {
    firstNr = Number(firstNr);
    secondNr = Number(secondNr);
    operationResult = Number(operationResult);
}

// comma button functionality:
const commaButton = document.querySelector("#comma");
commaButton.addEventListener("click", () => {
    makeString();
    if (operator === "" && !firstNr.includes(".")) { // adding comma to first number
        firstNr += ".";
        displayFirst.textContent = firstNr;
    } else if (operator !== "" && secondNr !== "" && !secondNr.includes(".") && operationResult === "") { // adding commas to second number
        secondNr += ".";
        displaySecond.textContent = secondNr;
    } else if (operationResult !== "" && !operationResult.includes(".") && operationResult.length <= 16) { // ability to add comma to the result number if there ain't one
        operationResult += ".";
        displayResult.textContent = operationResult;
    }
})

// delete button functionality:
const deleteButton = document.querySelector("#del-button");
deleteButton.addEventListener("click", () => {
    makeString();
    if (firstNr !== "" && firstNr !== "0" && firstNr !== "0" && operator === "") { // deleting digits off the first number
        firstNr = firstNr.slice(0, -1);
        displayFirst.textContent = firstNr;
    } else if (operator !== "" && secondNr !== "" && operationResult === "") { // deleting digits off the second number
        secondNr = secondNr.slice(0, -1);
        displaySecond.textContent = secondNr;
    } else if (operationResult !== "") { // deleting digits off the end result;
        firstNr = operationResult;
        firstNr = firstNr.slice(0, -1);

        displayFirst.textContent = firstNr;
        
        resetOperator();
        resetResult();
        resetSecond();
        displayStyleReset(); 
    }
})
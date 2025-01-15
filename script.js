let numbersButton = document.querySelectorAll(".button.button-number");
let commaButton = document.querySelector(".button.button-comma");
let displayerSpan = document.querySelector(".displayer");
let firstNumberSpan = document.querySelector(".first-number");

const maxDisplayerNumbers = 10;

let calculator = {
    numbersDisplayed: 0,
    firstNumber: 0,
    secondNumber: 0,
    operation: ''
};

numbersButton.forEach(button => {
    button.addEventListener("click", _ => {
        addNumericButtonEvent(button);
    });
});

commaButton.addEventListener("click", event => {
    addNumericButtonEvent(commaButton);
});

document.querySelector(".button.button-delete").addEventListener("click", _ => {
    addDeleteButtonEvent();
});

document.querySelector(".button.button-reset").addEventListener("click", _ => {
    addResetButtonEvent();
});

document.querySelectorAll(".button.button-operation").forEach(operation => {
    operation.addEventListener("click", event => {
        addOperationButtonEvent(operation);
    });
});

document.querySelector(".button.button-equals").addEventListener("click", event => {
    addEqualsButtonEvent();
});

function addEqualsButtonEvent() {
    if (calculator.operation === "/" && displayerSpan.textContent == "0") {
        alert("nop");
        displayerSpan.textContent = '';
        return;
    }
    calculator.secondNumber = displayerSpan.textContent;
    displayerSpan.textContent = Math.round((operate() + Number.EPSILON) * 100) / 100;
    firstNumberSpan.textContent = '';
}

function addOperationButtonEvent(operation) {
    firstNumberSpan.textContent = displayerSpan.textContent;
    displayerSpan.textContent = '';
    calculator.operation = operation.querySelector("button").textContent;
    calculator.numbersDisplayed = 0;
    calculator.firstNumber = firstNumberSpan.textContent;
}

function addNumericButtonEvent(button) {
    if (calculator.numbersDisplayed === maxDisplayerNumbers)
        return;

    let buttonElement = button.querySelector("button");
    displayerSpan.textContent = `${displayerSpan.textContent}${buttonElement.textContent}`;

    calculator.numbersDisplayed++;
}

function addDeleteButtonEvent() {
    let displayerContent = displayerSpan.textContent;
    if (displayerContent.length === 0)
        return;

    displayerSpan.textContent = displayerContent.slice(0, length - 1);
    calculator.numbersDisplayed--;
}

function addResetButtonEvent() {
    displayerSpan.textContent = '';
    calculator.numbersDisplayed = 0;
    firstNumberSpan.textContent = '';
}

function operate() {
    return new Function(`return ${calculator.firstNumber} ${calculator.operation} ${calculator.secondNumber}`)();
}
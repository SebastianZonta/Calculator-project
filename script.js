let numbersButton = document.querySelectorAll(".button.button-number");
let displayerSpan = document.querySelector(".displayer span");
const maxDisplayerNumbers = 10;
let calculator = {};

numbersButton.forEach(button => {
    button.addEventListener("click", _ => {
        addNumericButtonEvent(button);
    });
});

document.querySelector(".button.button-delete").addEventListener("click", _ => {
    addDeleteButtonEvent();
});

document.querySelector(".button.button-reset").addEventListener("click", _ => {
    addResetButtonEvent();
});


function addNumericButtonEvent(button) {
    if (calculator.numbersDisplayed === maxDisplayerNumbers)
        return;

    let buttonElement = button.querySelector("button");
    displayerSpan.textContent = `${displayerSpan.textContent}${buttonElement.textContent}`;
    if (!calculator.numbersDisplayed)
        calculator.numbersDisplayed = 0;

    calculator.numbersDisplayed++;
}

function addDeleteButtonEvent() {
    let displayerContent = displayerSpan.textContent;
    if (displayerContent.length === 0)
        return;

    displayerSpan.textContent = displayerContent.slice(0, length - 1);
}

function addResetButtonEvent() {
    displayerSpan.textContent = '';
    if (calculator.numbersDisplayed)
        calculator.numbersDisplayed = 0;
}
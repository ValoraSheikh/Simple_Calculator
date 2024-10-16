let input = document.querySelector('#input');
let buttons = document.querySelectorAll('button');
let initialNo = '';

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const value = e.target.textContent;

        if (value === 'C') {
            clearInput();
        } else if (value === '=') {
            calculate();
        } else {
            appendNum(e); // Pass the event object to appendNum
        }
    });
});

function appendNum(e) {
    initialNo = e.target.textContent;
    // Only append if the button pressed is not 'C' or '='
    if (initialNo !== 'C' && initialNo !== '=') {
        input.value += initialNo;
    }
}

function clearInput() {
    input.value = "";
}

function calculate() {

    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error()"
    }
    input.value = eval(input.value); // Be cautious with eval for security reasons
}

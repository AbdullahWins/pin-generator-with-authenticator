//Random Pin Generator

const pinButton = document.getElementById('pin-btn');
const pinGenField = document.getElementById('pin-gen-field');
const calculator = document.getElementById('calculator');
const pinInputField = document.getElementById('pin-input-field');


function generatePin () {
    const random = Math.round(Math.random () * 10000);
    pinGenField.value = random;
    if ((random + '').length === 4) {
        return random;
    }
    else {
        return generatePin();
    }
    
}

pinButton.addEventListener('click' , function () {
    generatePin()
})

calculator.addEventListener('click' , function (event) {
    const input = event.target.innerText;
    if(isNaN(input)) {
        if(input === 'C') {
            pinInputField.value = '';
        }
        else if (input === '<') {
            const digits = pinInputField.value.split('');
            digits.pop();
            remainingDigits = digits.join('');
            pinInputField.value = remainingDigits;
        }
    }
    else {
    clickedBtn =(pinInputField.value) + (input);
    pinInputField.value = clickedBtn;
    }
})
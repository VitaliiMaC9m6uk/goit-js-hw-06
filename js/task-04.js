let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const outputValue = document.querySelector('#value');

const hendleBtnClickDec = () => {
    counterValue -= 1;
    outputValue.textContent = counterValue;
}
const hendleBtnClickInc = () => {
    counterValue += 1;
    outputValue.textContent = counterValue;
}
buttonDec.addEventListener('click', hendleBtnClickDec);
buttonInc.addEventListener('click', hendleBtnClickInc);
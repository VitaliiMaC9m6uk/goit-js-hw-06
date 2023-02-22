function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputField = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxFild = document.querySelector('#boxes');
const bufer = document.createElement('div');
let valueInput = 0;

inputField.addEventListener('input', event => {
  valueInput = Number(event.currentTarget.value);
  console.log(valueInput);
});



function addNewBox() {
  for (let i = 1; i <= valueInput; i += 1){
    const newI = i * 10;
    const boxEl = document.createElement('div');
    console.log(valueInput);
    boxEl.style.width = `${20 + newI}px`;
    boxEl.style.height = `${20 + newI}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxFild.append(boxEl);
  }
  
}



createBtn.addEventListener('click', addNewBox);
destroyBtn.addEventListener('click', () => {
  boxFild.innerHTML = '';
})

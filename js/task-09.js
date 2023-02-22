function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

function changeRandomColorBody() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor= randomColor;  
  span.textContent = randomColor;
}

button.addEventListener('click', changeRandomColorBody);
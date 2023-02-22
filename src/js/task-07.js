
const text = document.querySelector('#text');

const input = document.querySelector('#font-size-control');
input.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});
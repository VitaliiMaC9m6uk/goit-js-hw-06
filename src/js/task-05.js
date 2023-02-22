const inputName = document.querySelector('#name-input');
console.log(inputName);
const outputName = document.querySelector('#name-output');
console.log(outputName);

const writeName = event => {
    if (!(event.currentTarget.value.trim().length === 0)) {
        outputName.textContent = event.currentTarget.value;        
        return; 
    }
    outputName.textContent = 'Anonymous';
    
}



inputName.addEventListener('input', writeName)
const inputField = document.querySelector('#validation-input');
const lengthFild = Number(inputField.dataset.length);

const onValidationValue = (event) => {
  const value = event.target.value

  inputField.classList.add('invalid')

  value.trim().length === lengthFild && value.trim() !== ''
    ? inputField.classList.replace('invalid', 'valid')
    : inputField.classList.replace('valid', 'invalid')
  
  console.log(value.trim().length)
}

inputField.addEventListener('blur', onValidationValue);
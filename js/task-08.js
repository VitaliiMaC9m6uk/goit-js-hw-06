const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({email: email.value, password: password.value});
  event.currentTarget.reset();
    // const formData = new FormData(event.currentTarget) 
    
    // formData.forEach((value, name) => {
    //     if (name === "" || value === "") {
    //         return alert("Please fill in all the fields!");
    //     }
    //     console.log( name, value);
       
    // })
    // `email: ${email.value}, password: ${password.value}`
}

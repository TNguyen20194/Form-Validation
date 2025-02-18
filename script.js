const form = document.getElementById('form')
const password1EL = document.getElementById('password1')
const password2EL = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false;
let passwordMatch = false;

function validateForm () {
  // Using Constraint API
  isValid = form.checkValidity()
  // Style main message for an error
  if(!isValid) {
    message.textContent = 'Please fill out all fields.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
//   Check to see if passwords match
  if(password1EL.value === password2EL.value) {
    passwordMatch = true;
    password1EL.style.borderColor = 'green';
    password2EL.style.borderColor = 'green';
  } else {
    passwordMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1EL.style.borderColor = 'red';
    password2EL.style.borderColor = 'red';
    return;
  };
//   If form is valis and passwords match
  if(isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green'
  }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
}

function processFormData (e) {
  e.preventDefault()
  // Validate form
  validateForm()
//   Submit Data if valid
if(isValid && passwordMatch){
    storeFormData()
}
}

// Event Listener
form.addEventListener('submit', processFormData)

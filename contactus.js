
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText=message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function length(input){
    input.innerText="Invalid";
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    if (firstname.value === "") {
        showError(firstname, "First name is required");
        firstname.innerHTML="Please"
    } else {
        showSuccess(firstname);
    }

    if (firstname.length<3) {
        length(firstname);
    }
    if (lastname.value ==="") {
        showError(lastname,"Last Name is required");        
    }else{
        showSuccess(lastname);
    }
    if (email.value.trim() === "") {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Invalid email format");
    } else {
        showSuccess(email);
    }

    if (feedback.value.trim() === "") {
        showError(feedback, "Feedback is required");
    } else {
        showSuccess(feedback);
    }

});
        


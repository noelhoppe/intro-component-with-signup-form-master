"use strict";
// Do I have to name TypeScript files in UpperCamelCase notation?
// Why do I have error Messages in the browser's console?
document.addEventListener("DOMContentLoaded", () => {
    // Select items
    // ...considering form
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordToggler = document.getElementById("togglePasswordVisibility");
    const submitForm = document.getElementById("submit");
    // ...considering error messages
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    // Toggle password visibility
    passwordToggler.addEventListener("click", () => {
        togglePasswordVisibility();
    });
    function togglePasswordVisibility() {
        if (passwordInput.type == "password")
            passwordInput.type = "text";
        else
            passwordInput.type = "password";
    }
    // validation check before submitting
    submitForm.addEventListener("click", () => {
        validateForm();
    });
    // validation check functions
    function isEmpty(input) {
        return input.value.length == 0;
    }
    // I have cheated with RegEx and looked for good RegEx :)
    function isValidFirstName() {
        return !isEmpty(firstNameInput) && /^[A-Z][a-z]+/.test(firstNameInput.value);
    }
    function isValidLastName() {
        return !isEmpty(lastNameInput) && /^[A-Z][a-z]+/.test(lastNameInput.value);
    }
    function isValidMail() {
        return !isEmpty(emailInput) && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);
    }
    function isValidPassword() {
        return !isEmpty(passwordInput) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(passwordInput.value);
    }
    // handling error messages
    // define error messages
    const invalidFirstNameMessage = "First Name cannot be empty and starts with capital letter";
    const invalidLastNameMessage = "Last Name cannot be empty and starts with capital letter";
    const invalidMailMessage = "Looks like this is not an email";
    const invalidPasswordMessage = "Password cannot be empty. It has to contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    function validateForm() {
        if (isValidFirstName()) {
            firstNameError.textContent = "";
            firstNameInput.className = "validInput";
        }
        else {
            firstNameError.textContent = invalidFirstNameMessage;
            firstNameInput.className = "invalidInput";
        }
        if (isValidLastName()) {
            lastNameError.textContent = "";
            lastNameInput.className = "validInput";
        }
        else {
            lastNameError.textContent = invalidLastNameMessage;
            lastNameInput.className = "invalidInput";
        }
        if (isValidMail()) {
            emailError.textContent = "";
            emailInput.className = "validInput";
        }
        else {
            emailError.textContent = invalidMailMessage;
            emailInput.className = "invalidInput";
        }
        if (isValidPassword()) {
            passwordError.textContent = "";
            passwordInput.className = "validInput";
        }
        else {
            passwordError.textContent = invalidPasswordMessage;
            passwordInput.className = "invalidInput";
        }
    }
});

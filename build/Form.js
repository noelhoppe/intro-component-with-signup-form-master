"use strict";
// Do I have to name TypeScript files in UpperCamelCase notation?
document.addEventListener("DOMContentLoaded", () => {
    // Select items
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordToggler = document.getElementById("togglePasswordVisibility");
    const submitForm = document.getElementById("submit");
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
        console.log(isValidFirstName());
    });
    // validation check functions
    function isEmpty(input) {
        return input.value.length == 0;
    }
    function isValidFirstName() {
        return !isEmpty(firstNameInput) && /^[A-Z][a-z]+$/.test(firstNameInput.value);
    }
    // handling error messages
    // define error messages
    const invalidFirstName = "First Name cannot be empty and starts with capital letter";
    const invalidLastName = "Last Name cannot be empty and starts with capital letter";
    const invalidMail = "Looks like this is not an email";
    const invalidPassword = "Password cannot be empty";
});

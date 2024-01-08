// Do I have to name TypeScript files in UpperCamelCase notation?
// Why do I have error Messages in the browser's console?
document.addEventListener("DOMContentLoaded", () => {
    // Select items
    // ...considering form
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const passwordToggler = document.getElementById("togglePasswordVisibility") as HTMLInputElement;
    const submitForm = document.getElementById("submit") as HTMLButtonElement;

    // ...considering error messages
    const firstNameError = document.getElementById("firstNameError") as HTMLParagraphElement;
    const lastNameError = document.getElementById("lastNameError") as HTMLParagraphElement;
    const emailError =document.getElementById("emailError") as HTMLParagraphElement;
    const passwordError = document.getElementById("passwordError") as HTMLParagraphElement;

    // Toggle password visibility
    passwordToggler.addEventListener("click", () => {
        togglePasswordVisibility();
    })
    function togglePasswordVisibility() {
        if (passwordInput.type == "password") passwordInput.type = "text";
        else passwordInput.type = "password";
    }


    // validation check before submitting
    submitForm.addEventListener("click", () => {
        validateForm();
    })

    // validation check functions
    function isEmpty(input : HTMLInputElement) : boolean {
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
    const invalidFirstNameMessage : string = "First Name cannot be empty and starts with capital letter";
    const invalidLastNameMessage : string = "Last Name cannot be empty and starts with capital letter";
    const invalidMailMessage : string = "Looks like this is not an email";
    const invalidPasswordMessage : string = "Password cannot be empty. It has to contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";

    function validateForm() {
        if (isValidFirstName()) firstNameError.textContent = "";
        else firstNameError.textContent = invalidFirstNameMessage;
        if (isValidLastName()) lastNameError.textContent = "";
        else lastNameError.textContent = invalidLastNameMessage;
        if (isValidMail()) emailError.textContent = "";
        else emailError.textContent = invalidMailMessage;
        if (isValidPassword()) passwordError.textContent = "";
        else passwordError.textContent = invalidPasswordMessage;
    }
})

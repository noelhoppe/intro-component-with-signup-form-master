// Do I have to name TypeScript files in UpperCamelCase notation?
document.addEventListener("DOMContentLoaded", () => {

    // Select items
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const passwordToggler = document.getElementById("togglePasswordVisibility") as HTMLInputElement;
    const submitForm = document.getElementById("submit") as HTMLButtonElement;

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
        console.log(isValidFirstName());
    })





    // validation check functions
    function isEmpty(input : HTMLInputElement) : boolean {
        return input.value.length == 0;
    }

    function isValidFirstName() {
        return !isEmpty(firstNameInput) && /^[A-Z][a-z]+$/.test(firstNameInput.value);
    }




    // handling error messages
    // define error messages
    const invalidFirstName : string = "First Name cannot be empty and starts with capital letter";
    const invalidLastName : string = "Last Name cannot be empty and starts with capital letter";
    const invalidMail : string = "Looks like this is not an email";
    const invalidPassword : string = "Password cannot be empty";

})

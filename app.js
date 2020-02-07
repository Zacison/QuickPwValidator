
const input1 = document.querySelector(".username");
const input2 = document.querySelector(".password");

const user_span = document.querySelector(".user-span");
const pass_span = document.querySelector(".pass-span");

const userText = document.querySelector(".usertext");
const passText = document.querySelector(".passtext");

const submitButton = document.querySelector(".submit");


const validation = () => {
    if (input1.value !== "" && input2.value !== "") {
        
        user_span.textContent = input1.value;
        pass_span.textContent = input2.value;

        //Validation - lowercase, uppercase, number, 8+chars

        //Chars
        if (input2.value.length >= 8) {
            passText.textContent = "";
        } 
        else {
            passText.textContent = "Must be 8+ chars ";
        }

        //Validate numbers

        var numbers = /[0-9]/g;
        if (input2.value.match(numbers)) {
            passText.textContent = passText.textContent;
        }
        else {
            passText.textContent = "Must contain a number ";
        }

        //Validate lowercase letter
        var lowercase = /[a-z]/g;
        if (input2.value.match(lowercase)) {
            passText.textContent = passText.textContent;
        }
        else {
            passText.textContent = "Must contain a lowercase letter";
        }

        //Validate uppercase letter
        var uppercase = /[A-Z]/g;
        if (input2.value.match(uppercase)) {
            passText.textContent = passText.textContent;
        }
        else {
            passText.textContent = "Must contain a uppercase letter";
        }
        
    } 
    else {
        console.log("empty form")
    }
}


submitButton.addEventListener("click", validation);

document.addEventListener('keypress', function (event) { //on keypress
    if (event.keycode === 13 || event.which === 13) {
        validation();
    }
});


const input = (e) => {
    console.log(e)
}
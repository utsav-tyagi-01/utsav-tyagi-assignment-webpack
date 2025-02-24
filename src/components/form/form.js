import "./form.scss";
import forms from "./form.html";

export function Form() {

    const formContainer = document.createElement("div");
    formContainer.innerHTML = forms;

    requestAnimationFrame(() => {
        const form = document.querySelector("#myForm"); 
        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const password = form.querySelector("#password");
        const number = form.querySelector("#number");

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
               
                let valid = true;
                var exp=/^[A-Za-z\s]+$/;

                if ( !exp.test(name.value.trim()) ) {
                    name.nextElementSibling.innerHTML= "Name should be alphabets.";
                    valid = false;
                }
                else if(name.value.length<3){
                    name.nextElementSibling.innerHTML= "Name must be at least 3 characters";
                    valid = false;
                }
                 else {
                    name.nextElementSibling.innerHTML = "";
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                    email.nextElementSibling.textContent = "Enter a valid email";
                    valid = false;
                } else {
                    email.nextElementSibling.textContent = "";
                }

                if (!(password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) &&
                    password.value.match(/[!@#$%^&*()<>.,?{}|:\"]/) && password.value.length >= 8)) {
                    form.querySelector("#danger-pass").innerHTML =
                        "Password must have 8 chars, <br> 1 uppercase, 1 lowercase, 1 special";
                    valid = false;
                } else {
                    form.querySelector("#danger-pass").innerHTML = "";
                }

                if (number.value.length !== 10) {
                    number.nextElementSibling.textContent = "Number must be 10 digits.";
                    valid = false;
                } else {
                    form.querySelector("#danger-number").innerHTML = "";
                }

                if (!valid) {
                    e.preventDefault();
                }
                else{
                    name.value="";
                    email.value="";
                    password.value="";
                    number.value="";
                }

                
            });
               
            name.addEventListener("blur", (e) => {
                if (name.value.trim().length < 3) {
                    name.nextElementSibling.textContent = "Name must be at least 3 characters.";
                } else {
                    name.nextElementSibling.textContent = "";
                }
            });

            email.addEventListener("blur", () => {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                    email.nextElementSibling.textContent = "Enter a valid email";
                } else {
                    email.nextElementSibling.textContent = "";
                }
            });

            password.addEventListener("blur", () => {
                if (!(password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) &&
                    password.value.match(/[!@#$%^&*()<>.,?{}|:\"]/) && password.value.length >= 8)) {
                    document.getElementById("danger-pass").innerHTML =
                        "Password must have 8 chars,<br> 1 uppercase, 1 lowercase, 1 special";
                } else {
                    document.getElementById("danger-pass").innerHTML = "";
                }
            });

            number.addEventListener("blur", () => {
                if (number.value.length !== 10) {
                    number.nextElementSibling.textContent = "Number must be 10 digits.";
                } else {
                    document.getElementById("danger-number").innerHTML = "";
                }
            });
            

         
        }
    });

    return formContainer.innerHTML;
}
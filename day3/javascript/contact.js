
let inputName = document.querySelector("#name-input");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let radioButton = document.querySelector("#radio-button");
let message = document.querySelector("#textarea");
const form = document.querySelector("#form");



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let dataStatic = {
        inputName,
        email,
        number,
        radioButton,
        message
    }


    console.log(dataStatic);


    const emailReceiver = "dragoriza123@gmail.com";

    let anchor = document.createElement("a");

    anchor.href = `mailto:${emailReceiver}?subject=${radioButton}&body=konnichiwa hajimimashite ${inputName},\n${message}`;
    anchor.click();
})
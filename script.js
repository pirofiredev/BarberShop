let comment = document.querySelector("#booking-comment-field");

const namePlaceHolder = document.querySelector("#booking-name-placeholder");
const numberPlaceHolder = document.querySelector("#booking-phone-placeholder");


function typingName() {
    let nameInput = document.querySelector("#booking-name-field").value;
    
    if(nameInput=="") {
        namePlaceHolder.style.display="block";
    }
    else {
        namePlaceHolder.style.display="none";
    }
}

function typingNumber() {
    let numberInput = document.querySelector("#booking-number-field").value;

    if(numberInput=="") {
        numberPlaceHolder.style.display="block";
    }
    else {
        numberPlaceHolder.style.display="none";
    }
}

function notNumber() {
    let numberInput = document.querySelector("#booking-number-field").value;
    const defaultPlaceholder = numberPlaceHolder;

    if(numberInput.textContent) {
        document.querySelector("#booking-phone-placeholder").innerHTML = "Please, input the phone number.";
    }
    else {
        document.querySelector("#booking-phone-placeholder").innerHTML = defaultPlaceholder;
    }
}
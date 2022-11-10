"use strict";
function appendFun() {
    var state = document.getElementById("contact_state").value;
    var promo;
    if (state == "") {
        document.getElementById("contactPromotionCode").value = "";
    }
    else {
        promo = state.concat('-PROMO');
        document.getElementById("contactPromotionCode").value = promo;
    }
}
function gender(input) {
    if (input.id == 'male') {
        alert('Hello sir!');
    }
    else if (input.id == 'female') {
        alert("Hello lady!");
    }
}
var validation_flag = 0;
var req_check = document.forms['contactform'].getElementsByClassName("mandatoryField").length;
var counter = 0;
function validate(input) {
    var name_reg = /^[a-zA-Z\s]*$/;
    var email_reg = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var org_reg = /^[a-zA-Z\s]*$/;
    var webAddr_reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    var phone_reg = /^\+?[1-9][0-9]{9,14}$/;
    switch (input.id) {
        case 'contact_name':
            {
                let name = input.id.concat('_error');
                if (input.value == "") {
                    showEmptyMsg(name, 'Name');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else if (!name_reg.test(input.value)) {
                    showError(name, 'Name');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else {
                    hideError(name);
                    validation_flag = 1;
                    if (counter >= req_check) {
                        counter = req_check;
                    }
                    else {
                        counter++;
                    }
                }
                break;
            }
        case 'contact_email':
            {
                let email = input.id.concat('_error');
                if (input.value == "") {
                    showEmptyMsg(email, 'Email');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else if (!email_reg.test(input.value)) {
                    showError(email, 'Email');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else {
                    hideError(email);
                    validation_flag = 1;
                    if (counter >= req_check) {
                        counter = req_check;
                    }
                    else {
                        counter++;
                    }
                }
                break;
            }
        case 'contact_phoneNumber':
            {
                let phone = input.id.concat('_error');
                if (input.value == "") {
                    showEmptyMsg(phone, 'Phone Number');
                }
                else if (!phone_reg.test(input.value)) {
                    showError(phone, 'Phone Number');
                }
                else {
                    hideError(phone);
                }
                break;
            }
        case 'contact_org':
            {
                let org = input.id.concat('_error');
                if (input.value == "") {
                    showEmptyMsg(org, 'Org Name');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else if (!org_reg.test(input.value)) {
                    showError(org, 'Org Name');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else {
                    hideError(org);
                    validation_flag = 1;
                    if (counter >= req_check) {
                        counter = req_check;
                    }
                    else {
                        counter++;
                    }
                }
                break;
            }
        case 'contact_webAddr':
            {
                let web = input.id.concat('_error');
                if (input.value == "") {
                    showEmptyMsg(web, 'Web Address');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else if (!webAddr_reg.test(input.value)) {
                    showError(web, 'Web Address');
                    validation_flag = 0;
                    if (counter <= 0) {
                        counter = 0;
                    }
                    else {
                        counter = counter;
                    }
                }
                else {
                    hideError(web);
                    validation_flag = 1;
                    if (counter >= req_check) {
                        counter = req_check;
                    }
                    else {
                        counter++;
                    }
                }
                break;
            }
    }
}
function showEmptyMsg(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = string.concat(" Required");
}
function showError(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = "Invalid".concat(" ", string);
}
function hideError(error_id) {
    document.getElementById(error_id).style.display = "none";
}
/*
function validateMail(input){
    console.log(input);
    var email=input.value;
    console.log(email);
    var email_reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(!email_reg.test(email))
     {
        document.getElementById('email_error').style.display="inline";
        document.getElementById('error').style.display="block";
        validation_flag=1;
     }
     else{
        document.getElementById('email_error').style.display="none";
        document.getElementById('error').style.display="none";
        validation_flag=0;
     }
   
}

function validateWebAddr(input){
    var webAddr=input.value;
    var webAddr_reg=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(!webAddr_reg.test(webAddr))
     {
        document.getElementById('web_error').style.display="inline";
        document.getElementById('error').style.display="block";
        validation_flag=1;
     }
     else{
        document.getElementById('web_error').style.display="none";
        document.getElementById('error').style.display="none";
        validation_flag=0;
     }
}*/
function submitFun(event) {
    console.log(counter);
    if (validation_flag == 0 || req_check != counter) {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Sending Message!");
    }
    else if (validation_flag == 1 && req_check == counter) {
        alert("Message Sent Successfully!");
    }
}
function clearForm(event) {
    var ans = confirm("Are you sure?");
    var inputFields = document.getElementsByClassName("input_textbox");
    if (ans) {
        for (let j = 0; counter < inputFields.length; counter++) {
            if (inputFields[j].value != "") {
                inputFields[j].value = "";
            }
        }
        validation_flag = 0;
        counter = 0;
        alert('Form has been cleared.');
    }
    else {
        event.preventDefault();
    }
    return counter, validation_flag;
}

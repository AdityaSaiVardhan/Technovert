"use strict";
function appendfun() {
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
function genderFun(input) {
    if (input.id == 'male') {
        alert('Hello sir!');
    }
    else if (input.id == 'female') {
        alert("Hello lady!");
    }
}
var name_error = false;
var email_error = false;
var org_error = false;
var webAddr_error = false;
var req_check = document.querySelectorAll(".mandatoryField").length;
function validateInput(input) {
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
                    name_error = false;
                    showemptymsg(name, 'Name');
                }
                else if (!name_reg.test(input.value)) {
                    name_error = false;
                    showerror(name, 'Name');
                }
                else {
                    name_error = true;
                    hideerror(name);
                }
                break;
            }
        case 'contact_email':
            {
                let email = input.id.concat('_error');
                if (input.value == "") {
                    email_error = false;
                    showemptymsg(email, 'Email');
                }
                else if (!email_reg.test(input.value)) {
                    email_error = false;
                    showerror(email, 'Email');
                }
                else {
                    email_error = true;
                    hideerror(email);
                }
                break;
            }
        case 'contact_phoneNumber':
            {
                let phone = input.id.concat('_error');
                if (input.value == "") {
                    showemptymsg(phone, 'Phone Number');
                }
                else if (!phone_reg.test(input.value)) {
                    showerror(phone, 'Phone Number');
                }
                else {
                    hideerror(phone);
                }
                break;
            }
        case 'contact_org':
            {
                let org = input.id.concat('_error');
                if (input.value == "") {
                    org_error = false;
                    showemptymsg(org, 'Org Name');
                }
                else if (!org_reg.test(input.value)) {
                    org_error = false;
                    showerror(org, 'Org Name');
                }
                else {
                    org_error = true;
                    hideerror(org);
                }
                break;
            }
        case 'contact_webAddr':
            {
                let web = input.id.concat('_error');
                if (input.value == "") {
                    webAddr_error = false;
                    showemptymsg(web, 'Web Address');
                }
                else if (!webAddr_reg.test(input.value)) {
                    webAddr_error = false;
                    showerror(web, 'Web Address');
                }
                else {
                    webAddr_error = true;
                    hideerror(web);
                }
                break;
            }
    }
}
function showemptymsg(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = string.concat(" Required");
}
function showerror(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = "Invalid".concat(" ", string);
}
function hideerror(error_id) {
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
function submitform(event) {
    if (name_error == true && email_error == true && webAddr_error == true && org_error == true) {
        alert("Message Sent Successfully!");
    }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Sending Message!");
    }
}
function clearform(event) {
    var ans = confirm("Are you sure?");
    var inputFields = document.getElementsByClassName("input_textbox");
    if (ans) {
        for (let j = 0; counter < inputFields.length; counter++) {
            if (inputFields[j].value != "") {
                inputFields[j].value = "";
            }
        }
        name_error = false;
        email_error = false;
        org_error = false;
        webAddr_error = false;
    }
    else {
        event.preventDefault();
    }
}

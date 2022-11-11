"use strict";
$('#contact_state').on("change", function (input) {
    if (input.target.value == "") {
        $("#contact_promotion_code").val("");
    }
    else {
        var promo = input.target.value.concat('-PROMO');
        $("#contact_promotion_code").val(promo);
    }
});
$('#male,#female').on("click", function gender(input) {
    if (input.target.id == 'male') {
        alert('Hello sir!');
    }
    else if (input.target.id == 'female') {
        alert("Hello lady!");
    }
});
var name_error = false;
var email_error = false;
var org_error = false;
var webAddr_error = false;
$('#contact_name_field').on("keyup", function (input) {
    var alphabets = /[^a-zA-Z\s]/gi;
    var name_reg = /^[a-zA-Z\s]*$/;
    if (input.target.value == "") {
        $('#contact_name_error').show();
        $('#contact_name_error').text('Name Required');
        name_error = false;
    }
    else if (!name_reg.test(input.target.value)) {
        $('#contact_name_error').show();
        $('#contact_name_error').text('Name must contain only alphabets');
        input.target.value = input.target.value.replace(alphabets, "");
        name_error = false;
    }
    else {
        $('#contact_name_error').hide();
        name_error = true;
    }
});
$('#contactform').on("keyup", function (input) {
    var email_reg = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var org_reg = /^[a-zA-Z\s]*$/;
    var webAddr_reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    switch (input.target.id) {
        case 'contact_email_field':
            {
                if (input.target.value == "") {
                    $('#contact_email_error').show();
                    $('#contact_email_error').text('Email Required');
                    email_error = false;
                }
                else if (!email_reg.test(input.target.value)) {
                    $('#contact_email_error').show();
                    $('#contact_email_error').text('Invalid Email');
                    email_error = false;
                }
                else {
                    $('#contact_email_error').hide();
                    email_error = true;
                }
                break;
            }
        case 'contact_org_field':
            {
                if (input.target.value == "") {
                    $('#contact_org_error').show();
                    $('#contact_org_error').text('Org Name Required');
                    org_error = false;
                }
                else if (!org_reg.test(input.target.value)) {
                    $('#contact_org_error').show();
                    $('#contact_org_error').text('Invalid Org Name');
                    org_error = false;
                }
                else {
                    $('#contact_org_error').hide();
                    org_error = true;
                }
                break;
            }
        case 'contact_webaddr_field':
            {
                if (input.target.value == "") {
                    $('#contact_webaddr_error').show();
                    $('#contact_webaddr_error').text('Web Address Required');
                    webAddr_error = false;
                }
                else if (!webAddr_reg.test(input.target.value)) {
                    $('#contact_webaddr_error').show();
                    $('#contact_webaddr_error').text('Invalid Web Address');
                    webAddr_error = false;
                }
                else {
                    $('#contact_webaddr_error').hide();
                    webAddr_error = true;
                }
                break;
            }
    }
});
$('#contact_phone_number_field').on("keyup", function (input) {
    var digits = /[^0-9]/gi;
    var phone_reg = /^\+?[1-9][0-9]{9,14}$/;
    if (input.target.value == "") {
        $('#contact_phone_number_error').show();
        $('#contact_phone_number_error').text('Number Required');
    }
    else if (!phone_reg.test(input.target.value)) {
        $('#contact_phone_number_error').show();
        $('#contact_phone_number_error').text('Must contain upto 10-14 digits');
        input.target.value = input.target.value.replace(digits, "");
    }
    else {
        $('#contact_phone_number_error').hide();
    }
});
$('#submit').on("click", function (event) {
    if (name_error == true && email_error == true && webAddr_error == true && org_error == true) {
        alert("Submitted Successfully!");
    }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Submitting");
    }
});
$('#reset').on("click", function (event) {
    var response = confirm("Are you sure?");
    var inputFields = $(".input_textbox").val();
    if (response) {
        for (let counter = 0; counter < inputFields.length; counter++) {
            if (inputFields[counter].value != "") {
                inputFields[counter].value = "";
            }
        }
        name_error = false;
        email_error = false;
        org_error = false;
        webAddr_error = false;
        alert("Form has been Cleared");
    }
    else {
        event.preventDefault();
    }
});

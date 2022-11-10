function browsefun() {
    var file_name = document.getElementById("files").value;
    var splits = file_name.split('fakepath\\');
    document.getElementById("filename").value = splits[1];
}
var req_check = document.querySelectorAll('.mandatoryfield').length;
console.log(req_check);
var name_error = false;
var email_error = false;
var role_error = false;
function validateInput(input) {
    var name_reg = /^[a-zA-Z\s]*$/;
    var email_reg = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var role_reg = /^[a-zA-Z\s]*$/;
    switch (input.id) {
        case 'career_name':
            {
                var name_1 = input.id.concat('_error');
                if (input.value == "") {
                    showEmptymsg(name_1, 'Name');
                    name_error = false;
                }
                else if (!name_reg.test(input.value)) {
                    Showeeror(name_1, 'Name');
                    name_error = false;
                }
                else {
                    Hideerror(name_1);
                    name_error = true;
                }
                break;
            }
        case 'career_email':
            {
                var email = input.id.concat('_error');
                if (input.value == "") {
                    showEmptymsg(email, 'Email');
                    email_error = false;
                }
                else if (!email_reg.test(input.value)) {
                    Showeeror(email, 'Email');
                    email_error = false;
                }
                else {
                    Hideerror(email);
                    email_error = true;
                }
                break;
            }
        case 'career_role':
            {
                var role = input.id.concat('_error');
                if (input.value == "") {
                    showEmptymsg(role, 'Role');
                    role_error = false;
                }
                else if (!role_reg.test(input.value)) {
                    Showeeror(role, 'Role');
                    role_error = false;
                }
                else {
                    Hideerror(role);
                    role_error = true;
                }
                break;
            }
    }
}
function showEmptymsg(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = string.concat(" Required");
}
function Showeeror(error_id, string) {
    document.getElementById(error_id).style.display = "inline";
    document.getElementById(error_id).innerHTML = "Invalid".concat(" ", string);
}
function Hideerror(error_id) {
    document.getElementById(error_id).style.display = "none";
}
function SubmitFun(event) {
    if (name_error == true && email_error == true && role_error == true) {
        alert("Submitted Successfully!");
    }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Submitting");
    }
}

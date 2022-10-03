document.getElementById("contactState").onchange=function(event){value()};
function value(event){
    var x=document.getElementById("contactState").value;
    console.log(x);
    var promo=x.concat('-PROMO');
    console.log(promo);
    document.getElementById("contactPromotionCode").value=promo;
}

document.getElementById("male").onclick=function(){alert("Hello Sir!");};
document.getElementById("female").onclick=function(){alert("Hello Madam!");};

var flag=0;
var req_check=document.forms['contactform'].getElementsByClassName("mandatoryField").length;
console.log(req_check);
var i=0;
function validate(input,reg){
    var input_value=input.value;
    if(!reg.test(input_value))
    {
       document.getElementsByClassName('val_error')[i].style.display="inline";
       document.getElementById('error').style.display="block";
       flag=1;
    }
    else{
       document.getElementsByClassName('val_error')[i].style.display="none";
       document.getElementById('error').style.display="none";
       flag=0;
       i=i+1;
    }
    return i;
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
        flag=1;
     }
     else{
        document.getElementById('email_error').style.display="none";
        document.getElementById('error').style.display="none";
        flag=0;
     }
   
}

function validateWebAddr(input){
    var webAddr=input.value;
    var webAddr_reg=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(!webAddr_reg.test(webAddr))
     {
        document.getElementById('web_error').style.display="inline";
        document.getElementById('error').style.display="block";
        flag=1;
     }
     else{
        document.getElementById('web_error').style.display="none";
        document.getElementById('error').style.display="none";
        flag=0;
     }
}*/

document.getElementById("submit").onclick=function(event){
   console.log(req_check);
   console.log(i); 
   if(flag==1 || req_check!=i){
    event.preventDefault();
    alert("Please Fill All The Required Details Before Sending Message!");
    }
    else{
    alert("Message Sent Successfully!");
    }
}

function clearForm(event) {
   
   var ans=confirm("Are you sure?");
	var inputFields = document.getElementsByClassName("input_textbox");
	if(ans){
   for(let j=0; i<inputFields.length; i++){
		   if(inputFields[j].value != "")
		   {
			   inputFields[j].value = "";
		   }
      }
      flag=0;
      i=0;
   }
   else{
      event.preventDefault();
   }
   return i,flag;
}
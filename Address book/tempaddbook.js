var contactObj={};
var addressBook=[{"contact_name_field":"Naruto","contact_email_field":"naruto@gmail.com","contact_mobile_field":'7207847867',"contact_landline_field":"0409999999","contact_website_field":"www.konoha.com","contact_address_field":"KONOHA"}];
$(document).ready(function(){
    $("#add_btn").click(Add_book);
    $('#address_book_form').keyup(inputsValidation);
    showAddressBook();
});
var name_error=false;
var email_error=false;
var phone_error=false;
var landline_error=false;
var website_error=false;
var address_error=false;
/*function initial()
{
    var defaultObj={"contact_name_field":"Naruto","contact_email_field":"naruto@gmail.com","contact_mobile_field":'7207847867',"contact_landline_field":"0409999999","contact_website_field":"www.konoha.com","contact_address_field":"KONOHA"};
    addressBook.push(defaultObj);
    sessionStorage['addbook']=JSON.stringify(addressBook);
}*/
function inputsValidation(input)
{
   var alphabets=/[^a-zA-Z\s]/gi;
   var name_reg=/^[a-zA-Z\s]*$/;
   var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var phone_reg=/^\+?[1-9][0-9]{9,14}$/;
   var landline_reg=/\d{5}([- ]*)\d{6}/ 
   var digits=/[^0-9]/gi;
   var website_reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   
   switch(input.target.id)
   {
      case 'contact_name_field':
        {
        if(input.target.value=="")
	    {
	         $('#contact_name_error').show();
	        $('#contact_name_error').text('Name Required');
	        name_error=false;
	    }
	    else if(!name_reg.test(input.target.value))
	    {
	        $('#contact_name_error').show();
	        $('#contact_name_error').text('Name must contain only alphabets');
	        input.target.value=input.target.value.replace(alphabets,"");
	        name_error=false;
	    }
	    else{
		    $('#contact_name_error').hide();
		    name_error=true;
	    }
        break;	
    }
      case 'contact_email_field':
            {
               if(input.target.value=="")
               {
                  $('#contact_email_error').show();
                  $('#contact_email_error').text('Email Required');
                  email_error=false;
               }
                else if(!email_reg.test(input.target.value)){
                  $('#contact_email_error').show();
                  $('#contact_email_error').text('Invalid Email');
                  email_error=false;
                }
                else{
                  $('#contact_email_error').hide();
                  email_error=true;
                }
				break;
			}
      case 'contact_mobile_field':
        {
            if(input.target.value=="")
            {
             $('#contact_mobile_error').show();
             $('#contact_mobile_error').text('Mobile Number Required');
             phone_error=false;
            }
            else if(!phone_reg.test(input.target.value))
            {
            $('#contact_mobile_error').show();
            $('#contact_mobile_error').text('Must contain upto 10-14 digits');
            input.target.value=input.target.value.replace(digits,"");
            phone_error=false;
            }
            else{
                $('#contact_mobile_error').hide();
                phone_error=true;
            }
            break;
        }		
      case 'contact_website_field':
	  {
                  if(input.target.value=="")
               {
                  $('#contact_website_error').show();
                  $('#contact_website_error').text('Web Address Required');
                  website_error=false;
               }
                  else if(!website_reg.test(input.target.value)){
                     $('#contact_website_error').show();
                     $('#contact_website_error').text('Invalid Web Address');
                     website_error=false;
               }
                  else{
                  $('#contact_website_error').hide();
                  website_error=true;
               }
                  break;
      }
      case 'contact_landline_field':
        {
            if(input.target.value=="")
            {
               $('#contact_landline_error').show();
               $('#contact_landline_error').text('Landline Number Required');
               landline_error=false;
            }
               else if(!landline_reg.test(input.target.value)){
                  $('#contact_landline_error').show();
                  $('#contact_landline_error').text('Must contain upto 9-11 digits');
                  input.target.value=input.target.value.replace(digits,"");
                  landline_error=false;
            }
               else{
               $('#contact_landline_error').hide();
               landline_error=true;
            }
               break;
        }
      case 'contact_address_field':
        {
            if(input.target.value=="")
            {
                $('#contact_address_error').show();
                $('#contact_address_error').text('Address Required');
                address_error=false;
            }
            else{
                $('#contact_address_error').hide();
                address_error=true;
            }
        }  
	}
}

function Add_book(event){
    event.preventDefault();
    
    if(name_error==true&&email_error==true&&website_error==true&&phone_error==true&&landline_error==true&&address_error==true)
    {
    var values=$("#address_book_form :input").serializeArray();
    for(let i=0;i<values.length;i++)
    {
        let key=values[i].name;
        contactObj[key]=values[i].value;
    }
    addressBook.push(contactObj);
    sessionStorage['addbook']=JSON.stringify(addressBook); 
    showAddressBook();
    clearForm();
    alert("Contact Added Successfully");
    }
    else{
        alert("Please Enter all details");
    }
}
function clearForm(){
    var formFields=$('.input_textbox');
    console.log(formFields);
    for(n in formFields)
    {
        formFields[n].value="";
    }
}
function showAddressBook(){
    var contact_preview=document.getElementById("contactPreview");
    if(sessionStorage['addbook'] === undefined){
        sessionStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(sessionStorage['addbook']);
        contact_preview.innerHTML="";
        for (let n in addressBook){
            var str = '<div class="contact_preview" id="contact_preview">'
                str+='<div><span class="name">'+addressBook[n].contact_name_field+'</span></div>'
                str+= '<div class="details">'
                str+= '<div><span class="email">'+addressBook[n].contact_email_field+'</span></div>'
                str+= '<div><span class="mobile">'+addressBook[n].contact_mobile_field+'</span></div>'
                str+='</div>'
                str+='</div>'
                contact_preview.innerHTML+=str;
        }
    }
}



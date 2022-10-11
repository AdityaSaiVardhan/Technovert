function appendFunc(){
    var state=$(":selected").val();
	if(state=="")
	{
		$(":input").eq(11).val("");
	}
	else{
		var promo=state.concat('-PROMO');
		$(":input").eq(11).val(promo);
	}
}

function gender(input){
	if(input.id=='male'){
		alert('Hello sir!');
	}
	else if(input.id=='female'){
		alert("Hello lady!");
	}
}

var name_error=false;
var email_error=false;
var org_error=false;
var webAddr_error=false;

function alphabetsOnly(input){
	var alphabets=/[^a-zA-Z\s]/gi;
	if(input.value=="")
	{
	 $('span:eq(2)').show();
	 $('span:eq(2)').html('Name Required');
     name_error=false;
    }
	else if(alphabets.test(input.value))
	{
	$('span:eq(2)').show();
	$('span:eq(2)').html('Name must contain only alphabets');
	input.value=input.value.replace(alphabets,"");
    name_error=false;
   }
	else{
		$('span:eq(2)').hide();
        name_error=true;
      }
}	

/*function alphabetsOnly(input)
{
	var alphabets=/[^a-zA-Z\s]/gi;
	var name_reg=/^[a-zA-Z\s]*$/;
	if(input.value=="")
	{
	 $('span:eq(2)').show();
	 $('span:eq(2)').html('Name Required');
	 name_error=false;
	}
	else if(!name_reg.test(input.value))
	{
	$('span:eq(2)').show();
	$('span:eq(2)').html('Name must contain only alphabets');
	input.value=input.value.replace(alphabets,"");
	name_error=false;
	}
	else{
		$('span:eq(2)').hide();
		name_error=true;
	   }	
}
*/
function validate(input)
{
   var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var org_reg=/^[a-zA-Z\s]*$/;
   var webAddr_reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   
   switch(input.id)
   {
      case 'contact_email':
            {
               if(input.value=="")
               {
                  $('span:eq(4)').show();
                  $('span:eq(4)').html('Email Required');
                  email_error=false;
               }
                else if(!email_reg.test(input.value)){
                  $('span:eq(4)').show();
                  $('span:eq(4)').html('Invalid Email');
                  email_error=false;
                }
                else{
                  $('span:eq(4)').hide();
                  email_error=true;
                }
             break;
         }
      case 'contact_org':
	  {
                  if(input.value=="")
                     {
                        $('span:eq(7)').show();
                        $('span:eq(7)').html('Org Name Required');
                        org_error=false;
                     }
                     else if(!org_reg.test(input.value)){
                        $('span:eq(7)').show();
                        $('span:eq(7)').html('Invalid Org Name');
                        org_error=false;
                     }
                     else{
                        $('span:eq(7)').hide();
                        org_error=true;
                        }
                     break;
	  }
      case 'contact_webAddr':
	  {
                  if(input.value=="")
               {
                  $('span:eq(9)').show();
                  $('span:eq(9)').html('Web Address Required');
                  webAddr_error=false;
               }
                  else if(!webAddr_reg.test(input.value)){
                     $('span:eq(9)').show();
                     $('span:eq(9)').html('Invalid Web Address');
                     webAddr_error=false;
               }
                  else{
                  $('span:eq(9)').hide();
                  webAddr_error=true;
               }
                  break;
      }  
	}
}

function numberOnly(input)
{
   var digits=/[^0-9]/gi;
   var phone_reg=/^\+?[1-9][0-9]{9,14}$/;
	if(input.value=="")
	{
	 $('span:eq(5)').show();
	 $('span:eq(5)').html('Number Required');
	}
	else if(!phone_reg.test(input.value))
	{
	$('span:eq(5)').show();
	$('span:eq(5)').html('Must contain upto 10-14 digits');
	input.value=input.value.replace(digits,"");
	}
	else{
		$('span:eq(5)').hide();
   }
}
   function submitFun(event){ 
   if(name_error==true&&email_error==true&&org_error==true&&webAddr_error==true){
      alert("Message Sent Successfully!");
    }
    else{
      event.preventDefault();
      alert("Please Fill All The Required(*) Details Before Sending Message!");
    }
}

function clearForm(event) {  
   var ans=confirm("Are you sure?");
	var inputFields = $(".input_textbox").val();
	if(ans){
   for(let j=0; counter<inputFields.length; counter++){
		   if(inputFields[j].value != "")
		   {
			   inputFields[j].value = "";
		   }
      }
    name_error=false;
    email_error=false;
    org_error=false;
    webAddr_error=false;
      alert('Form has been cleared.');
   }
   else{
      event.preventDefault();
   }
}
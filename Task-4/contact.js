
$('#contact_state').change(function(input){
	if(input.target.value=="")
	{
		$("#contactPromotionCode").val("");
	}
	else{
		var promo=input.target.value.concat('-PROMO');
		$("#contactPromotionCode").val(promo);
	}
});

$('#male,#female').click(function gender(input){
	if(input.target.id=='male'){
		alert('Hello sir!');
	}
	else if(input.target.id=='female'){
		alert("Hello lady!");
	}
});

var name_error=false;
var email_error=false;
var org_error=false;
var webAddr_error=false;

/*function alphabetsOnly(input){
	var alphabets=/[^a-zA-Z\s]/gi;
	if(input.target.value=="")
	{
	 $('#contact_name_error').show();
	 $('#contact_name_error').html('Name Required');
    validation_flag=0;
    if(counter<=0){
      counter=0;
      }
      else{
      counter=counter;
      }
	}
	else if(alphabets.test(input.target.value))
	{
	$('#contact_name_error').show();
	$('#contact_name_error').html('Name must contain only alphabets');
	input.target.value=input.target.value.replace(alphabets,"");
   validation_flag=0;
      if(counter<=0){
      counter=0;
      }
      else{
      counter=counter;
      }
   }
	else{
		$('#contact_name_error').hide();
      validation_flag=1;
      if(counter>=req_check){
         counter=req_check;
      }
      else{
         counter++;
      }
	   }	
}*/
$('#contact_name').keyup(function(input)
{
	var alphabets=/[^a-zA-Z\s]/gi;
	var name_reg=/^[a-zA-Z\s]*$/;
	if(input.target.value=="")
	{
	 $('#contact_name_error').show();
	 $('#contact_name_error').html('Name Required');
	 name_error=false;
	}
	else if(!name_reg.test(input.target.value))
	{
	$('#contact_name_error').show();
	$('#contact_name_error').html('Name must contain only alphabets');
	input.target.value=input.target.value.replace(alphabets,"");
	name_error=false;
	}
	else{
		$('#contact_name_error').hide();
		name_error=true;
	   }	
});

$('#contactform').keyup(function(input)
{
   var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var org_reg=/^[a-zA-Z\s]*$/;
   var webAddr_reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   
   switch(input.target.id)
   {
      case 'contact_email':
            {
               if(input.target.value=="")
               {
                  $('#contact_email_error').show();
                  $('#contact_email_error').html('Email Required');
                  email_error=false;
               }
                else if(!email_reg.test(input.target.value)){
                  $('#contact_email_error').show();
                  $('#contact_email_error').html('Invalid Email');
                  email_error=false;
                }
                else{
                  $('#contact_email_error').hide();
                  email_error=true;
                }
             break;
         }
      case 'contact_org':
	  {
                  if(input.target.value=="")
                     {
                        $('#contact_org_error').show();
                        $('#contact_org_error').html('Org Name Required');
                        org_error=false;
                     }
                     else if(!org_reg.test(input.target.value)){
                        $('#contact_org_error').show();
                        $('#contact_org_error').html('Invalid Org Name');
                        org_error=false;
                     }
                     else{
                        $('#contact_org_error').hide();
                        org_error=true;
                        }
                     break;
	  }
      case 'contact_webAddr':
	  {
                  if(input.target.value=="")
               {
                  $('#contact_webAddr_error').show();
                  $('#contact_webAddr_error').html('Web Address Required');
                  webAddr_error=false;
               }
                  else if(!webAddr_reg.test(input.target.value)){
                     $('#contact_webAddr_error').show();
                     $('#contact_webAddr_error').html('Invalid Web Address');
                     webAddr_error=false;
               }
                  else{
                  $('#contact_webAddr_error').hide();
                  webAddr_error=true;
               }
                  break;
      }  
	}
});

$('#contact_phoneNumber').keyup(function(input)
{
   var digits=/[^0-9]/gi;
   var phone_reg=/^\+?[1-9][0-9]{9,14}$/;
	if(input.target.value=="")
	{
	 $('#contact_phoneNumber_error').show();
	 $('#contact_phoneNumber_error').html('Number Required');
	}
	else if(!phone_reg.test(input.target.value))
	{
	$('#contact_phoneNumber_error').show();
	$('#contact_phoneNumber_error').html('Must contain upto 10-14 digits');
	input.target.value=input.target.value.replace(digits,"");
	}
	else{
		$('#contact_phoneNumber_error').hide();
   }
});

$('#submit').click(function(event){
   if(name_error==true&&email_error==true&&webAddr_error==true&&org_error==true){
       alert("Submitted Successfully!");
       }
   else {
       event.preventDefault();
       alert("Please Fill All The Required Details Before Submitting");
       }
})

$('#reset').click(function(event) {  
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
   }
   else{
      event.preventDefault();
   }
});

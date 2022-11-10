var name_error:boolean=false;
var email_error:boolean=false;
var role_error:boolean=false;

$('#career_name_field').on("keyup",function(input:JQuery.KeyUpEvent){
	var alphabets:RegExp=/[^a-zA-Z\s]/gi;
	var name_reg:RegExp=/^[a-zA-Z\s]*$/;
	if(input.target.value=="")
	{
	 $('#career_name_error').show();
	 $('#career_name_error').text('Name Required');
	 name_error=false;
	}
	else if(!name_reg.test(input.target.value))
	{
	$('#career_name_error').show();
	$('#career_name_error').text('Name must contain only alphabets');
	input.target.value=input.target.value.replace(alphabets,"");
	name_error=false;
	}
	else{
		$('#career_name_error').hide();
		name_error=true;
	}	
});

$('#careerForm').on("keyup",function(input:JQuery.KeyUpEvent){
	var email_reg:RegExp=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var role_reg:RegExp=/^[a-zA-Z\s]*$/;
	switch(input.target.id)
	{
		case 'career_email_field':
		{
			if(input.target.value=="")
			{
				$('#career_email_error').show();
				$('#career_email_error').text('Email Required');
				email_error=false;
			}
	 		else if(!email_reg.test(input.target.value)){
				$('#career_email_error').show();
				$('#career_email_error').text('Invalid Email');
				email_error=false;
	 		}
	 		else{
				$('#career_email_error').hide();
				email_error=true;
	 		}
			break;
		}
	case 'career_role_field':
		{
			if(input.target.value=="")
			{
				$('#career_role_error').show();
				$('#career_role_error').text('Role Required');
				role_error=false;
			}
		 	else if(!role_reg.test(input.target.value)){
				$('#career_role_error').show();
				$('#career_role_error').text('Invalid Role');
				role_error=false;
		 	}
		 	else{
				$('#career_role_error').hide();
				role_error=true;
		 	}
			break;
		}
	}		
});
$('#files').on("keyup",function(){
    var file_name:any=$('#files').val();
    $('#filename').val(file_name.split('fakepath\\')[1]);
});

$('#submit').on("click",function(event:JQuery.ClickEvent){
    if(name_error==true&&email_error==true&&role_error==true){
        alert("Submitted Successfully!");
        }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Submitting");
        }
});
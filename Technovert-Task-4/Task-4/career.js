var name_error=false;
var email_error=false;
var role_error=false;

$('#career_name_field').keyup(function(input){
	var alphabets=/[^a-zA-Z\s]/gi;
	var name_reg=/^[a-zA-Z\s]*$/;
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

$('#careerForm').keyup(function(input){
	var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var role_reg=/^[a-zA-Z\s]*$/;
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
$('#files').change(function(a){
    var file_name=$('#files').val();
    $('#filename').val(file_name.split('fakepath\\')[1]);
});

$('#submit').click(function(event){
    if(name_error==true&&email_error==true&&role_error==true){
        alert("Submitted Successfully!");
        }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Submitting");
        }
});
$(document).ready(function(){
	$('form').keyup(function(){
		form_validation(this);
	});
});

var name_error=false;
var email_error=false;
var role_error=false;

function alphabetsOnly(input){
	var alphabets=/[^a-zA-Z\s]/gi;
	var name_reg=/^[a-zA-Z\s]*$/;
	if(input.value=="")
	{
	 $('span:eq(1)').show();
	 $('span:eq(1)').html('Name Required');
	 name_error=false;
	}
	else if(!name_reg.test(input.value))
	{
	$('span:eq(1)').show();
	$('span:eq(1)').html('Name must contain only alphabets');
	input.value=input.value.replace(alphabets,"");
	name_error=false;
	}
	else{
		$('span:eq(1)').hide();
		name_error=true;
	   }	
}

function form_validation(input){
	var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{1,4})$/;
	var role_reg=/^[a-zA-Z\s]*$/;
	switch(input.id)
	{
		case 'career_email':
		{
			if(input.value=="")
			{
				$('span:eq(3)').show();
				$('span:eq(3)').html('Email Required');
				email_error=false;
			}
	 		else if(!email_reg.test(input.value)){
				$('span:eq(3)').show();
				$('span:eq(3)').html('Invalid Email');
				email_error=false;
	 		}
	 		else{
				$('span:eq(3)').hide();
				email_error=true;
	 		}
	 	break;
	}
	case 'career_role':
		{
			if(input.value=="")
			{
				$('span:eq(5)').show();
				$('span:eq(5)').html('Role Required');
				role_error=false;
			}
		 	else if(!role_reg.test(input.value)){
				$('span:eq(5)').show();
				$('span:eq(5)').html('Invalid Role');
				role_error=false;
		 	}
		 	else{
				$('span:eq(5)').hide();
				role_error=true;
		 	}
		 break;
		}
	}
}

$(':input:eq(4)').change(function(a){
    var file_name=$('#files').val();
	console.log(a.value);
    $(':input:eq(3)').val(file_name.split('fakepath\\')[1]);
});

$('button').click(function(event){
    if(name_error==true&&email_error==true&&role_error==true){
        alert("Submitted Successfully!");
    }
    else {
        event.preventDefault();
        alert("Please Fill All The Required Details Before Submitting");
    }
})
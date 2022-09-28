function validateName()
{ 
	 var name=document.getElementById('career_Name');
	 var letters = /^[a-zA-Z\s]*$/;
     if(name.value=="")
	 {
		 alert('Please Enter Your Name')
		 return false;
	 }
	 else if(!name.value.match(letters))
     {
      alert('Invalid Name');
      return false;
     }
}
function validateMail()
{
	 var mail=document.getElementById('career_Email');
	 var reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
	 if(mail.value=="")
	 {
		 alert('Please Enter Your E-mail')
		 return false;
	 }
	 else if(!mail.value.match(reg))
      {
		alert('Invalid E-mail');
		return false;
      }
}
function validateRole()
{
	var role=document.getElementById('career_role');
	var letters = /^[a-zA-Z\s]*$/;
    if(role.value=="")
	{
		alert('Please Enter Your Desired Role')
		return false;
	}	if(!role.value.match(letters))
	{
		alert('Job Role Does Not Exist');
		return false;
	}
}
	
	function browseFun() {
	var file_name=document.getElementById("files").value;
	var splits=file_name.split('fakepath\\');
	document.getElementById("filename").value=splits[1];
	}
	
	var req_check=document.forms['careerForm'].getElementsByClassName("mandatoryField").length;
	console.log(req_check);
	var validation_flag=0;
	var counter=0;
	
	function validate(input)
	{
		var name_reg=/^[a-zA-Z\s]*$/;
		var email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var role_reg=/^[a-zA-Z\s]*$/;
		switch(input.id)
		{
			case 'career_name':
			{
				let name=input.id.concat('_error');
							if(input.value=="")
							{
								showEmptyMsg(name,'Name');
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter;
								   }	
							}
							 else if(!name_reg.test(input.value)){
								showError(name,'Name');
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter;
								   }
							 }
							 else{
								hideError(name);
								validation_flag=1;
								if(counter>=req_check){
										counter=req_check;
									}
									else{
										counter++;
									}
							 }
						 break;
			}
			case 'career_email':
			{
				let email=input.id.concat('_error');
							if(input.value=="")
							{
								showEmptyMsg(email,'Email');
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter;
								   }
							}
							else if(!email_reg.test(input.value)){
							   showError(email,'Email');
							   validation_flag=0;
							   if(counter<=0){
								counter=0;
							   }
							   else{
								counter=counter;
							   }
							}
							else{
								hideError(email);
								validation_flag=1;
								if(counter>=req_check){
										counter=req_check;
									}
									else{
										counter++;
									}
							}
							break;
			}
			case 'career_role':
			{
				let role=input.id.concat('_error');
								if(input.value=="")
								{
									showEmptyMsg(role,'Role');
									validation_flag=0;
									if(counter<=0){
										counter=0;
									   }
									   else{
										counter=counter;
									   }
								}
								else if(!role_reg.test(input.value)){
			   						showError(role,'Role');
									validation_flag=0;
									if(counter<=0){
										counter=0;
									   }
									   else{
										counter=counter;
									   }
								}
								else{
									hideError(role);
									validation_flag=1;
									if(counter>=req_check){
										counter=req_check;
									}
									else{
										if(counter>=req_check){
										counter=req_check;
									}
									else{
										counter++;
									}
									}
								}
								break;
			}
		}	
	}
function showEmptyMsg(error_id,string)
{
   document.getElementById(error_id).style.display="inline";
   document.getElementById(error_id).innerHTML=string.concat(" Required");

}
function showError(error_id,string){
   document.getElementById(error_id).style.display="inline";
   document.getElementById(error_id).innerHTML="Invalid".concat(" ",string);  
}
function hideError(error_id){
   document.getElementById(error_id).style.display="none";
}
	function submitFun(event){
		console.log(req_check);
   		console.log(counter); 
		if(validation_flag==0||req_check!=counter){
		event.preventDefault();
		alert("Please Fill All The Required Details Before Submitting");
		}
		if(validation_flag==1&&req_check==counter){
		alert("Submitted Successfully!");
		}
	}
	
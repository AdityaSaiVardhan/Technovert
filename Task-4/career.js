	function browseFun() {
	var x=document.getElementById("files").value;
	var splits=x.split('fakepath\\');
	document.getElementById("filename").value=splits[1];
	}
	
	var req_check=document.forms['careerForm'].getElementsByClassName("mandatoryField").length;
	console.log(req_check);
	var validation_flag=0;
	var counter=0;
	
	function validate(input)
	{
		var name_reg=/^[a-zA-Z\s]*$/;
		var email_reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
		var role_reg=/^[a-zA-Z\s]*$/;
		switch(input.id){
			case 'career_name':  let name=input.id.concat('_error');
							if(input.value=="")
							{
								emptyMsg(name);
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter-1;
								   }	
							}
							 else if(!name_reg.test(input.value)){
								printError(name,'Name');
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter-1;
								   }
							 }
							 else{
								removeError(name);
								validation_flag=1;
								if(counter>=req_check){
										counter=req_check;
									}
									else{
										counter++;
									}
							 }
						 break;
			case 'career_email':let email=input.id.concat('_error');
							if(input.value=="")
							{
								emptyMsg(email);
								validation_flag=0;
								if(counter<=0){
									counter=0;
								   }
								   else{
									counter=counter-1;
								   }
							}
							else if(!email_reg.test(input.value)){
							   printError(email,'Email');
							   validation_flag=0;
							   if(counter<=0){
								counter=0;
							   }
							   else{
								counter=counter-1;
							   }
							}
							else{
								removeError(email);
								validation_flag=1;
								if(counter>=req_check){
										counter=req_check;
									}
									else{
										counter++;
									}
							}
							break;
			case 'career_role':let role=input.id.concat('_error');
								if(input.value=="")
								{
									emptyMsg(role);
									validation_flag=0;
									if(counter<=0){
										counter=0;
									   }
									   else{
										counter=counter-1;
									   }
								}
								else if(!role_reg.test(input.value)){
			   						printError(role,'Role');
									validation_flag=0;
									if(counter<=0){
										counter=0;
									   }
									   else{
										counter=counter-1;
									   }
								}
								else{
									removeError(role);
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
	function emptyMsg(x)
	{
		document.getElementById(x).style.display="inline";
		document.getElementById(x).innerHTML="Cant be empty";
	}
	function printError(x,y){
		document.getElementById(x).style.display="inline";
		document.getElementById(x).innerHTML=y.concat(" required");
	}
	function removeError(x){
		document.getElementById(x).style.display="none";
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
	
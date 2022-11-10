function browsefun() {
	var file_name=(<HTMLInputElement>document.getElementById("files")).value;
	var splits=file_name.split('fakepath\\');
	(<HTMLInputElement>document.getElementById("filename")).value=splits[1];
	}
	var req_check=document.querySelectorAll('.mandatoryfield').length;
	var name_error=false;
	var email_error=false;
	var role_error=false;
	
	function validateInputs(input:any)
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
								showEmptymsg(name,'Name');
								name_error=false;
							}
							 else if(!name_reg.test(input.value)){
								Showerror(name,'Name');
								name_error=false;
							 }
							 else{
								Hideerror(name);
								name_error=true;
							 }
						 break;
			}
			case 'career_email':
			{
				let email=input.id.concat('_error');
							if(input.value=="")
							{
								showEmptymsg(email,'Email');
								email_error=false;
							}
							else if(!email_reg.test(input.value)){
							   Showerror(email,'Email');
								email_error=false;
							}
							else{
								Hideerror(email);
								email_error=true;
							}
							break;
			}
			case 'career_role':
			{
				let role=input.id.concat('_error');
								if(input.value=="")
								{
									showEmptymsg(role,'Role');
									role_error=false;

								}
								else if(!role_reg.test(input.value)){
			   						Showerror(role,'Role');
									role_error=false;
								}
								else{
									Hideerror(role);
									role_error=true;
								}
								break;
			}
		}	
	}
function showEmptymsg(error_id:any,string:string)
{
	(<HTMLDivElement>document.getElementById(error_id)).style.display="inline";
   (<HTMLDivElement>document.getElementById(error_id)).innerHTML=string.concat(" Required");

}
function Showerror(error_id:any,string:string){
   (<HTMLDivElement>document.getElementById(error_id)).style.display="inline";
   (<HTMLDivElement>document.getElementById(error_id)).innerHTML="Invalid".concat(" ",string);  
}
function Hideerror(error_id:any){
   (<HTMLDivElement>document.getElementById(error_id)).style.display="none";
}
	function SubmitFun(event:any){
		if(name_error==true&&email_error==true&&role_error==true){
			alert("Submitted Successfully!");
			}
		else {
			event.preventDefault();
			alert("Please Fill All The Required Details Before Submitting");
			}
	}
	
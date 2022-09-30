document.getElementById("files").onchange=function(event){value()};
	function value(event) {
	var x=document.getElementById("files").value;
	console.log(x);
	var splits=x.split('fakepath\\');
	console.log(splits[1]);
	document.getElementById("filename").value=splits[1];
	}
	
	function validation()
	{
		var name=document.getElementById("career_Name").value;
		var email=document.getElementById("career_Email").value;
		var role=document.getElementById('career_role').value;
		var name_reg = /^[a-zA-Z\s]*$/;
		var email_reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
		var role_reg=/^[a-zA-Z\s]*$/;
		if(name==""){
			document.getElementById('error0').style.display="inline";
			return false;
		}
	   if(!name_reg.test(name))
		 {
			document.getElementById('error0').style.display="inline";
			return false;
		 }
		 else{
			document.getElementById('error0').style.display="none";
		 }
	
		 if(email==""){
			document.getElementById('error1').style.display="inline";
			return false;
		}
		if(!email_reg.test(email))
		 {
			document.getElementById('error1').style.display="inline";
			return false;
		 }
		 else{
			document.getElementById('error1').style.display="none";
		 }
		 if(role==""){
			document.getElementById('error2').style.display="inline";
			return false;
		 }
		 if(!role_reg.test(role))
		 {
			document.getElementById('error2').style.display="inline";
			return false;
		 }
		 else{
			document.getElementById('error2').style.display="none";
		 }
		 window.alert("Submitted Successfully!");
	
	}

	
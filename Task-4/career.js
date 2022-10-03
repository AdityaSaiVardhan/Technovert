document.getElementById("files").onchange=function(event){value()};
	function value(event) {
	var x=document.getElementById("files").value;
	console.log(x);
	var splits=x.split('fakepath\\');
	console.log(splits[1]);
	document.getElementById("filename").value=splits[1];
	}
	
	var req_check=document.forms['careerForm'].getElementsByClassName("mandatoryField").length;
	console.log(req_check);
	var flag=0;
	var i=0;
	function validate(input,reg)
	{
		var input_value=input.value
	   if(!reg.test(input_value))
		 {
			document.getElementsByClassName('val_error')[i].style.display="inline";
			flag=1;
		 }
		 else{
			document.getElementsByClassName('val_error')[i].style.display="none";
			flag=0;
			i=i+1;
		}
		return i;
	}

	document.getElementById("submit").onclick=function(event){
		console.log(req_check);
   		console.log(i); 
		if(flag==1 || req_check!=i){
		event.preventDefault();
		alert("Please Fill All The Required Details Before Submitting");
		}
		else{
		alert("Submitted Successfully!");
		}
	}
	
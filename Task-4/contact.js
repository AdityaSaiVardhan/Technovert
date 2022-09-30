document.getElementById("contactState").onchange=function(event){value()};
function value(event){
    var x=document.getElementById("contactState").value;
    console.log(x);
    var promo=x.concat('-PROMO');
    console.log(promo);
    document.getElementById("contactPromotionCode").value=promo;
}
document.getElementById("male").onclick=function(){alert("Hello Sir!");};
document.getElementById("female").onclick=function(){alert("Hello Madam!");};

function validation()
{
    var name=document.getElementById("contactName").value;
    var email=document.getElementById("contactEmail").value;
    var org_name=document.getElementById("contactOrgName").value;
    var name_reg = /^[a-zA-Z\s]*$/;
    var email_reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    var org_reg=/^[a-zA-Z\s]*$/;
    if(name==""){
        document.getElementById('error').style.display="block";
        document.getElementById('error0').style.display="inline";
        return false;
    }
   if(!name_reg.test(name))
     {
        document.getElementById('error0').style.display="inline";
        document.getElementById('error').style.display="block";
        return false;
     }
     else{
        document.getElementById('error0').style.display="none";
        document.getElementById('error').style.display="none";
     }

     if(email==""){
        document.getElementById('error1').style.display="inline";
        document.getElementById('error').style.display="block";
        return false;
    }
    if(!email_reg.test(email))
     {
        document.getElementById('error1').style.display="inline";
        document.getElementById('error').style.display="block";
        return false;
     }
     else{
        document.getElementById('error1').style.display="none";
        document.getElementById('error').style.display="none";
     }
     if(org_name==""){
        document.getElementById('error2').style.display="inline";
        document.getElementById('error').style.display="block";
        return false;
    }
   if(!org_reg.test(org_name))
     {
        document.getElementById('error2').style.display="inline";
        document.getElementById('error').style.display="block";
        return false;
     }
     else{
        document.getElementById('error2').style.display="none";
        document.getElementById('error').style.display="none";
     }
     window.alert("Sent Message Successfully!")
}
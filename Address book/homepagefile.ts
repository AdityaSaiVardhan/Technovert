//type ob={
  //  [key: string]:string;
//};
var addressBook:obj_created[]=[{"contact_name_field":"Naruto","contact_email_field":"naruto@gmail.com","contact_mobile_field":'7207847867',"contact_landline_field":"0409999999","contact_website_field":"www.konoha.com","contact_address_field":"KONOHA"}];
var contact:obj_created={"contact_name_field":"", 
"contact_email_field": "", 
"contact_mobile_field":"", 
"contact_landline_field":"",
"contact_website_field":"", 
"contact_address_field":""};
$(window).on("load",function():void{
    showaddressbook();
    $('#address_book_form').on("keyup",inputsValidations);
    $('#update_btn').on("click",updateFunc);
})

var name_error:boolean=true;
var email_error:boolean=true;
var phone_error:boolean=true;
var landline_error:boolean=true;
var website_error:boolean=true;
var address_error:boolean=true;
function inputsValidations(input:JQuery.KeyUpEvent):void
{
   var alphabets:RegExp=/[^a-zA-Z\s]/gi;
   var name_reg:RegExp=/^[a-zA-Z\s]*$/;
   var email_reg:RegExp=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var phone_reg:RegExp=/^\+?[1-9][0-9]{9,14}$/;
   var landline_reg:RegExp=/\d{5}([- ]*)\d{6}/ 
   var digits:RegExp=/[^0-9]/gi;
   var website_reg:RegExp=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   
   switch(input.target.id)
   {
      case 'contact_name_field':
        {
        if(input.target.value=="")
	    {
	         $('#contact_name_error').show();
	        $('#contact_name_error').text('Name Required');
	        name_error=false;
	    }
	    else if(!name_reg.test(input.target.value))
	    {
	        $('#contact_name_error').show();
	        $('#contact_name_error').text('Name must contain only alphabets');
	        input.target.value=input.target.value.replace(alphabets,"");
	        name_error=false;
	    }
	    else{
		    $('#contact_name_error').hide();
		    name_error=true;
	    }
        break;	
    }
      case 'contact_email_field':
            {
               if(input.target.value=="")
               {
                  $('#contact_email_error').show();
                  $('#contact_email_error').text('Email Required');
                  email_error=false;
               }
                else if(!email_reg.test(input.target.value)){
                  $('#contact_email_error').show();
                  $('#contact_email_error').text('Invalid Email');
                  email_error=false;
                }
                else{
                  $('#contact_email_error').hide();
                  email_error=true;
                }
				break;
			}
      case 'contact_mobile_field':
        {
            if(input.target.value=="")
            {
             $('#contact_mobile_error').show();
             $('#contact_mobile_error').text('Mobile Number Required');
             phone_error=false;
            }
            else if(!phone_reg.test(input.target.value))
            {
            $('#contact_mobile_error').show();
            $('#contact_mobile_error').text('Must contain upto 10-14 digits');
            input.target.value=input.target.value.replace(digits,"");
            phone_error=false;
            }
            else{
                $('#contact_mobile_error').hide();
                phone_error=true;
            }
            break;
        }		
      case 'contact_website_field':
	  {
                  if(input.target.value=="")
               {
                  $('#contact_website_error').show();
                  $('#contact_website_error').text('Web Address Required');
                  website_error=false;
               }
                  else if(!website_reg.test(input.target.value)){
                     $('#contact_website_error').show();
                     $('#contact_website_error').text('Invalid Web Address');
                     website_error=false;
               }
                  else{
                  $('#contact_website_error').hide();
                  website_error=true;
               }
                  break;
      }
      case 'contact_landline_field':
        {
            if(input.target.value=="")
            {
               $('#contact_landline_error').show();
               $('#contact_landline_error').text('Landline Number Required');
               landline_error=false;
            }
               else if(!landline_reg.test(input.target.value)){
                  $('#contact_landline_error').show();
                  $('#contact_landline_error').text('Must contain upto 9-11 digits');
                  input.target.value=input.target.value.replace(digits,"");
                  landline_error=false;
            }
               else{
               $('#contact_landline_error').hide();
               landline_error=true;
            }
               break;
        }
      case 'contact_address_field':
        {
            if(input.target.value=="")
            {
                $('#contact_address_error').show();
                $('#contact_address_error').text('Address Required');
                address_error=false;
            }
            else{
                $('#contact_address_error').hide();
                address_error=true;
            }
        }  
	}
}

function showaddressbook():void{
    var contact_preview:HTMLElement=(<HTMLElement>document.getElementById('contactPreview'));
    if(sessionStorage['addbook'] === undefined){
        sessionStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(sessionStorage['addbook']);
        contact_preview.innerHTML="";
        for (let n in addressBook){
            var str = '<div class="contact_preview" id="'+n+'">'
                str+='<div><span class="name">'+addressBook[n].contact_name_field+'</span></div>'
                str+= '<div class="details">'
                str+= '<div><span class="email">'+addressBook[n].contact_email_field+'</span></div>'
                str+= '<div><span class="mobile">'+addressBook[n].contact_mobile_field+'</span></div>'
                str+='</div>'
                str+='</div>'
                contact_preview.innerHTML+=str;
        }
    }
    if(addressBook.length==0)
    {
        $('#empty_directory').show();
         $('h4').hide();
    }
}

$("#contactPreview").on("click",".contact_preview",function():void{
    
	$(".contact_preview.active").removeClass("active");
	$(this).addClass("active");
    let id:any=$(this).attr("id");
    console.log(id);
    var temp=JSON.parse(sessionStorage.addbook)[id];
    $("#contact_name").html(temp.contact_name_field);
	$("#contact_email").html(temp.contact_email_field);
	$("#contact_mobile").html(temp.contact_mobile_field);
	$("#contact_landline").html(temp.contact_landline_field);
	$("#contact_website").html(temp.contact_website_field);
	$("#contact_address").html(temp.contact_address_field);
    $(".contact_details").css("visibility", "visible");
    $(".options").css("visibility", "visible");
})

$('#edit').on("click",function():void{
    if(addressBook.length!=0)
    {
    $('.options').hide();
    $('.contact_information_preview').hide();
    $('.address_book_form_field').show();
    editdetails();
    }
})
$('#cancel_btn').on("click",function():void{
    $('.options').show();
    $('.contact_information_preview').show();
    $('.address_book_form_field').hide();
})
$('#close_btn').on("click",function():void{
    $('.options').show();
    $('.contact_information_preview').show();
    $('.address_book_form_field').hide();
})
$('#delete').on("click",function():void{
    if(addressBook.length!=0)
    {
    var response:boolean=confirm("Are you sure you want to delete?");
    if(response){
	let id:any = $(".contact_preview.active")[0].getAttribute("id");
	$(".contact_preview.active")[0].remove();
    console.log(id);
    var y:JSON=JSON.parse(sessionStorage.addbook);
    addressBook.splice(id,1);
    sessionStorage['addbook']=JSON.stringify(addressBook);
    JSON.parse(sessionStorage.addbook);
    $(".contact_details").css("visibility","none");
    location.reload();
    }
}
});
function editdetails():void{
	let id:any = $(".contact_preview.active")[0].getAttribute("id");
	var values:JQuery<HTMLFormElement>=$("#address_book_form :input");
    console.log(values);
	let object:JSON = JSON.parse(sessionStorage.addbook)[id];
    console.log(object);
	let temp= Object.values(object);
	for(let i=0;i<temp.length;i++){
		values[i].value = temp[i];
}
}
function updateFunc():void{
    if(name_error==true&&email_error==true&&phone_error==true&&landline_error==true&&address_error==true)
    {
	let id:any= $(".contact_preview.active")[0].getAttribute("id");
	let values:any= $("#address_book_form :input").serializeArray();
	console.log(values);
    for(let i=0;i<values.length;i++){
		let key = values[i].name;
		contact[key] = values[i].value;
	}
    var temp:obj_created=contact;
	let t = $(".contact_preview.active");
	t.find(".name").html(contact.contact_name_field);
	t.find(".email").html(contact.contact_email_field);
	t.find(".mobile").html(contact.contact_mobile_field);
	$("#contact_name").html(temp.contact_name_field);
	$("#contact_email").html(temp.contact_email_field);
	$("#contact_mobile").html(temp.contact_mobile_field);
	$("#contact_landline").html(temp.contact_landline_field);
	$("#contact_website").html(temp.contact_website_field);
	$("#contact_address").html(temp.contact_address_field);
    $('.options').show();
    $('.address_book_form_field').hide();
    $('.contact_information_preview').show();
    addressBook.splice(id,1);
    addressBook.push(contact);
    sessionStorage['addbook']=JSON.stringify(addressBook);
    alert("Contact Updated Successfully");
    location.reload();
    }
    else{
        alert('Please fill all the details correctly')
    }

}
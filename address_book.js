var contactLayout = `<div class="contact_preview">
					<div><span class="name"></span></div>
					<div class="details">
					<div><span class="email"></span></div>
					<div><span class="mobile"></span></div>
					</div>
					</div>`;
var contactObj={};
var uniqueId = 0;
var contacts={};

$("document").ready(function(){
	 $("#add_btn").click(function(event){
		event.preventDefault();
		var values=$("#address_book_form :input").serializeArray();
		for(let i=0;i<values.length;i++)
		{
			let key=values[i].name;
			contactObj[key]=values[i].value;
		}
		let temp_element=$(contactLayout).appendTo("#address_book_information");
		temp_element.find(".name").html(contactObj.contact_name_field);
		temp_element.find(".email").html(contactObj.contact_email_field);
		temp_element.find(".mobile").html(contactObj.contact_mobile_field);
		let temp=temp_element[0];
		temp.setAttribute("id",++uniqueId);
		let id=uniqueId;
		console.log(id);
		contacts[uniqueId]=JSON.stringify(contactObj);
		clearForm();
	});
});

function clearForm()
{
	$('#contact_name_field').val("");
	$('#contact_email_field').val("");
	$('#contact_mobile_field').val("");
	$('#contact_landline_field').val("");
	$('#contact_website_field').val("");
	$('#contact_address_field').val("");
}
console.log(contacts);

export{contacts};

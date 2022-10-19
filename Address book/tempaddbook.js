var contactObj={};
var addressBook=[];
$(document).ready(function(){
    $("#add_btn").click(Add_book);
    showAddressBook();
});
function Add_book(event){
    event.preventDefault();
    var values=$("#address_book_form :input").serializeArray();
    for(let i=0;i<values.length;i++)
    {
        let key=values[i].name;
        contactObj[key]=values[i].value;
    }
    console.log(contactObj);
    addressBook.push(contactObj);
    sessionStorage['addbook']=JSON.stringify(addressBook); 
    showAddressBook();
    clearForm();
}
function clearForm(){
    var formFields=$('.input_textbox');
    console.log(formFields);
    for(n in formFields)
    {
        formFields[n].value="";
    }
}
function showAddressBook(){
    var contact_preview=document.getElementById("contact_preview");
    if(sessionStorage['addbook'] === undefined){
        sessionStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(sessionStorage['addbook']);
        contact_preview.innerHTML="";
        for (let n in addressBook){
            var str = '<div class="contact_preview" id="contact_preview">'
                str+='<div><span class="name">'+addressBook[n].contact_name_field+'</span></div>'
                str+= '<div class="details">'
                str+= '<div><span class="email">'+addressBook[n].contact_email_field+'</span></div>'
                str+= '<div><span class="mobile">'+addressBook[n].contact_mobile_field+'</span></div>'
                str+='</div>'
                str+='</div>'
                contact_preview.innerHTML+=str;
        }
    }
}



$(document).ready(function(){
    showAddressBook();
})
function showAddressBook(){
    var contact_preview=document.getElementById('contact_preview');
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

$('#edit').click(function(){
    console.log("edit");
    $('.contact_information_preview').hide();
    $('.address_book_form_field').show();
})
$('#cancel_btn').click(function(){
    $('.contact_information_preview').show();
    $('.address_book_form_field').hide();
})
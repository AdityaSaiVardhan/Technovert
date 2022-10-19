contactObj={}
addressBook=[];
$(document).ready(function(){
    $('#add_btn').click(function(event){
        var values=$("#address_book_form :input").serializeArray();
        for(let i=0;i<values.length;i++)
        {
            let key=values[i].name;
            contactObj[key]=values[i].value;
        }
        addressBook.push(contactObj);
        localStorage['addbook']=JSON.stringify(addressBook); 
        showAddressBook();
    });
});
function showAddressBook(){
    if(localStorage['addbook'] === undefined){
        localStorage['addbook'] ='';
    } else {
        addressBook = JSON.parse(localStorage['addbook']);
            $("#addbook_information").html("")
        for (let n in addressBook){
            var str = '<div class="contact_preview" id="contactPreview">'
                str+='<div><span class="name">'+addressBook[n].contact_name_field+'</span></div>'
                str+= '<div class="details">'
                str+= '<div><span class="email">'+addressBook[n].contact_email_field+'</span></div>'
                str+= '<div><span class="mobile">'+addressBook[n].contact_mobile_field+'</span></div>'
                str+='</div>'
                str+='</div>'
                $('#addbook_information').append(str);
        }
    }
}

showAddressBook();

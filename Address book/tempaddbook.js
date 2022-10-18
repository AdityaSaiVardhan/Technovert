var contactLayout = `<div class="contact_preview">
					<div><span class="name"></span></div>
					<div class="details">
					<div><span class="email"></span></div>
					<div><span class="mobile"></span></div>
					</div>
					</div>`;
var contactObj={};
var addressBook=[];
var contact_preview=document.getElementById("contact_preview");
$("#add_btn").click(function(event){
    event.preventDefault();
    var values=$("#address_book_form :input").serializeArray();
    for(let i=0;i<values.length;i++)
    {
        let key=values[i].name;
        contactObj[key]=values[i].value;
    }
    console.log(contactObj);
    addressBook.push(contactObj);
    localStorage['addbook']=JSON.stringify(addressBook); 
    showAddressBook();

});
function showAddressBook(){
    if(localStorage['addbook'] === undefined){
        localStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(localStorage['addbook']);
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
showAddressBook();

export function double(k){
    return k*2;
}
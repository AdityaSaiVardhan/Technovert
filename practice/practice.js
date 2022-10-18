var contact_preview=document.getElementById("contact_preview");
var c=$('#contact_preview');
var addressBook=[];
function jsonStructure(name1,email){
    this.name1 = name1;
    this.email = email;
}

$('#Add').click(function(){
    var name1=$('#name').val();
    var email=$('#email').val();
    var isNull = name1!='' && email!='';
    if(isNull){
        // format the input into a valid JSON structure
        var obj = new jsonStructure(name1,email);
        console.log(obj);
        addressBook.push(obj);
        console.log(typeof addressBook);
        localStorage['addbook'] = JSON.stringify(addressBook);
        clearForm();
        showAddressBook();
    }
});
function clearForm(){
    var formFields = document.querySelectorAll('.input');
    for(var i in formFields){
        formFields[i].value = "";
    }
}
function showAddressBook(){
    if(localStorage['addbook'] === undefined){
        localStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(localStorage['addbook']);
        // Loop over the array addressBook and insert into the page

        for(n in addressBook){
            var str = '<div class="contact_preview" id="contact_preview">'
                str+='<div><span class="name1">'+addressBook[n].name1+'</span></div>'
                str+= '<div class="details">'
                str+= '<div><span class="email1">'+addressBook[n].email+'</span></div>'
                str+='</div>'
                str+='</div>'
            contact_preview.innerHTML+=str;
                
            }
    }
}
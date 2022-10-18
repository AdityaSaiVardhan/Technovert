var contactLayout = `<div class="contact_preview">
					<div><span class="name1"></span></div>
					<div class="details">
					<div><span class="email1"></span></div>
					</div>
					</div>`;
var contactObj={}
var id=1;
var uniqueId=0;
$('#Add').click(function(){
var values=$("#form :input").serializeArray();
console.log(values);
for(let i=0;i<values.length;i++)
    {
        let key=values[i].name;
        contactObj[key]=values[i].value;
    }
    console.log(contactObj);
    localStorage.setItem("addbook"+id,JSON.stringify(contactObj));
    showBook();
    id++;
});
function showBook(){
    for(let i=1;i<=id;i++){
    var contact=JSON.parse(localStorage.getItem("addbook"+id));
    let temp_element=$(contactLayout).appendTo("#address_book_information");
    temp_element.find(".name1").html(contact.name);
    temp_element.find(".email1").html(contact.email);
    }
}
showBook();




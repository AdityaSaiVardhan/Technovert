const students=[];
var contactTileLayout = `<div class="contactTile">
					<div><span class="name"></span></div>
					<div class="details">
						<div><span class="email"></span></div>
						<div><span class="mobile"></span></div>
					</div>
				</div>`;

$('#Add').click(function(){
   var dataentered= retrieveData();
   var readData=readDatafromLS(dataentered);
   console.log(dataentered);
   console.log(readData);
})

function retrieveData(){
    let name=$('#name').val();
    let email=$('#email').val();
     let arr=[name,email];
    return (arr);
}

function readDatafromLS(dataentered){
    var n=localStorage.setItem('Name',dataentered[0]);
    var e=localStorage.setItem('Email',dataentered[1]);

    var n1=localStorage.getItem('Name',n);
    var e1=localStorage.getItem('Email',e);

    let arr=[n1,e1];
    return(arr);
}
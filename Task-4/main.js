var links= document.querySelectorAll(.navigation li);

links.forEach(li=>{
	li.addEventListener("click",()=>{
		resetLinks();
		li.classList.add("active");
	})
})

function resetLinks(){
	navigation.forEach(li=>{
		li.classList.remove("active");
	})
}
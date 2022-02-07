console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You submitted the form.");
	// console.log('form submit');
}

const compliment = (event) =>{
	event.preventDefault();

	alert("I see you're a person of culture as well.")
}


let form = document.querySelector('form#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
// img.addEventListener('mouseover', compliment);
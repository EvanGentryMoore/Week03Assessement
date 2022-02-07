let button = document.querySelectorAll("button");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', (event) => {
    alert(`My favorite ${event.target.id} is ${event.target.value}.`);
    })
}
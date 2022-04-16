const eventBtn = document.querySelector('#eventButton');

let alertFunction = () => alert('You just clicked the button!');

eventBtn.addEventListener('click', alertFunction);
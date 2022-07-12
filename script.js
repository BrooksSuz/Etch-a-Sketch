//create container
const container = document.getElementById('container'); 

//create grid
for (let i = 0; i < 256; i++) { 
  const div = document.createElement('div'); 
  container.appendChild(div); 
  div.classList.add('etch'); 
} 

//select each individual grid
const etch = document.querySelectorAll('.etch'); 

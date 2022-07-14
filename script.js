//create container
const container = document.getElementById('container'); 

//create grid 
for (let i = 0; i < 16; i++) { 
  const block = document.createElement('div'); 
  container.appendChild(block); 
  block.classList.add('etch'); 
} 

//select each individual box 
const etch = document.querySelectorAll('.etch'); 

container.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = 'white'; 
}); 
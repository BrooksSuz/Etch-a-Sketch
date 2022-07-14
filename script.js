const container = document.getElementById('container'); 
const divs = []; 

//create grid 
for (let i = 0; i < 16; i++) {
  divs[i] = document.createElement('div'); 
  divs[i].classList.add('divs'); 
  for (let j = 0; j < 16; j++) {
    const block = document.createElement('div'); 
    divs[i].appendChild(block); 
    block.classList.add('etch'); 
  }
  container.appendChild(divs[i]); 
} 

//select each individual box 
const etch = document.querySelectorAll('.etch'); 

container.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = 'white'; 
}); 
const container = document.getElementById('container'); 
const divs = []; 
const btn = document.querySelector('.btn'); 

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

//event that turns boxes from black to white 
container.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = 'white'; 
}); 

//event that allows user to create their own grid
//max of 100 blocks
btn.addEventListener('click', e => {
  const userLength = prompt('Enter length (Maximum Length = 100)'); 
  const userWidth = prompt('Enter Width (Maximum Width = 100'); 
}); 
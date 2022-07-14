const container = document.getElementById('container'); 
const divs = []; 
const btn = document.querySelector('.btn'); 
let userLength = 16; 
let userWidth = 16; 

//create grid 
for (let i = 0; i < userLength; i++) {
  divs[i] = document.createElement('div'); 
  divs[i].classList.add('divs'); 
  for (let j = 0; j < userWidth; j++) {
    const block = document.createElement('div'); 
    divs[i].appendChild(block); 
    block.classList.add('etch'); 
  }
  container.appendChild(divs[i]); 
} 

//select each individual box 
const etch = document.querySelectorAll('.etch'); 

//event that allows user to create their own grid
//max of 100 blocks
btn.addEventListener('click', () => {
  //delete previous grid
  for (let i = 0; i < userLength; i++) {
    container.removeChild(document.querySelector('.divs')); 
  }

  userLength = prompt('Enter length (Maximum Length = 100)'); 
  userWidth = prompt('Enter Width (Maximum Width = 100'); 

  if (userLength > 100 || userWidth > 100) {
    //create grid 
    for (let i = 0; i < userLength; i++) {
      divs[i] = document.createElement('div'); 
      divs[i].classList.add('divs'); 
      for (let j = 0; j < userWidth; j++) {
        const block = document.createElement('div'); 
        divs[i].appendChild(block); 
        block.classList.add('etch'); 
      }
      container.appendChild(divs[i]); 
    } 
    return alert('Value must be smaller than 100'); 
  }

  //create grid 
  for (let i = 0; i < userLength; i++) {
    divs[i] = document.createElement('div'); 
    divs[i].classList.add('divs'); 
    for (let j = 0; j < userWidth; j++) {
      const block = document.createElement('div'); 
      divs[i].appendChild(block); 
      block.classList.add('etch'); 
    }
    container.appendChild(divs[i]); 
  } 
}); 

//event that turns boxes from black to white 
container.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = 'white'; 
}); 
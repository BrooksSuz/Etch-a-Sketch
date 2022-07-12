const container = document.getElementById('container'); 

for (let i = 0; i < 256; i++) { 
  const div = document.createElement('div'); 
  container.appendChild(div); 
  div.classList.add('etch'); 
} 
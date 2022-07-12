const container = document.getElementById('container'); 

for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement('div'); 
  container.appendChild(newDiv); 
  newDiv.style.backgroundColor = 'black'; 
  newDiv.style.color = 'white'; 
  newDiv.textContent = 'div'; 
  newDiv.style.margin = '5px'; 
}
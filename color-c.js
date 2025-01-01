// Button Ko Select Karna 
const button = document.getElementById("changeColorBtn");

// Function to change background color 
function changeBackgroundColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
} 

// Event listener add karna
button.addEventListener("click", changeBackgroundColor);
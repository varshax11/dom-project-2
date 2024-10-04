// Get all the buttons
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const resetBtn = document.getElementById('resetBtn');

// Change the button color and background color to red when clicked
redBtn.addEventListener('click', function() {
    resetStyles();  // Reset buttons and background to white
    redBtn.style.backgroundColor = 'red';  // Set button background to red
    document.body.style.backgroundColor = 'red';  // Set page background to red
});

// Change the button color and background color to blue when clicked
blueBtn.addEventListener('click', function() {
    resetStyles();  // Reset buttons and background to white
    blueBtn.style.backgroundColor = 'blue';  // Set button background to blue
    document.body.style.backgroundColor = 'blue';  // Set page background to blue
});

// Change the button color and background color to green when clicked
greenBtn.addEventListener('click', function() {
    resetStyles();  // Reset buttons and background to white
    greenBtn.style.backgroundColor = 'green';  // Set button background to green
    document.body.style.backgroundColor = 'green';  // Set page background to green
});

// Reset all buttons and background to white when reset button is clicked
resetBtn.addEventListener('click', function() {
    resetStyles();  // Reset buttons and background to white
});

// Function to reset button styles and page background
function resetStyles() {
    redBtn.style.backgroundColor = 'white';
    blueBtn.style.backgroundColor = 'white';
    greenBtn.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';  // Reset page background
}

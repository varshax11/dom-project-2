
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const resetBtn = document.getElementById('resetBtn');


redBtn.addEventListener('click', function() {
    resetStyles();  
    redBtn.style.backgroundColor = 'red';  
    document.body.style.backgroundColor = 'red';  
});


blueBtn.addEventListener('click', function() {
    resetStyles(); 
    blueBtn.style.backgroundColor = 'blue';  
    document.body.style.backgroundColor = 'blue';  
});


greenBtn.addEventListener('click', function() {
    resetStyles();  
    greenBtn.style.backgroundColor = 'green';  
    document.body.style.backgroundColor = 'green';  
});


resetBtn.addEventListener('click', function() {
    resetStyles();  
});


function resetStyles() {
    redBtn.style.backgroundColor = 'white';
    blueBtn.style.backgroundColor = 'white';
    greenBtn.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white'; 
}

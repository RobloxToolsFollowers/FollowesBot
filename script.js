// Get the button and the response paragraph
const button = document.getElementById('myButton');
const response = document.getElementById('response');

// Add an event listener to the button
button.addEventListener('click', function() {
    response.textContent = 'You clicked the button! Welcome to JavaScript!';
});

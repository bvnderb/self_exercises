const inputField = document.getElementById('inputField'); // this grabs the user input from the text inputField.
const h2Element = document.querySelector('h2'); // !! querySelector !! can select objects based on multiple different tags, including CSS

inputField.addEventListener('change', function (event) {
    h2Element.textContent = event.target.value;
});
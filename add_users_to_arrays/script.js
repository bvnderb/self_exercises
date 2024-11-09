let userArray = [];

const addBtn = document.getElementById('addBtn');
const arrayBtn = document.getElementById('arrayBtn');
const userInput = document.getElementById('userInput');
const userList = document.getElementById('userList');

addBtn.addEventListener('click', addUser);
arrayBtn.addEventListener('click', arrayView);
capitalize.addEventListener('click', capitalizeInput);

function addUser() {

    const userTemp = userInput.value;
    console.log("Add button clicked", userTemp);
    console.log(userTemp);
    if (userTemp) { // check if input is not empty
        userArray.push(userTemp);
        userList.innerHTML += userInput.value + `<br>`;
        userInput.value = ''; // clear input field after adding
    }

}

// function to capitalize the first letter from the input
function capitalizeInput() {
    const userTemp = userInput.value;
    console.log("Add button clicked", userTemp);
    
    if (userTemp) { // Check if input is not empty
        // Capitalize the first character and concatenate with the rest of the string
        let capitalizedUser = `<span class="capitalized">${userTemp.charAt(0).toUpperCase()}</span>${userTemp}`;
        
        // Add the capitalized string to the array
        userArray.push(capitalizedUser);

        // Update the display with both original and capitalized text on the same line
        userList.innerHTML += `${capitalizedUser}<br>`;
        
        // Clear input field after adding
        userInput.value = '';
    }
}



function arrayView() {
    console.log("ArrayView button clicked"); // verify the button works
    userList.innerHTML += userArray.toString();
}

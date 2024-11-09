let userArray = [];

const addBtn = document.getElementById('addBtn');
const arrayBtn = document.getElementById('arrayBtn');
const userInput = document.getElementById('userInput');
const userList = document.getElementById('userList');

addBtn.addEventListener('click', addUser);
arrayBtn.addEventListener('click', arrayView);

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

function arrayView() {
    console.log("ArrayView button clicked"); // verify the button works
    userList.innerHTML += userArray.toString();
}

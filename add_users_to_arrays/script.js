
let userArray = [];

addBtn.addEventListener('click', function(){
    userArray.push(userInput.value);
    userList.innerHTML += userArray;
})
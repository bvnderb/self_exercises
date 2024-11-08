document.addEventListener('DOMContentLoaded', function () { // Ensures the function is called after Dom is loaded
    getUserInput();
});

function getUserInput(){
    // retrieves input from texboxes
    let amountCevapi = document.getElementById('amountCevapi').value;
    let amountSauce = document.getElementById('amountSauce').value;

    // parse values to int
    let amount1 = parseInt('amountCevapi');
    let amount2 = parseInt('amountSauce');

    // get the total cost
    let totalCost = document.getElementById('totalCost');

    // error handling
    if(!isNaN(amount1) && !isNaN(amount2)) {
        console.log("Both values are valid numbers. Proceeding with calculations.");
        return {amount1, amount2};
    } else {
        console.log("One or more values are not numbers. Can not proceed.")
        totalCost.innerHTML = `<h1>Make sure you insert a valid number</h1>`
        return null;
    }

}

function calcTotalCost() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        const inputs = getUserInput();
        if (inputs){
            const {amount1, amount2} = inputs;
            let totalCost = document.getElementById('totalCost')
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    plusCalculator(); // Ensures the function is called after Dom is loaded
});
function plusCalculator(){
    document.getElementById("plusBtn").addEventListener('click', function(){
        // get input from textboxes
        let calcResult = document.getElementById('calcResult');
        let firstinput = document.getElementById('firstValue').value;
        let secondinput = document.getElementById('secondValue').value;

        // Convert inputs to numbers
        let num1 = parseFloat(firstinput);
        let num2 = parseFloat(secondinput)

        // check if the numbers are usable
        if (!isNaN(num1) && !isNaN(num2)){
            console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
            // make the calculations and appear on the HTML page.
            calcResult.innerHTML = `<h1>${num1 + num2}</h1>`
        }
        else {
            console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
            calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
        }
    })
}

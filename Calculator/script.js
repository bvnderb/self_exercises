document.addEventListener('DOMContentLoaded', function () { // Ensures the function is called after Dom is loaded

    getUserInput(); // added the function for the user Input
    plusCalculator(); // added the function for the plus calculator
    minusCalculator(); // added the function for the minus calculator
    multiplyCalculator(); // added the function for the multiply calculator
    divisionCalculator(); // added the function for the division calculator


});
// function to check the userInput since its the same for all other functions.
function getUserInput() {
    // get input from textboxes
    let firstinput = document.getElementById('firstValue').value;
    let secondinput = document.getElementById('secondValue').value;

    // Convert inputs to numbers
    let num1 = parseFloat(firstinput);
    let num2 = parseFloat(secondinput);

    // Get the result element
    let calcResult = document.getElementById('calcResult');


    if (!isNaN(num1) && !isNaN(num2)) {
        console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
        return { num1, num2 }; // Return the numbers for future use
    }
    else {
        console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
        calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
        return null; // Return null to indicate an error
    }
    
}

function plusCalculator() {
    document.getElementById('plusBtn').addEventListener('click', function () {
        const inputs = getUserInput()
        if (inputs) { // proceed only if inputs are valid
            const { num1, num2 } = inputs;
            let calcResult = document.getElementById('calcResult');
            calcResult.innerHTML = `<h1>${num1 + num2}</h1>`
        }

    });
}

function minusCalculator() {
    document.getElementById('minusBtn').addEventListener('click', function () {
        const inputs = getUserInput()
        if (inputs) {
            const { num1, num2 } = inputs;
            let calcResult = document.getElementById('calcResult');
            calcResult.innerHTML = `<h1>${num1 - num2}</h1>`
        }
    });
}

function multiplyCalculator() {
    document.getElementById('multiplyBtn').addEventListener('click', function () {
        const inputs = getUserInput()
        if (inputs) {
            const { num1, num2 } = inputs;
            let calcResult = document.getElementById('calcResult');
            calcResult.innerHTML = `<h1>${num1 * num2}</h1>`
        }
    });
}

function divisionCalculator() {
    document.getElementById('divisionBtn').addEventListener('click', function () {
        const inputs = getUserInput()
        if (inputs) {
            const { num1, num2 } = inputs;
            let calcResult = document.getElementById('calcResult');
            if (num2 !== 0) {
                calcResult.innerHTML = `<h1>${num1 / num2}</h1>`
            } else {
                calcResult.innerHTML = `<h1>Cannot divide by zero!</h1>`;
            }

        }
    });
}


// function plusCalculator(){
//     document.getElementById("plusBtn").addEventListener('click', function(){
//         // get input from textboxes
//         let calcResult = document.getElementById('calcResult');
//         let firstinput = document.getElementById('firstValue').value;
//         let secondinput = document.getElementById('secondValue').value;

//         // Convert inputs to numbers
//         let num1 = parseFloat(firstinput);
//         let num2 = parseFloat(secondinput)

//         // check if the numbers are usable
//         if (!isNaN(num1) && !isNaN(num2)){
//             console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
//             // make the calculations and appear on the HTML page.
//             calcResult.innerHTML = `<h1>${num1 + num2}</h1>`
//         }
//         else {
//             console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
//             calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
//         }
//     })
// }

// function minusCalculator(){
//     document.getElementById("minusBtn").addEventListener('click', function(){
//         // get input from textboxes
//         let calcResult = document.getElementById('calcResult');
//         let firstinput = document.getElementById('firstValue').value;
//         let secondinput = document.getElementById('secondValue').value;

//         // Convert inputs to numbers
//         let num1 = parseFloat(firstinput);
//         let num2 = parseFloat(secondinput)

//         // check if the numbers are usable
//         if (!isNaN(num1) && !isNaN(num2)){
//             console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
//             // make the calculations and appear on the HTML page.
//             calcResult.innerHTML = `<h1>${num1 - num2}</h1>`
//         }
//         else {
//             console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
//             calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
//         }
//     })
// }

// function multiplyCalculator(){
//     document.getElementById("multiplyBtn").addEventListener('click', function(){
//         // get input from textboxes
//         let calcResult = document.getElementById('calcResult');
//         let firstinput = document.getElementById('firstValue').value;
//         let secondinput = document.getElementById('secondValue').value;

//         // Convert inputs to numbers
//         let num1 = parseFloat(firstinput);
//         let num2 = parseFloat(secondinput)

//         // check if the numbers are usable
//         if (!isNaN(num1) && !isNaN(num2)){
//             console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
//             // make the calculations and appear on the HTML page.
//             calcResult.innerHTML = `<h1>${num1 * num2}</h1>`
//         }
//         else {
//             console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
//             calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
//         }
//     })
// }

// function divisionCalculator(){
//     document.getElementById("divisionBtn").addEventListener('click', function(){
//         // get input from textboxes
//         let calcResult = document.getElementById('calcResult');
//         let firstinput = document.getElementById('firstValue').value;
//         let secondinput = document.getElementById('secondValue').value;

//         // Convert inputs to numbers
//         let num1 = parseFloat(firstinput);
//         let num2 = parseFloat(secondinput)

//         // check if the numbers are usable
//         if (!isNaN(num1) && !isNaN(num2)){
//             console.log("Both inputs are numbers. Proceeding with calculations."); // logs a message to the console on success.
//             // make the calculations and appear on the HTML page.
//             calcResult.innerHTML = `<h1>${num1 / num2}</h1>`
//         }
//         else {
//             console.log("One or both inputs are not numbers. Cannot proceed.") // logs a message to the console on error.
//             calcResult.innerHTML = `<h1>Make sure your input values are numbers!</h1>`
//         }
//     })
// }
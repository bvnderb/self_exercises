// Displays Hello World in the console
console.log("Hello World");

// Ensure this line is executed after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set up for displaying the current date
    let dateresultElement = document.getElementById('dateresult');
    let myvalue = document.getElementById('myvalue');
    let submit = document.getElementById('submit');

    // Function to display the current date and time in the HTML and console
    function displayCurrentDate() {
        let dateObject = new Date();
        let day = dateObject.getDate();
        let month = dateObject.getMonth() + 1; // Months are zero-indexed
        let year = dateObject.getFullYear();

        // Display current date information in the HTML
        dateresultElement.innerHTML = `
            <h1>${dateObject}</h1>
            <hr>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger">${month}</button>
                <button type="button" class="btn btn-warning">${day}</button>
                <button type="button" class="btn btn-success">${year}</button>
            </div>
        `;

        // Log current date information to the console
        console.log(`Current Date: ${dateObject}`);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    // Function to handle user input and display results in the console
    function handleUserInput() {
        submit.addEventListener('click', function () {
            // Parse the input value from the textbox
            let inputValue = parseInt(myvalue.value);

            // Check if the input is a valid number
            if (!isNaN(inputValue)) {
                // Display the result in the console
                console.log(inputValue + 2); // Log the calculated value
            } else {
                // Display an error message in the console
                console.log("Please enter a valid number."); // Log error message
            }
        });
    }

    // Call functions to initialize functionality
    displayCurrentDate();
    handleUserInput();
});

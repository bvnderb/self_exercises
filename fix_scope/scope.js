// Fix the scope issues in this code so the elves can track their toy production

// solution using const
function trackToyProduction() {
    const totalToys = 100;
    const dailyToys = 10;
    if (true) {
        const totalToys = 50;  // This is causing issues! -> you can't overwrite a const because its a const
        
    }
    console.log(totalToys);  // Should print 100, not 50
    console.log(dailyToys);  // Should cause an error - why? - it's not defined?
}

trackToyProduction();

// solution using let
function trackToyProduction() {
    let totalToys = 100; // Use let for block scope
    if (true) {
        let dailyToys = 10; // This is fine, as it's block-scoped
        console.log(dailyToys); // This will correctly log 10
    }
    console.log(totalToys);  // This will correctly log 100
    // console.log(dailyToys);  // Uncommenting this will cause an error because dailyToys is not accessible here
}

trackToyProduction();

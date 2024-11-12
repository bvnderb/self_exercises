// Fix the scope issues in this code so the elves can track their toy production
  function trackToyProduction() {
    var totalToys = 100;
    if(true) {
        var totalToys = 50;  // This is causing issues!
        let dailyToys = 10;
    }
    console.log(totalToys);  // Should print 100, not 50
    console.log(dailyToys);  // Should cause an error - why?
}

// solution using const
function trackToyProduction() {
    const totalToys = 100; // Moved both totalToys and dailyToys outside of the if statement to fix the issue
    const dailyToys = 10; // Moved both totalToys and dailyToys outside of the if statement to fix the issue
    if (true) {
        const totalToys = 50; // you can't overwrite a const
        
    }
    console.log(totalToys);
    console.log(dailyToys); // Doesn't cause an error because i declared it outside of the if
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

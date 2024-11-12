// Fix the scope issues in this code so the elves can track their toy production


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
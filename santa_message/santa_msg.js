const btn = document.getElementById('submitBtn');
// const usn = document.getElementById('getName').value;

btn.addEventListener('click',function(){
    const usn = document.getElementById('getName').value;
    console.log(usn);
    const randomNumber = () => Math.floor(Math.random() *10) +1;
    const randomNo = randomNumber();
    console.log(randomNo);
    const santaMessage = () => santaMsgBox.innerHTML = `Ho ho ho! ${usn} has been very good this year and gets ${randomNo} presents!`;
    santaMessage();
})

// way to retrieve name
// way to randomize a number
// function to take values from name and number
// and print this on screen (innerHTML)

// arrow function for text goes here 



// arrow function for random number - trial


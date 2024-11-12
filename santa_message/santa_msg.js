const btn = document.getElementById('submitBtn');

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

// arrow function - easy (by Wim)

const santaMessage = (name, gifts) => {
    return `Ho ho ho! ${name} has been good and gets ${gifts} presents!`;
}
let myMessage = santaMessage("Brent", 12);
console.log(myMessage);


   


// displays Hello World in the console
console.log("Hello World");

// retrieves the current date and time.
let dateObject = new Date();

// extract the day of the dateObject
let day = dateObject.getDate();
console.log(day);
// extract the month of the dateObject
let month = dateObject.getMonth();
// modify the month of the dateObject by 1 - human readable month
month = month + 1;
console.log(month);
// extract the year of the dateObject
let year = dateObject.getFullYear();
console.log(year);

// common practice to first assign an id to a variable
// aka we make a drawer and put multiple things in it

dateresult.style.color= "red"; // example of using style elements in the JS
dateresult.style.fontsize = "50px"; // example of using style elements in the JS

// concatenation method
dateresult.innerHTML = `
<h1>${dateObject}</h1>
<hr>
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" class="btn btn-danger">month</button>
<button type="button" class="btn btn-warning">${day}</button>
<button type="button" class="btn btn-success">${year}</button>
</div>
`;

// exercise that adds 2 to any numeric value inserted in the textbox

let dateresult = document.getElementById('dateresult');
// make objects from input and button
let myvalue = document.getElementById('myvalue');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    console.log(parseInt(myvalue.value)+2);

});


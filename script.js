let dateresult = document.getElementById('dateresult');
// make objects from input and button
let myvalue = document.getElementById('myvalue');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    console.log(parseInt(myvalue.value)+2);

});
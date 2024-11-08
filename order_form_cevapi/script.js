let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',foodCost);

let cevapi = document.getElementById('amountCevapi');
let sauce = document.getElementById('amountSauce');

let delivery = document.getElementById('delivery');
let totalCost = document.getElementById('totalCost');

function foodCost(){
    let total = +cevapi.value * 9 +sauce.value * 5;

    if (delivery.checked){
        total += 5;
    }
    totalCost.innerHTML = `<h1>€ ${total}</h1>`;
}


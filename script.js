const bill = document.getElementById('bill');
const resetBtn = document.querySelector('.output button');

resetBtn.addEventListener('click',()=>{
    
    window.location.reload();

})


const numberOfPeople = document.getElementById('number-of-people');

bill.addEventListener('input',()=>{
    setTimeout(()=>{
        if(!numberOfPeople.value){
            numberOfPeople.classList.add('display-error');
            document.querySelector('.people span').classList.remove('hidden');
        }
        else{
            showTotalAmount(parseFloat(bill.value),parseInt(numberOfPeople.value)); 
        }
    },2000) 
})

function showTotalAmount(billValue, numberPeople){
    const totalAmount = document.getElementById('total-per-person');
    
    const amount = parseFloat(billValue/parseInt(numberPeople));

    if(!isNaN(amount))  totalAmount.innerText = `₹${amount.toFixed(2)}`
}

function showSuccess(){
    numberOfPeople.classList.remove('display-error');
    document.querySelector('.people span').classList.add('hidden');
}

numberOfPeople.addEventListener('input',()=>{
    showSuccess();
    showTotalAmount(parseFloat(bill.value),parseInt(numberOfPeople.value)); 
})

//showing tip amount
const tipOptions = document.querySelectorAll('.tip-options div');

Array.from(tipOptions).forEach((tip)=>{
    tip.addEventListener('click',()=>{
        const tipValue = parseInt(tip.textContent.slice(0,-1))
        // console.log(tipValue, typeof tipValue);
        // console.log(numberOfPeople.value);
        // console.log(bill.value);
        showTipAmount(tipValue, parseInt(numberOfPeople.value),parseInt(bill.value));
    })
})

function showTipAmount(tipValue, numberOfPeople, billValue){
    const tipAmount = document.getElementById('tip-per-person') ;
    const amount = ((parseFloat(tipValue)/100)*billValue)/numberOfPeople;

    if(!isNaN(amount))  tipAmount.innerText = `₹${amount.toFixed(2)}`
}

const custom = document.getElementById('custom');
custom.addEventListener('input',()=>{
    showTipAmount(parseInt(custom.value), parseInt(numberOfPeople.value),parseInt(bill.value))
})
const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swap = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    fetch(`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value;
        const currency2 = currencyTwo.value;
        rateInfo.textContent = `1 ${currencyOne.value} = ${data.result.toFixed(4)} ${currencyTwo.value}`
        
        amountTwo.value = (amountOne.value * data.result).toFixed(2);
    })
}

calculate();

amountOne.addEventListener('keyup', calculate);
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);

calculate();
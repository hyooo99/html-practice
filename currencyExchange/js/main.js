let currencyRatio = {
    USD:{
        KRW:1231.91,
        USD:1,
        VND:22862.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00081,
        VND:18.56,
        unit:"원"
    },
    VND:{
        KRW:0.054,
        USD:0.000044,
        VND:1,
        unit:"동"
    }
}
let inputCurrency = 'USD';
let outputCurrency = 'USD';
// console.log(currencyRatio.KRW.unit);
// console.log(currencyRatio['VND']['unit']);

document.querySelectorAll("#input-data a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("input-btn").textContent = this.textContent;
    inputCurrency = this.textContent;
    convert();
    // console.log(inputCurrency);
}));

document.querySelectorAll("#output-data a")
.forEach((menu) => menu.addEventListener("click", function(){
    document.getElementById("output-btn").textContent = this.textContent;
    outputCurrency = this.textContent;
    convert();
}));

function convert() {
    let amount = document.getElementById("from-input").value
    let convertedAmount = amount * currencyRatio[inputCurrency][outputCurrency]

    document.getElementById("to-input").value = convertedAmount;
}

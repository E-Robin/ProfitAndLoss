var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#Quant");
var currentPrice = document.querySelector("#current-price");
var btn1 = document.querySelector("#btn");
var result = document.querySelector("#output1");

btn1.addEventListener("click", submit)

function submit() {
    var a = Number(initialPrice.value);
    var b = Number(quantity.value);
    var c = Number(currentPrice.value);

    if (a && b && c) {
        calculateResult(a, b, c);
    } else {
        result.innerText = "Please insert values to check output"
    }
    // console.log("i ma great");
}


function calculateResult(cost, quant1, sell) {
    if (cost > sell) {
        var loss = (cost - sell) * quant1;
        var lossPercentage = (loss / cost) * 100;

        result.innerText = `The loss value is ${loss} and loss percentage is ${lossPercentage}`;
    } else if (sell > cost) {
        var profit = (sell - cost) * quant1;
        var profitPercentage = (profit / cost) * 100;
        result.innerText = `The Profit value is ${profit} and profit percentage is ${profitPercentage}`;
    } else {
        result.innerText = "There is no gain and loss when sitting at same place"
    }

}
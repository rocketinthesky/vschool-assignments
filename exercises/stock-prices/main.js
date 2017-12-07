function getMaxProfit(stockPrices) {
    var minPrice = stockPrices[0];
    var maxProfit = stockPrices[1] - stockPrices[0];

    for (var i = 1; i < stockPrices.length; i++) {
        var current = stockPrices[i];
        var potential = current - minPrice;
        maxProfit = Math.max(maxProfit, potential);
        minPrice = Math.min(minPrice, current);
    }
    console.log(maxProfit);
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);

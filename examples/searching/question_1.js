// Problem : The share price for a company over is week's trading is as follows:
// [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day,
// and sell the shares on one of the following days, write an algorithm to work out what
// the maximum profit you could make would be.

const sharePrices = [128, 97, 121, 123, 98, 97, 105, 100];


// Solve as quadratic...badly....
function minMax(prices, diff = 0) {
  let day = prices.shift();
  prices.forEach(x => {
    let comparison = day - x;
    if (comparison < diff) {
      diff = comparison;
    }
  });
  return (prices.length === 0) ? -diff : minMax(prices, diff);
}


// Better efficiency (linear)...
function getProfit(prices) {
  let lowestShare = prices[0];
  let bestProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    // if selected price is lower than existing lowestShare
    if (prices[i] < lowestShare) {
      // then reassign lowestShare
      lowestShare = prices[i];
    }
    let diff = prices[i] - lowestShare;
    // if diff is greater than the bestProfit
    if (diff > bestProfit) {
      bestProfit = diff;
    }
  }
  return bestProfit;
}

// console.log(minMax(sharePrices));
console.log(getProfit(sharePrices));

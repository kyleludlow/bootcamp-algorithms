var shares = [128, 50, 150, 96, 10, 200, 106];

function maximizeProfit(shares){
    var maxProfit = shares[1] - shares[0];
    var lowestPrice = shares[0];
    for (var i = 1; i < shares.length; i++){
        var currentPrice = shares[i];
        var currentProfit = currentPrice - lowestPrice;
        if(currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if(currentPrice <= lowestPrice) { // 50 < 5
            lowestPrice = currentPrice;
        }
    } return maxProfit;
}

console.log(maximizeProfit(shares));
// var maximizeProfit = function(shares) {
//     var maxProfits = [];
//         var i;
//         for (i = 0; i < shares.length; i++) {
//             var currentShare = shares[i];
//             var nextShare = shares[i + 1];
//             // BEGINNING OF CONDITIONALS
//             if (nextShare > currentShare) {
//                 maxProfits.push(nextShare - currentShare);
//             } else {
//                 console.log('You lost mad money');
//             }
//         }
//         var maxProfit = Profits[0];
//         var j;
//         var k = 0;
//         for (j = 0; j < maxProfits.length; j++) {
//             k++;
//             if (maxProfits[k] < maxProfits[i]) {
//                 console.log(maxProfit);
//             }
//         }
//     } // if (maxProfits > datMONEY) {
    //
    // }



/*

var shares = [128, 97, 150, 96, 98, 97, 105];

var maximizeProfit = function(shares) {
  var maxProfit = 0;
  var counter = 0;
  var index;
  for (var i = 0; i < shares.length; i++) {
    for (var j = i + 1; j < shares.length; j++) {
      if (shares[i] - shares[j] > maxProfit) {
        maxProfit = shares[i] - shares[j];
      }
    }
  }
  return maxProfit;
};

*/

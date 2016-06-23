// buy shares and sell in a consecutive day

// var shares = [128, 97, 150, 96, 98, 97, 105];



// BRUTE FORCE
// var maximizeProfit = function(shares) {
//   var maxProfit = 0;
//   var counter = 0;
//   var index;
//   for (var i = 0; i < shares.length; i++) {
//     for (var j = i + 1; j < shares.length; j++) {
//       if (shares[i] - shares[j] > maxProfit) {
//         maxProfit = shares[i] - shares[j];
//       }
//     }
//   }
//   return maxProfit;
// };




var shares = [93, 94, 105, 96, 94, 110, 100];



// BAE

var maximizeProfit = function(shares) {

  var bestBuyPrice = shares[0];
  var maxProfit = shares[1] - shares[0];

  for (var i = 1; i < shares.length; i++) {

    var currentStockPrice = shares[i];
    var currentProfit = currentStockPrice - bestBuyPrice;



    if (maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }
    if (bestBuyPrice > currentStockPrice){
      bestBuyPrice = currentStockPrice;
    }


    }

  return maxProfit;
};


// console.log(maximizeProfit(shares));



// DEM EGGS
var makeDemFloors = function(){
  var floors = [];
  for(var i = 0; i < 101; i++){
    floors.push(i);
  }
  return floors;
};

floorsArray = makeDemFloors();


// console.log(makeDemFloors());


// BINARY THEN LINEAR APPROACH

var deathFromAbove = function(floors, killFloor, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? floors.length : end;
    var killAttempt = 1;

    var index = Math.floor((start + end) / 2);
    var floor = floors[index];

    console.log(start, end);
    if (floor === killFloor) {

      return "We got em on try:    " +  killAttempt;
    }
    else if (floor > killFloor) {
          for (var i = 0; i < index; i++){
            killAttempt = killAttempt + 1;
            if ( floors[i] === killFloor) {
                return "We got em on try:    " +  killAttempt;
            }
          }
    }
    else if (floor < killFloor) {
      for (var i = index + 1; i < floors.length; i++){
        killAttempt = killAttempt + 1;
        if ( floors[i] === killFloor) {
          return "We got em on try:    " +  killAttempt;
        }
      }
    }
};


console.log(deathFromAbove(floorsArray, 23));

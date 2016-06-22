//TODO: Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way.

var floors = [];

function floorBuilder(){
    var i = 0;
    for(i=1; i<101; i++){
        floors.push(i);
    }
};
floorBuilder();



var deathFromAbove = function(floors, killFloor, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? floors.length : end;
    var killAttempt = 1;

    var index = Math.floor((start + end) / 2);
    var floor = floors[index];

    //console.log(start, end);
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

console.log(deathFromAbove(floors, 50));

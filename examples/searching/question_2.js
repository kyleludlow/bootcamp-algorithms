// Problem : Imagine that you wanted to find what the highest floor of a 100 story building you
// could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm
// to work out which floors you should drop the eggs from to find this out in the most efficient way.



// Force it.....
function eggDropper() {
  let eggBreakage = Math.floor(Math.random() * 100) + 1;
  let count = 0;
  let lower = 0;
  let higher = 10;
  let increment = 10;
  let flights = 10; // this is me being stupid...

  while (higher <= eggBreakage) { // till first egg breaks
    count++;
    higher += increment;
    lower += increment;
    flights += increment;
  }

  flights += increment;

  while (lower <= eggBreakage) { // till second egg breaks
    count++;
    flights++;
    if (lower === eggBreakage) {
      // flight calcs are based on 2 flights of stairs per floor and 5 calories per flight...just cos 😃
      return `
The egg broke at floor ${eggBreakage} and therefore you can safely drop at floor ${lower - 1}.
It took ${count} tries and you covered ${flights * 2} flights of stairs. That's about ${flights * 5} calories!
`
    }
    lower++
  }
}

console.log(eggDropper());

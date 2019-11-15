var scores, winner, loser;

function WhoIsWinner(a, b) {
  var alexScore, bobScore, winner;
  alexScore = 0;
  bobScore = 0;
  winner = []
  a = a.split(' ');
  b = b.split(' ');
  for (var i = 0; i < 3; i++) {

    if (a[i] > 100 || a[i] < 0) {
      console.log(a[i]+ " is not in the range of 0 to 100");
      break
    } 
    else if (b[i] > 100 || b[i] < 0) {
      console.log(b[i]+ " is not in the range of 0 to 100");
      break
    } 
    else {
      if (+a[i] > +b[i]) {
        alexScore += 1;
      }
      else if (+a[i] < +b[i]) {
        bobScore += 1;
      }
      else if (+a[i] == +b[i]) {
        
      }
    }

  }
  winner.unshift(bobScore);
  winner.unshift(alexScore);
  return winner;
}

console.log(WhoIsWinner('5 6 7', '3 6 10'));
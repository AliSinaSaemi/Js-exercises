

function MinAndMasSum(n) {
  var min = 0, max = 0, total = [];
  var list = n.split(' ').map(function(item) {
    return parseInt(item);
  });
  list = list.sort(function(a, b){ return a - b });
  if (list.length == 5) {
    for (var i = 0; i < list.length-1; i++) {
      min += list[i];
    }
    for (var x = 1; x < list.length; x++) {
      max += list[x];
    }
    total.unshift(max);
    total.unshift(min);
    return total;
  }
  else {
    console.log('Hey it is not a correct amount');
  }
} 

console.log(MinAndMasSum('1 3 5 7 9'));
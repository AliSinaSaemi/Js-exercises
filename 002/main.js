

function bigSum(item) {
  var sum = 0;
  var list = item.split(' ').map(function(item) {
    return parseInt(item, 10);
  });
  for (var i = 0; i < list.length; i ++) {
    if (list[i] > Math.pow(10, 10)) {
      alert('Your number is higher than our range');
    }
    else if (list[i] < 0) {
      alert('Your number is lower than zero');
    }
    else {
      alert('Check your numbers in the list please');
    }
  }
  if (item == '') {
    alert('There is no number to work on.');
  }
  if (list.length > 10) {
    alert('Amount of your list is not in our range.')
  }
  else {
    for (var i = 0; i < list.length; i++) {
      sum += list[i];
    }
  }
  return sum;

}

console.log(bigSum('22 44 55 342 7 7'));
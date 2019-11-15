

function staircases(n) {
  var character = '#';
  if (n == 0) {
    alert('No result because of given number which is zero');
  }
  else if (n > 0) {
    for (var i = 0; i < n+1; i++) {
      console.log(character.repeat(i));
    }
  }
  else if (n < 0) {
    alert('Your given number is negetive');
  }
}

staircases(5);


var but = document.querySelector('.button');

 function f1() {
  var mal = document.getElementById('mul').checked;
  var sub = document.getElementById('sub').checked;
  var val1 = document.getElementById('val1').value;
  var val2 = document.getElementById('val2').value;
  if (mal) {
    var mres = val1 * val2;
    }
    if (sub) {
      var mres = val1 / val2;
      }
  document.getElementById('out').innerHTML = mres;
}

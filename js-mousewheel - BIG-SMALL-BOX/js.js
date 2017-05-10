  var t3 = 400;

  document.querySelector('.t1').onmousewheel = function (event){

      var r = event.deltaY;

      document.querySelector('.t1').style.background = 'rgb(' + r + ', ' + r + ', ' + r + ')';

      if (r > 0) {
        t3= t3-50;
        }
      if (r < 0) {
        t3= t3+50;
        }

      document.querySelector('.t1').style.width = t3 + 'px';
      document.querySelector('.t1').style.height = t3 + 'px';

      return false;
}

var x = 0;
var y = 0;


function f1(event) {
  event.preventDefault();
    console.log(event);
          if (x<0 || y<0) {
            x=0;
          }
          if (event.key=='ArrowRight') {
            x=x+3;
          }
          if (event.key=='ArrowDown') {
            y=y+3;
          }
          if (event.key=='ArrowLeft') {
            x=x-3;
          }
          if (event.key=='ArrowUp') {
            y=y-3;
          }
    document.querySelector('.hero').style.left = x + 'px';
    document.querySelector('.hero').style.top = y + 'px';
    document.querySelector('.hero').style.rigth = x + 'px';
    document.querySelector('.hero').style.down = y + 'px';

}






function f2 (event) {
  if (event.key=='Escape');

document.querySelector('.test2').style.display = "none";

}

function f3 (event) {
  if (event.key=='m') {
    document.querySelector('.test2').style.display = "block";

  }
}

document.addEventListener('keydown', f1);
document.addEventListener('keydown', f2);
document.addEventListener('keydown', f3);


    // document.querySelector('.test').addEventListener('click', f1);
    // document.querySelector('.test').addEventListener('click', f2);
      //   ивент можно илспользовать для кликов и повторов выполнения функции
      // document.querySelector('.test').removeEventListener('click', f2);
      // удалить функцию event //
      // function f2() {
      //   alert('2222222')
      //   }

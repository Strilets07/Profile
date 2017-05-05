
function f1 (event) {
  if (event.key=='m') {
    document.querySelector('.test4').style.left = "350px";

  }
}
function f2 (event) {
  if (event.key=='Escape') {
    document.querySelector('.test4').style.left = "100px";

  }
}
function f3 (event) {
  if (event.type =='mouseover') {
    document.querySelector('.test4').style.left = "0px";

  }
}

function f4 (event) {
  if (event.type =='mouseout') {
    document.querySelector('.test4').style.left = "100px";

  }
}



document.querySelector('.test4').addEventListener('keydown', f1);
document.addEventListener('keydown', f2);
document.addEventListener('mouseover', f3);
document.addEventListener('mouseout', f4);




    // document.querySelector('.test').addEventListener('click', f1);
    // document.querySelector('.test').addEventListener('click', f2);
      //   ивент можно илспользовать для кликов и повторов выполнения функции
      // document.querySelector('.test').removeEventListener('click', f2);
      // удалить функцию event //
      // function f2() {
      //   alert('2222222')
      //   }

var apple = document.querySelector('.apple');

function f1(event) {
    apple.style.left = event.offsetX+'px';
    apple.style.top = event.offsetY+'px';
    console.log(event);
}


  document.querySelector('.test2').addEventListener('mousemove', f1);

    // document.querySelector('.test').addEventListener('click', f1);
    // document.querySelector('.test').addEventListener('click', f2);
      //   ивент можно илспользовать для кликов и повторов выполнения функции
      // document.querySelector('.test').removeEventListener('click', f2);
      // удалить функцию event //
      // function f2() {
      //   alert('2222222')
      //   }

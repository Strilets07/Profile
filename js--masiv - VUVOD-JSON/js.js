var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];

function t1() {
  for (var i = 0; i < mas.length; i++) {
    document.querySelector('.t1').innerHTML += i + ' - ' + mas[i] +'<br>';
			if (mas[i] > 5) {
			document.querySelector('.t1-5').innerHTML += i + '-' +mas[i] +'<br>';
		}
	}

}
t1();

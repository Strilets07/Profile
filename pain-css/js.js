

var min = 1;
var sec = 4;
var timer;

myClock();//запускаю первый раз
function myClock(){
	var spanMin = document.getElementById('min1');
	var spanSec = document.getElementById('sec1');

	if (sec==0) {
		sec=60;
		min--;
	}
	sec--;

	if (min==-1){
		clearTimeout(timer);
		alert('Конец');
	}
	else {
		spanMin.innerHTML = min;
		spanSec.innerHTML = sec;
		timer =setTimeout(myClock, 200);
	}
}


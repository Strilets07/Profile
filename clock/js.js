var a = 0;
var b = 0;
function sec () {
	var min = document.getElementById('min');
	var hour = document.getElementById('hour');
	a = a+6;
	if (a==360) {
		a=0;
		b= b+6;
	}
	min.style.transform='rotate('   +a   +'deg)';
	hour.style.transform='rotate('   +b   +'deg)';
	setTimeout (sec, 200);
}
sec ();

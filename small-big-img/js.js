
var b = document.getElementById('big-img');
var a = document.getElementsByClassName('fBox');


for (i=0; i<a.length; i++) {
	a[i].onclick = Big;
}


function Big () {
	for (i=0; i<a.length; i++) {
		a[i].classList.remove('mystyle');
	}
	this.classList.add("mystyle");
	b.src = this.src;
}

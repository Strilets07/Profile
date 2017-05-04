function fOMO(){
	//onmouseover - наведение мыши

	document.getElementsByClassName('six')[0].style.backgroundImage= 'url("http://lorempixel.com/200/200")';
	document.getElementsByClassName('six')[0].style.width='200px';
	document.getElementsByClassName('six')[0].style.height='200px';

}
function fOMout() {
	//onmouseout - уведение мыши
		document.getElementsByClassName('six')[0].style.backgroundImage= 'url("http://lorempixel.com/100/100")';
		document.getElementsByClassName('six')[0].style.width='100px';
		document.getElementsByClassName('six')[0].style.height='100px';
		document.getElementsByClassName('one')[0].style.width='100px';
		document.getElementsByClassName('one')[0].style.height='100px';
}

function fDBL(){
	//ondblclick - двойной клик мышью
	document.getElementsByClassName('one')[0].style.width='800px';
	document.getElementsByClassName('one')[0].style.height='400px';
	document.getElementsByClassName('one')[0].getElementById('foto')= 'src"images/foto.jpg"';

	// document.getElementsByClassName('one')[0].style.opacity='0.5';
}

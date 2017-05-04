// var a = {
// 		"color" : 'black',
// 		"year"  : 2010,
// 		"cost"  : 200,
// 		"name"  : "intel"
//
// };
// a.cost = 9999;
//
// // ydalenie
// // delete a.cost;
//
// // novui masiv
// // a.newCost = 5000
//
// console.log(a);

// add novui masiv
// a.mas = [3,4,5,6,7];
// a.assoc = { "weigth" : 2000, "maxSpeed" : 200, };
//
// // asoecuvnui masiv
//
// console.log(a.mas[2]);

// - vuvuod masiva 2


// var kurs = {
// 	"money" : 70,
// 	"kursru"  : 4.5,
// 	"kursdollar"  : 27,
//
// }
// console.log(kurs);
//
// kurs.change = function () {
// 		alert(this.money );
// 		alert(this.money * this.kursdollar);
// 		alert(this.money * this.kursru);
// }
// console.log(kurs.change());

// for (var k in mas) {
// 	document.getElementsByTagName('body')[0].innerHTML += k +' ---- '+mas[k]+ '<br>';
// }
//
// mas.old = function () {
// 	alert(2017 - this.year);
// }
// console.log(mas);
// mas/old();


var hero = {
	"name" : "SM" ,
	"xp"  : 60,
 	"img"  : "https://cdn4.iconfinder.com/data/icons/marvel-heroes-1/52/ironman-128.png",
 	"damage" : [2,3,7],
	"hit" : function(a) {
			if (a==0 || a==1) return 0;
			if (a==2) return this.damage[0];
			if (a==3) return this.damage[0];
			if (a==4) return this.damage[1];
			if (a==5) return this.damage[1];
			if (a==6) return this.damage[2];
	}
}
var hero2 = {
	"name" : "CA" ,
	"xp"  : 75,
 	"img"  : "https://cdn4.iconfinder.com/data/icons/marvel-heroes-1/52/captain_america-128.png",
 	"damage" : [1,5,9],
	"hit" : function(a) {
			if (a==0 || a==1) return 0;
			if (a==2) return this.damage[0];
			if (a==3) return this.damage[0];
			if (a==4) return this.damage[1];
			if (a==5) return this.damage[1];
			if (a==6) return this.damage[2];
	}
}

function kubik () {
			var rand = 0.5 + 6 * Math.random();
			rand = Math.round(rand);
			return rand;
}

init (); //vuvuod heroja

function init () {
		document.querySelector('.hero1 h2').innerHTML = hero.name;
		document.querySelector('.hero1 .xp').innerHTML = hero.xp;
		document.querySelector('.hero1 img').src = hero.img;

		document.querySelector('.hero2 h2').innerHTML = hero2.name;
		document.querySelector('.hero2 .xp').innerHTML = hero2.xp;
		document.querySelector('.hero2 img').src = hero2.img;
}

document.querySelector('#h1udar').onclick = function() {
			var kub = kubik ();
			console.log(kub);
			hero2.xp = hero2.xp - hero.hit(kub);
			document.querySelector('.hero2 .xp').innerHTML = hero2.xp;
			
}
document.querySelector('#h2udar').onclick = function() {
			var kub = kubik ();
			console.log(kub);

			hero.xp = hero.xp - hero2.hit(kub);
			document.querySelector('.hero1 .xp').innerHTML = hero.xp;
}

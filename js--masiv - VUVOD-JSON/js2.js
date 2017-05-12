var arr = {
	"k1" : "17w4",
	"k2" : "1sfsg7",
	"k3" : "17nd",
	"k16" : "1237",
	"k14" : "1w37",
	"3k1" : "1wrw7"
}
function t2() {
  for (var k in arr) {
    document.querySelector('.t2').innerHTML += k +' *** ' + arr[k] + '<br>';

		}
	}


t2();

var arr = {
	"k1" : "17w4",
	"k2" : "1sfsg7",
	"k3" : "17nd",
	"k16" : "1237",
	"k14" : "1w37",
	"3k1" : "1wrw7"
}
console.log(arr);

var str = JSON.stringify(arr);
console.log(str);

localStorage.setItem("object", str);

localStorage.object;
console.log(localStorage.object);

var prime = JSON.parse(localStorage.getItem("object"));
console.log(prime);

 var goods = {
	 12321 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 3000",
	 	"cost_1" : 3550,
	 	"cost_2" : 3394,
	 	"batteries" : 1,
	 	"image" : "bosch3000.jpg",
	 	"new" : 0
	 },
	 12322 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 6000",
	 	"cost_1" : 3500,
	 	"cost_2" : 2500,
	 	"batteries" : 1,
	 	"image" : "bosch6000.jpg" ,
	 	"new" : 1
	 },
	 12323 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 2900",
	 	"cost_1" : 3700,
	 	"cost_2" : 3491,
	 	"batteries" : 1,
	 	"image" : "bosch2900.jpg",
	 	"new" : 0
	 },
	 12324 : {
	 	"name": "Перфоратор",
	 	"producer" : "TexAc",
	 	"name2" : "TA-01-352",
	 	"cost_1" : 1399,
	 	"cost_2" : 1279,
	 	"batteries" : 1,
	 	"image" : "tex352.jpg",
	 	"new" : 0
	 },
	 12325 : {
	 	"name": "Перфоратор",
	 	"producer" : "Craft",
	 	"name2" : "CBH 1100",
	 	"cost_1" : 22500,
	 	"cost_2" : 15500,
	 	"batteries" : 1,
	 	"image" : "craft1110.jpg",
	 	"new" : 1
	 },
	 76423 : {
	 	"name": "Перфоратор",
	 	"producer" : "Днепр-М",
	 	"name2" : "ПЕУ-2485",
	 	"cost_1" : 1199,
	 	"cost_2" : 1069,
	 	"batteries" : 0,
	 	"image" : "dnepr85.jpg",
	 	"new" : 0
	 },
	  76424 : {
	 	"name": "Перфоратор",
	 	"producer" : "Титан",
	 	"name2" : "БП75-24",
	 	"cost_1" : 0,
	 	"cost_2" : 1285,
	 	"batteries" : 0,
	 	"image" : "titan.jpg",
	 	"new" : 1
	 },
	  76425 : {
	 	"name": "Перфоратор",
	 	"producer" : "Metabo",
	 	"name2" : "KHE 2444",
	 	"cost_1" : 4434,
	 	"cost_2" : 3299,
	 	"batteries" : 0,
	 	"image" : "metabo.jpg",
	 	"new" : 0
	 }
 };

 var out="";
    for (var key in goods){
    out +='<div class="cart">'
    out += '<img class="foto" src="img/' + goods[key].image + '">';
    out += '<h2 id="name">'+goods[key].name+'</h2>';
    out += '<h3 id="producer">'+goods[key].producer+'</h3>';
    out += '<h3 id="name2">'+goods[key].name2+'</h3>';
    out += '<h4 id="cost_1">'+goods[key].cost_1+'</h4>';
    out += '<h4 id="cost_2">'+goods[key].cost_2+'</h4>';
    out +='</div>'
}

document.querySelector('#out').innerHTML = out;



document.getElementById('sum').oninput = filter;
function filter() {
    var sum = document.getElementById('sum').value;

    document.getElementById('out-price').innerHTML = sum;
}

document.getElementById('sum').onchange = filter2;
function filter2(){
  var sum2 = document.getElementById('sum').value;
  console.log(sum2);
  var out="";
     for (var key in goods){
       if (goods[key].cost_2<=sum2){
     out +='<div class="cart">'
     out += '<img class="foto" src="img/' + goods[key].image + '">';
     out += '<h2 id="name">'+goods[key].name+'</h2>';
     out += '<h3 id="producer">'+goods[key].producer+'</h3>';
     out += '<h3 id="name2">'+goods[key].name2+'</h3>';
     out += '<h4 id="cost_1">'+goods[key].cost_1+'</h4>';
     out += '<h4 id="cost_2">'+goods[key].cost_2+'</h4>';
     out +='</div>';
   }
 }

 document.querySelector('#out').innerHTML = out;
}

var button = document.getElementsByClassName('.button');

function f1() {
  var model = document.getElementsByName('producer');
  var a;
  for (var i = 0; i < model.length; i++){

    if (model[i].checked){
      a = model[i].value;
    }
  }
        if (goods[key].producer = a){
        out +='<div class="cart">'
        out += '<img class="foto" src="img/' + goods[key].image + '">';
        out += '<h2 id="name">'+goods[key].name+'</h2>';
        out += '<h3 id="producer">'+goods[key].producer+'</h3>';
        out += '<h3 id="name2">'+goods[key].name2+'</h3>';
        out += '<h4 id="cost_1">'+goods[key].cost_1+'</h4>';
        out += '<h4 id="cost_2">'+goods[key].cost_2+'</h4>';
        out +='</div>';
      }

      document.querySelector('#out').innerHTML = out;
  }







// var but = document.querySelector('.button');
//
//  function f1() {
//   var mal = document.getElementById('mul').checked;
//   var mal = document.getElementById('sub').checked;
//   var val1 = document.getElementById('val1').value;
//   var val2 = document.getElementById('val2').value;
//   if (mal) {
//     var mres = val1 * val2;
//     document.getElementById('out').innerHTML = mres;
//     console.log(mres);
//   }
// }

//onchange










//
// document.getElementById('cred').oninput = backgroundColor;
// function backgroundColor (){
//
// var cred=document.getElementById('cred').value;
// 		document.getElementById('test1').style.background = 'rgb('+cred +',0,0 )';
//
// var out='';
// out += 'background-color: rgb('+cred+',0,0)';
// document.getElementById('out').innerHTML = out;
//
// }



























// '<img src="'   + item['12345'].img     + '">';



 // var arr = {
 // 	"k1" : {
 // 		name: "alex",
 // 		age: 15
 // 	},
 // 	"k2" : {
 // 		name: "serg",
 // 		age: 25
 // 	}
 // };
 //
 // var out="";
 // for (var key in arr){
 // 	out += '<div class="cart">';
 // 	out += '<h2>'+arr[key].name+'</h2>';
 //
 // 	out += '</div>';
 // }
 // document.querySelector('#out').innerHTML = out;
 // localStorage.setItem('kkkk', JSON.stringify(arr));
 // var a = localStorage.getItem('kkkk');
 // a = JSON.parse(a);
 // console.log(a);

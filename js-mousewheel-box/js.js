
var tt2 = 10;

document.querySelector('.tt1').onmousewheel = function (event){

  var r = event.deltaY;


  if (r < 0) {
      if (tt2+10>0) {
      }
     else {
       tt2= tt2+10;
      }
  }

  if (r > 0) {
      if (tt2-10<-260) {
    }
    else {
      tt2= tt2-10;
    }
    console.log(r);
}
document.querySelector('.center-block').style.marginTop = tt2 + 'px';
return false;
}


var myimg = document.getElementsByClassName('tt2-img');
count=0;

document.querySelector('.tt2').onmousewheel = function (event){
  for (i=0; i<myimg.length; i++){
    myimg[i].style.border = 'none';
  }
  if (count+1 <= myimg.length) {
    count=count+1;
  } else {
    count = 0;
  }
  console.log(count);

  myimg[count].style.border = '10px solid gold';
  return false;
}

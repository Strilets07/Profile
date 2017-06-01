$(document).ready(function() {
  var metro_arr = [];
  var start_st = "";
  var last_st = "";
  var start_st_nm = 0;
  var last_st_nm = 0;
  var count = 0;
  $.getJSON('metro.json', function(data) {
    var metro_arr = data;
    for (var key in metro_arr) {
      var metro = document.createElement('option');
      var metro2 = document.createElement('option');
      metro.innerHTML = key;
      metro2.innerHTML = key;
      metro.value = key;
      metro2.value = key;
      document.querySelector('.out1').append(metro2);
      document.querySelector('.out2').append(metro);
    }
    $("#but1").click(function() {
      start_st = document.querySelector('.out1').value;
      last_st = document.querySelector('.out2').value;
      start_st_nm = metro_arr[$('.out1').val()];
      last_st_nm = metro_arr[$('.out2').val()];
      if (start_st_nm == last_st_nm) {
        funOut() //station similar
      }
      if (start_st_nm == 313 || last_st_nm == 313 || start_st_nm == 320 || last_st_nm == 320) {
        funOut2() // stantion closed
      }
      fun2(start_st_nm, last_st_nm, metro_arr);
    });
  });
  var b, b1;
  function fun2(start_st_nm, last_st_nm, metro_arr) {
    var a = Math.round(start_st_nm / 100); // number of start line
    b = start_st_nm % 100; // number of start station
    var a1 = Math.round(last_st_nm / 100); // number of start line2
    b1 = last_st_nm % 100; // --
    if (a == a1) {
      //
      fun1way(b, b1, start_st_nm, last_st_nm, metro_arr);
    } else {
      if (a == 1 && a1 == 2) {
        fun1way(b, b1, start_st_nm, 120, metro_arr);
        fun1way(b, b1, 217, last_st_nm, metro_arr);
      }
      if (a == 2 && a1 == 1) {
        fun1way(b, b1, start_st_nm, 217, metro_arr);
        fun1way(b, b1, 120, last_st_nm, metro_arr);
      }
      if (a == 1 && a1 == 3) {
        fun1way(b, b1, start_st_nm, 119, metro_arr);
        fun1way(b, b1, 314, last_st_nm, metro_arr);
      }
      if (a == 3 && a1 == 1) {
        fun1way(b, b1, start_st_nm, 314, metro_arr);
        fun1way(b, b1, 119, last_st_nm, metro_arr);
      }
      if (a == 2 && a1 == 3) {
        fun1way(b, b1, start_st_nm, 118, metro_arr);
        fun1way(b, b1, 315, last_st_nm, metro_arr);
      }
      if (a == 3 && a1 == 2) {
        fun1way(b, b1, start_st_nm, 315, metro_arr);
        fun1way(b, b1, 218, last_st_nm, metro_arr);
      }
    }
  }
  function fun1way(b, b1, start_st_nm, last_st_nm, metro_arr) {
    b = start_st_nm % 100; // first station
    b1 = last_st_nm % 100; // second station
    // if (b = b1) {
    //   i = last_st_nm;
    //   out(i, metro_arr);
    // }
    if (b < b1) {
      for (var i = start_st_nm; i <= last_st_nm; i++) {
        out1(i, metro_arr);
      }
    } else {
      if (b > b1) {
        for (var i = start_st_nm; i >= last_st_nm; i--) {
          out1(i, metro_arr);
        }
      }
    }
  }
  var out = "";
  function out1(i, metro_arr) {
    for (var key in metro_arr) {
      if (metro_arr[key] == i) {
        console.log(key);
        out += '<p>' + key + '</p>'
      }
    }
    document.getElementById('b').innerHTML = out;
  }
  function funOut() {
    alert("Одинаковые станции");
  }
  function funOut2() {
    alert("Станция закрыта!");
  }
});

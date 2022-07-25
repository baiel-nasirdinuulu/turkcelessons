function press() {
  document.getElementById("result").innerHTML = Math.PI;
}
press();

function press1() {
  let x = Math.round(6.7);
  let y = Math.round(6.3);
  document.getElementById("result1").innerHTML = x + "<br>" + y + " ROUND";
}
press1();

function press2() {
  let x = Math.round(7.7);
  let y = Math.round(2.3);
  document.getElementById("result2").innerHTML = Math.pow(x, y) + " pow";
}
press2();

function press3() {
  let x = Math.round(64);

  document.getElementById("result3").innerHTML = Math.sqrt(x) + " sqrt";
}
press3();

function press4() {
  let x = Math.round(-64);

  document.getElementById("result4").innerHTML = Math.abs(x) + " abs";
}
press4();

function press5() {
  let x = Math.round(6.9);
  let a = Math.round(6.1);
  let b = Math.ceil(6.1);
  let c = Math.floor(6.9);

  document.getElementById("result5").innerHTML =
    x + "<br>" + a + "<br>" + b + "<br>" + c;
}
press5();

// Math.PI
// Math.round    tegerektoo
//Math.pow        darajs
//Math.sqrt     root
//abs

//round
//ceil   ustu
//floor  asty

//Math.max
//Math.min

function press() {
  let x;
  x = 9;
  document.getElementById("result").innerHTML = typeof x + "<br>";
  document.getElementById("result1").innerHTML = typeof x.toString();
  document.getElementById("result2").innerHTML = typeof x.valueOf();
}
press();

//.valueOf   number  and  number
//new Number();    valueOf numberge kotorot    objectten umberge kotorot

//parsInt
//Number
//parsFloat

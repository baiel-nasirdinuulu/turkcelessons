function press() {
  document.getElementById("result").innerHTML =
    Number(true) +
    "<br>" +
    Number(false) +
    "<br>" +
    Number("70") +
    "<br>" +
    Number(" 70") +
    "<br>" +
    Number("30 20") +
    "<br>" +
    Number("js");
}
press();

function press2() {
  document.getElementById("result1").innerHTML =
    parseInt(true) +
    "<br>" +
    parseInt(false) +
    "<br>" +
    parseInt("70") +
    "<br>" +
    parseInt(" 70") +
    "<br>" +
    parseInt("30 20") +
    "<br>" +
    parseInt("js") +
    "<br>" +
    parseInt("30 js") +
    "<br>" +
    parseInt("js 20") +
    "<br>" +
    parseInt("5.23") +
    "<br>";
}
press2();

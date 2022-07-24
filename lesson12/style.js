let car = {
  name: "mazda",
  model: "440a",
  color: "grey",
  ageCar: 2021,
  start: function () {
    return this.name + " " + this.model + "jurguzuu";
  },
};
document.getElementById("result").innerHTML = car.start();

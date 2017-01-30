var Car = function (type, model, color) {
    this.carType = type;
    this.carModel = model;
    this.carColor = color;
    this.start = function (callback, car) {
        console.log("I turn the key on in the " + this.carType + " car");
        callback(car);
    };
    this.drive = function (car) {
        console.log("I am driving at  kph" + " in the " + car.carColor + " " + car.carType + " car");
    }
}
var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.drive, oldCar);
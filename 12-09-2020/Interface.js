var OperatingSystem = function (type) {
    console.log('Android ' + type.name + ' has ' + type.language + ' language.');
};
var Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
var setcar = function (type) {
    console.log("it is a " + type.color + " " + type.brand);
};
var car1 = { brand: "BMW", color: "blue" };
setcar(car1);

var first = /** @class */ (function () {
    function first() {
    }
    first.prototype.print = function () {
        console.log(this.name, this.age);
    };
    return first;
}());
var obj = new first();
obj.name = "sourav";
obj.age = 23;
obj.print();

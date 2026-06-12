"use strict";
var x = 10;
console.log(x);
//static type checking:
//inferring the data type of x from the assigned value which is 'number'
//hence no other data type value can be assigned to x
//x = 'joydip'
//strict typing:
//no need to mention the data type in the following line as TS will use type inference to understand the data type of a from the assigned value
var a = 'joydip';
function add(a, b) {
    return (a + b);
}
function invoke(fnRef, x, y) {
    console.log(fnRef(x, y));
}
function call(fnRef, x, y) {
    console.log(fnRef(x, y));
}
invoke(add, 10, 20);
invoke(function (a, b) { return a - b; }, 10, 2);
var value = false;
value = 123;
value = 'joydip';
var anilObj = {
    id: 100,
    name: 'anil',
    basic: 1000,
    da: 2000,
    hra: 3000,
    extra: 4000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra + (this.extra ? this.extra : 0);
    }
};
console.log(anilObj.calculateSalary());

var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
var CommonRepository = /** @class */ (function () {
    function CommonRepository() {
    }
    CommonRepository.prototype.add = function (data) {
        //code   
    };
    return CommonRepository;
}());

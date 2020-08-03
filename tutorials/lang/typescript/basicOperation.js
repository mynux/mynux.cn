"use strict";
exports.__esModule = true;
exports.SayHello = void 0;
var helloWorld = "Hello World";
console.log(helloWorld);
// class demo
var SayHello = /** @class */ (function () {
    function SayHello() {
    }
    SayHello.prototype.say = function () {
        console.log("HelloWorld");
    };
    return SayHello;
}());
exports.SayHello = SayHello;
var hello = new SayHello();
hello.say();
// element type demo.
var whoami = "any type";
console.log(whoami);
var amNumber = 9;
console.log(amNumber);
// array type.
var array = [88];
var arrayGeneric = [99, 0];
console.log(array[0]);
console.log(arrayGeneric[1]);
// enum type.
var Color;
(function (Color) {
    Color[Color["R"] = 0] = "R";
    Color[Color["G"] = 1] = "G";
    Color[Color["B"] = 2] = "B";
})(Color || (Color = {}));
var amRed = Color.R;
console.log(amRed);
var x;
x = 23;
console.log(x);
// function definition.
function funcSayHello() {
    return "say hello function definition";
}
funcSayHello();
/*
 * Function with parameter. ? indicate default parameter, and optional parameter can only after the
 * required one.
 * ... indicated the remain parameter, which we don't know how much to pass.
 */
function funcWithParameter(prefix, suffix) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return prefix + " " + suffix;
}
console.log(funcWithParameter("yes", "i am"));
// anonymous function
var anonymousFunc = function (a, b) {
    return "hello anonymous function " + a + b;
};
console.log(anonymousFunc(1, 3));
// constructor function used as anonymous function
var anotherFunc = new Function("a", "b", "return a*b");
console.log(anotherFunc(3, 9));
// lambda function, it can be used to replace anonymous function in general.
var lambdaFunc = function (x) { return x + 8; };
console.log("lambda function result " + lambdaFunc(1));
lambdaFunc = function (x) {
    return x + 8;
};
lambdaFunc = function (x) { return x + 10; };
console.log(lambdaFunc);
// common class type.
// useful for a lot of lambda operator.
var numClass = new Number(3);
console.log("current value: " + numClass + " max value: " + Number.MAX_VALUE);
console.log("number NaN " + Number.NaN);
var strClass = new String("afa");
strClass = strClass.concat("asdf");
console.log(strClass.length);
var arrayObj = new Array(4);
for (var i = 0; i < 4; i++) {
    arrayObj[i] = "yes" + i;
}
console.log(arrayObj);
// prototype instance.
function protoType(a, b) {
    this.a = a;
    this.b = b;
}
// a new can be used for prototype too.
var addInstance = new protoType("2", "5");
console.log("prototype a: " + addInstance.a);
var strArray = ["Amazon", "Google", "Facebook"];
arrayObj = new Array("Amazon", "Google", "Facebook", "Apple");
console.log(arrayObj);
// multi-dimension array
var mutiDimenArray = [["Amazon", "Google", "Apple"], ["JD", "Baidu", "Huawei"]];
console.log("Multiple dimension arrary demo");
console.log(mutiDimenArray);
var tupleSample = ["Amazon", 10];
tupleSample.push("Google");
tupleSample[1] = "Facebook";
console.log("tuple ele is: " + tupleSample[1]);
// both basic object of Number, String, Array, has so many operator object.
// union types
var unionType;
unionType = "school";
unionType = 12;
var unionArray;

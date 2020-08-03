"use strict";
exports.__esModule = true;
var amazon = {
    name: "Amazon",
    size: 8,
    locate: "Seattle, US",
    techStack: "AWS",
    apply: function () {
        return true;
    }
};
console.log(amazon);
var namelistObj = ["Jason", "12"];
namelistObj["sda"] = 23;
console.log(namelistObj);
// class name and definition.
var Amazon = /** @class */ (function () {
    function Amazon(name, size, locate) {
        this.name = name;
        this.size = size;
        this.locate = locate;
    }
    Amazon.prototype.apply = function () {
        return true;
    };
    return Amazon;
}());
var classSample = new Amazon("Amazon", 10000, "Seattle");
console.log(classSample.apply());
// object namme, which is not a general class instance, but
// just a key-value pair, hash map like structure.
var objectSample = {
    name: "hanmeimei",
    nationality: "China",
    major: "english",
    sayHello: function () { }
};
console.log(objectSample);
objectSample.sayHello = function () {
    console.log("hello generic function template.");
};
objectSample.sayHello();
// declare moodule from third part library.
/// <reference path = "DeclareSample.d.ts" /> 
var obj = new DeclareModuleSample.Calc(); // DOES NOT WORK IN PRESENT.
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));

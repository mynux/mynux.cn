
interface Company {
    name:string,
    size:number,
    locate:string,
    apply():boolean
}

// interface extends

interface TechCompany extends Company {
    techStack: string
}

var amazon : TechCompany = {
    name: "Amazon",
    size: 8,
    locate: "Seattle, US",
    techStack: "AWS",
    apply() : boolean {
        return true;
    }
}

console.log(amazon)

// array list interface
interface namelist {
    [index:number]:string
}

var namelistObj:namelist= ["Jason", "12"]
namelistObj["sda"] = 23
console.log(namelistObj)

// class name and definition.

class Amazon implements TechCompany {
    techStack: string;
    name: string;
    size: number;
    locate: string;
    apply(): boolean {
        return true;
    }

    constructor(name: string, size: number, locate: string) {
        this.name = name;
        this.size = size;
        this.locate = locate;
    }
}

var classSample = new Amazon("Amazon", 10000, "Seattle");
console.log(classSample.apply())

// object namme, which is not a general class instance, but
// just a key-value pair, hash map like structure.

var objectSample = {
    name: "hanmeimei",
    nationality: "China",
    major: "english",
    sayHello: function() {}
}

console.log(objectSample)
objectSample.sayHello = function() {
    console.log("hello generic function template.")
}
objectSample.sayHello();

// namespace
namespace NamespaceCollection {
    // if you want your class can be access outside of the namesapce, use export keyword.
    export interface IInterface{  } 
    export interface Class{ }
}

// import a class from basicOperation module.
import { SayHello } from "./basicOperation";

// declare moodule from third part library.

/// <reference path = "DeclareSample.d.ts" /> 
var obj = new DeclareModuleSample.Calc();   // DOES NOT WORK IN PRESENT.
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));
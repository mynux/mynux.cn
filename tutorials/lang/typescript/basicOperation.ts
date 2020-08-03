const helloWorld : string = "Hello World";
console.log(helloWorld)

// class demo
export class SayHello {
    say() : void {
        console.log("HelloWorld")
    }
}

var hello = new SayHello();
hello.say();


// element type demo.

var whoami : any = "any type"
console.log(whoami)

var amNumber : number = 9
console.log(amNumber)

// array type.
var array : number[] = [88]
var arrayGeneric : Array<number> = [99, 0]
console.log(array[0])
console.log(arrayGeneric[1])

// enum type.
enum Color {R, G, B}
var amRed : Color = Color.R
console.log(amRed)

let x : number | null | undefined
x = 23
console.log(x)

// function definition.
function funcSayHello() : string {
    return "say hello function definition"
}
funcSayHello()

/*
 * Function with parameter. ? indicate default parameter, and optional parameter can only after the
 * required one. 
 * ... indicated the remain parameter, which we don't know how much to pass.
 */
function funcWithParameter(prefix : string, suffix? : string, ...rest : string[]) : string{
    return prefix + " " + suffix
}
console.log(funcWithParameter("yes", "i am"))

// anonymous function

var anonymousFunc = function(a: number, b : number) {
    return "hello anonymous function " + a + b
}
console.log(anonymousFunc(1, 3))

// constructor function used as anonymous function
var anotherFunc = new Function("a", "b", "return a*b");
console.log(anotherFunc(3,9))

// lambda function, it can be used to replace anonymous function in general.
var lambdaFunc = (x : number) => x + 8
console.log("lambda function result " + lambdaFunc(1))

lambdaFunc = (x : number) => {
    return x + 8
}

lambdaFunc = x => x + 10

console.log(lambdaFunc)

// common class type.
// useful for a lot of lambda operator.

var numClass = new Number(3)
console.log("current value: " + numClass + " max value: " + Number.MAX_VALUE)
console.log("number NaN " + Number.NaN)

var strClass = new String("afa")
strClass = strClass.concat("asdf")
console.log(strClass.length)

var arrayObj : string[] = new Array(4)
for(var i=0; i<4; i++) {
    arrayObj[i] = "yes" + i
}
console.log(arrayObj)

// prototype instance.

function protoType(a : string, b : string) {
    this.a = a;
    this.b = b;
}
// a new can be used for prototype too.
var addInstance = new protoType("2", "5")
console.log("prototype a: " + addInstance.a)

var strArray : string[] = ["Amazon", "Google", "Facebook"]

arrayObj = new Array("Amazon", "Google", "Facebook", "Apple")
console.log(arrayObj)

// multi-dimension array

var mutiDimenArray : string[][] = [["Amazon", "Google", "Apple"], ["JD", "Baidu", "Huawei"]];
console.log("Multiple dimension arrary demo")
console.log(mutiDimenArray)

var tupleSample = ["Amazon", 10]
tupleSample.push("Google")
tupleSample[1] = "Facebook"
console.log("tuple ele is: " + tupleSample[1])

// both basic object of Number, String, Array, has so many operator object.

// union types
var unionType : string|number
unionType = "school"
unionType = 12

var unionArray : string[] | number[]
var DeclareSample;  
(function(DeclareSample) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    DeclareSample.Calc = Calc; 
    return Calc; 
})(DeclareSample || (DeclareSample = {})); 
var test = new DeclareSample.Calc();
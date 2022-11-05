// Write a program that calculates the maximum of two given numbers.

console.log(Math.max(-2,-8));

// Write a program that checks if a given number is odd.

function oddOrEven(num){if(num % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}}

oddOrEven(8);

// Write a program that checks if a given number is a three digit long number.

const num1 = 123456;
var digits=(num1.toString().length)
console.log(digits)

if (digits = 3) {
console.log("true");}

else (digits ==! 3)
{console.log("false");}

function sum(a, b) {
    console.log(arguments);
    return a + b;
}

var result = sum(3, 4);
console.log(result);
result = sum(4, 5);
console.log(result);

function sumUpdate() {
    var args = arguments;
    var result = 0;
    
    for(var i = 0; i< args.length; i++) {
       var value = args[i+''];
       console.log(value);
       result += value;
    }

    return result;
}

var sumA = sumUpdate(6, -5, 3, 4, 5);
console.log(sumA)




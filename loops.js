// Exercises loops

// example
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var x = 0; x <= 10; x++) { console.log(x * x); }

// exercise 1

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// exercise 2

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum = sum + x;
    }
}
console.log(sum);

// exercise 3

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('S: '+s + ' P:  ' +p); 

// exercise 4

var x = ['1','A', 'B', "c", "r", true, NaN, undefined];
var result = '';
for (var i=0; i < x.lenght; i++) {
    result= result.concat (x[i]);
}
console.log(result);






// // // exercise 1
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// //exercise 2
// var a = [1, 2, 3, 4, 5];
// for (var i = 0; i < a.length; i++) {
//     var suma = a[i] * a[i] * a[i];
//     console.log(suma);
// }



// // exercise 3

// // var num=5
// // var fact=1;

// // // exercise 4
// // let v = [2,4,6,8,10];
// // let s = 0;
// // for(let i =0; i< v.length; i++) {
// //     s += v[i];
// // }
// // console.log(s);

// // // exercise 5



var a=['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
console.log(a[5], a[9],a[0]);

var a=['ponedeljak', 'utorak', 'sreda', 'cetvrtak', 'petak', 'subota', 'nedelja']
console.log(a[6])

var b= [2, -4, 5, -2, -11];
console.log(b[1],b[3],b[4]);

for (var x=0; x<=15; x++) {
    if (x % 2==0)
    console.log (x +' ' + 'is even');
    else
    console.log (x +' ' + 'is odd');
}


var sum=0

for (var x=0; x<=1000; x++) {
    if ( x % 3 === 0 || x % 5 === 0) {sum+=x;}    
}
console.log(sum);

var int = [1,2,3,4,5,6,7,8,9,10];
var sum =0
var mult=1

for (var i=0; i<int.length; i++) {
    (sum += int[i]);
    (mult *= int[i]);
    }
console.log(sum);
console.log(mult);

var x = ['1','A','B', "c", "r", true, NaN, undefined];
var result='';
for (var i=0; i<x.length; i++) {
    result= result.concat(x[i]);
}
console.log(result);

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];

    for (var i in a) {
        console.log("row " + i);
        for (var j in a[i]) {
            console.log(" " + a[i][j]);
        }
    }
    
    Write a program that outputs the sum of squares of the first 20 numbers.

    var int  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var sum = 0;
    var sq = 0;

    for (var i=0; i<int.length; i++) {
        (sq += int[i]*int[i]);
        (sum += sq);
    }
    console.log(sum);

    var students = [
        ['David', 80],
        ['Marko', 77],
        ['Dany', 88],
        ['John', 95],
        ['Thomas', 68]
    ];
    
    var sumOfMarks = 0;

    for (i=0; i<students.length; i++) {
        sumOfMarks += students[i][1];
    }

    // Create a function that converts color in RGB format to Hex format.
    // Examples:
    // rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0";
    
    function rgbToHex (rgb) {
        var hex = '#';
        for (var key in rgb) {
            var hexValue = rgb[key].toString(16);
            if (hexValue.length == 1) {
                hexValue = '0' + hexValue;
            }
            hex += hexValue;
        }
        return hex;
    }
    
    console.log(rgbToHex({red: 0, green: 128, blue: 192}));
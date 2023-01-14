// var a = 10 * 'a';
// console.log(a);
// var b = '3-2-31';
// console.log(b);
// var c = "hiper";
// console.log(c);
// var d;
// d=3*8+21;
// console.log(d);
// var f;
// f = 1.2;
// var g;
// g= f/1000;
// console.log(g);
// var h;
// h = 60;
// var i;
// i = h * 5;
// var j;
// j = h * 60;
// console.log (i);
// console.log (h);
// console.log (i+h);
// var a;
// a=false;
// console.log(a);
// var b;
// b=true;
// var c;
// c = b++;
// //console.log(c);

// var a; typeof a;
// console.log(a);

// var s = '1s'; s++;

// !!"false";
// console.log(!!"false");

// !!undefined;
// console.log(!!undefined);

// typeof -Infinity;
// console.log(-Infinity);

// 10 % "0";
// console.log(10 % "0");

// undefined == null;
// console.log(undefined== null);

// false === "";
// console.log( false === "" );

// typeof "2E+2";
// console.log( typeof "2E+2" );

// a = 3e+3; a++;
// console.log(a);

// var result = '';
// var a = 3;

// if (a > 2) { result = a + 'is greater than 2'};

// console.log(result);


function findLargest(-5,-2,-6,0,-1;)

console.log(result);




// b

var middle = Math.floor(arr.length / 2);
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < arr[middle]) {
    count++;
  }
}
return count;
}
console.log(countLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

function filterArray(arr, callback) { 
  var filtered = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

console.log(filterArray([1, 2, 9, 2, 1], isOdd));





// implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other

function difference(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    var found = false;
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(a[i]);
    }
  }
  return result;
}

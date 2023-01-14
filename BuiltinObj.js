// Built-in object methods
// 1
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
// Use built-in object methods.

const twice = x =>
  [ x, x ]

console .log
  ([2, 4, 7, 11, -2, 1 ] .flatMap (twice))


// 2
// Write a functional expression that removes all duplicates in a given array.
// Use built-in object methods.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var unique = [...new Set(arr)];
var sorted = unique.sort((a, b) => a - b);
console.log(sorted);


// 3
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function isOdd(arr) {
    return arr.length % 2 !== 0;
  }
  console.log(isOdd([1, 2, 9, 2, 1]));

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function countLessThanMiddle(arr) {
  if (arr.length % 2 === 0) {
    return "Error: Array has an even number of elements";
  }
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


// 4
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function smallestElement(arr) {
  var smallest = arr[0];
  var lastIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      lastIndex = i;
    }
  }
  return { minValue: smallest, minLastIndex: lastIndex };
}
console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));


// 5
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function lessThan(arr, num) {
    var lessThan = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < num) {
        lessThan.push(arr[i]);
      }
    }
    return lessThan;
  }
  console.log(lessThan([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

function startsWith(arr, str) {
    var starts = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        starts.push(arr[i]);
      }
    }
    return starts;
  }
  console.log(startsWith(["JavaScript", "Programming", "fun", "product"], "pro"));

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filter(arr, callback) {
  var filtered = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
console.log(filter([2, 3, 8, -2, 11, 4], function (x) {
  return x < 6;
}));

console.log(filter(["JavaScript", "Programming", "fun", "product"], function (x) {
  return x.toLowerCase().startsWith("pro");
}));

// 6
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

var products = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
    ];

// b. Write a function that calculates the total price of your shopping list.

function totalPrice(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total;
}
console.log(totalPrice(products));

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.

function averagePrice(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return (total / arr.length).toFixed(3);
}
console.log(averagePrice(products));

// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

function mostExpensive(arr) {
    var mostExpensive = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > mostExpensive.price) {
            mostExpensive = arr[i];
        }
    }
    return mostExpensive.name.toUpperCase();
}
console.log(mostExpensive(products));

// 7.
// a. Write a function that checks if a given string is written in all capitals.

function isAllCaps(str) {
    return str === str.toUpperCase();
}
console.log(isAllCaps("Danica"));
console.log(isAllCaps("DANICA"));

// b. Write a function that checks if a given string contains any digits.

function containsDigits(str) {
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            return true;
        }
    }
    return false;
}
console.log(containsDigits("Danica"));
console.log(containsDigits("DANICA87"));

// c. Write a function that checks if a given string is a valid hexadecimal color.

function isHexColor(str) {
    if (str[0] !== "#") {
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        if (isNaN(str[i]) && str[i].toLowerCase() !== "a" && str[i].toLowerCase() !== "b" && str[i].toLowerCase() !== "c" && str[i].toLowerCase() !== "d" && str[i].toLowerCase() !== "e" && str[i].toLowerCase() !== "f") {
            return false;
        }
    }
    return true;
}
console.log(isHexColor("#fff"));
console.log(isHexColor("#fff0"));

// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

function isBetween1900And2018(num) {
    return num >= 1900 && num <= 2018;
}
console.log(isBetween1900And2018(1900));
console.log(isBetween1900And2018(87));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

function validator() {
    return {
        stringValidator: isAllCaps,
        passwordValidator: containsDigits,
        colorValidator: isHexColor,
        yearValidator: isBetween1900And2018
    }
}
console.log(validator().stringValidator("Danica"));
console.log
//Write a program that calculates the maximum of two given numbers.
function maxOutOfTwo(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

console.log(maxOutOfTwo(11, 8));

//Write a program that checks if a given number is odd.
function checkIfIsOdd(a) {
    return a % 2 !== 0;
}

console.log(checkIfIsOdd(3))

//Write a program that checks if a given number is a three digit long number.
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}

//Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))

//Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);

//Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:

function draw(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '*'
    }

    console.log(result);
}

function drawLines() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + '']
        draw(value);
    }
}

drawLines(8, 3, 5)

//7. simillar to 3.
//Write a program that calculates a number of appearances of a given number in a given array.
function calculateAppearances(input, value) {
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (value === input[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(calculateAppearances([3, 4, 1, 8, 7, 1], 1))

//Write a program that calculates the sum of odd elements of a given array. 
function sumOfElements(input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 != 0)
            result += input[i];
    }

    return result;
}

console.log(sumOfElements([4, 3, 1, 8, 7, 1]))

//Write a program that calculates the number of appearances of a letter a in a given string. 
//Modify the program so it calculates the number of both letters a and A.

function sumOfLetterAppearences(inputString, inputLetter) {
    var counter = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() == inputLetter.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

console.log(sumOfLetterAppearences('It\'s a beautiful day', 'i'));

//Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concatenateString(input, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += input;
    }

    return result;
}

console.log(concatenateString('Test', 4))

/Write a function to check whether the input is a string or not.
function isString(input) {
    if (typeof input === 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString(2));

// Write a function to check whether a string is blank or not.
function isBlank(input) {
    if (typeof input === 'string' && input.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank(''));
console.log(isBlank('abc'));

//Write a function that concatenates a given string n times (default is 1).
function repeat(str, count) {
    if (typeof count == 'undefined') {
        count = 1;
    }

    if(count < 1) {
        return '';
    }
    var res = '';
    for (var i = 0; i < count; i++) {
        res += str;   
    }

    return res;
}

console.log(repeat('Ha'));
console.log(repeat('Ha', 2));

//Write a function to count the number of letter occurrences in a string.
function countOcurances(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === letter) {
            count++;
        }
    }
    return count;
 }
 
 var occ = countOcurances('My random string', 'n');
 console.log(occ);

 //Write a function to find the position of the first occurrence of a character in a string. 
 //The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
 function positionOfFirst(inputString, character) {
  
    for (var index = 0; index < inputString.length; index++) {
        var currentCharacter = inputString[index];
        if (currentCharacter === character) {
            return index + 1;
        }
    }
    return -1;
 }
 
 var characterFirstPosition = positionOfFirst('This is input string', 'k');
 console.log(characterFirstPosition);

//  Write a function to find the position of the last occurrence of a character in a string. 
//  The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
function positionOfLast(inputString, character) {
  
    var lastIndex = inputString.length - 1;
   
    for (var index = lastIndex; index >= 0; index--) {
        var currentCharacter = inputString[index];
        if (currentCharacter === character) {
            return index + 1;
        }
    }
    return -1;
 }
 
 var characterFirstPosition = positionOfLast('This is input string', 'i');
 console.log(characterFirstPosition);

// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
function stringIntoArray(inputString) {
    var space = ' '
    var outputArray = [];
 
    for (var index = 0; index < inputString.length; index++) {
        var element = inputString[index];
        if (element === space) {
            outputArray[index] = null;   
        } else {
            outputArray[index] = element;   
        }
    }
 
    return outputArray;
 }
 
 var output = stringIntoArray('This is simple string');
 console.log(output);

//Write a function that accepts a number as a parameter and check if the number is prime or not. 
function isPrimeNumber(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
   
    for (var x = 2; x < num; x++) {
        if (num % x === 0) {
            return false;
        }
    }
   
    return true;
 }
 
 var isPrime = isPrimeNumber(37);
 console.log(isPrime);

 // Write a function that replaces spaces in a string with provided separator. 
 // If separator is not provided, use “-” (dash) as the default separator.
 function replaceSpace(string, sep) {
    var output = '';
    sep = sep || '-';
    for (var index = 0; index < string.length; index++) {
        var element = string[index];
        if (element === ' ') {
            output += sep;
        } else {
            output += element;
        }
    }
 
    return output;
 }
 
 var result = replaceSpace('Random string with space', '%');
 console.log(result);

 // Write a function to get the first n characters and add “...” at the end of newly created string.
 function stringChop(input, size) {
    var output = '';
 
    for (var index = 0; index < input.length; index++) {
        var element = input[index];
        output += element;
        if (index === (size - 1)) {
            output += '...';
            break;
        }
    }
 
    return output;
 }
 
 var result = stringChop('This is long string', 7);
 console.log(result);

 //  Write a function to convert an array of strings into an array of numbers. Filter out all non-numeric values.
 function filterNonNumbers(inputArray) {
    var numArray = [];
    var positionFixer = 0;
   
    for (var index = 0; index < inputArray.length; index++) {
        var element = inputArray[index];
        var number = parseFloat(element);
       
        if (!isNaN(number) && isFinite(number)) {
            numArray[index - positionFixer] = number;
        } else {
            positionFixer++;
        }
    }
 
    return numArray;
 }
 
 var output = filterNonNumbers(['1', '21', undefined, '42', '1e+3', Infinity]);
 console.log(output);

//  Write a function to calculate how many years there are left until retirement based on the year of birth. 
//  Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
function calculateAge(yearOfBirth) {
    var age = parseInt(2022 - yearOfBirth);
    return age;
 }
 
 function isInReitrement(age, gender) {
    gender = gender || 'm'
 
    if (gender === 'm') {
        return age >= 65;
    } else if(gender === 'f') {
        return age >= 60;
    }
 }
 
 function untilRetirement(yearOfBirth, gender) {
    var age = calculateAge(yearOfBirth);
    var gender = gender || 'm';
 
    if (isInReitrement(age, gender)) {
        return 'Person is already in retirement'
    }
 
    if (gender === 'm') {
        return 65 - age;
    } else {
        return 60 - age;
    }
 }
 
 var output = untilRetirement(1989)
 console.log(output);

//  Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
 function humanizeNumber(num) {
       if (typeof num == 'undefined') {
           return;
       }

       if (num % 100 >= 11 && num % 100 <= 13) {
           return num + 'th';
       }

       switch (num % 10) {
           case 1:
               return num + 'st';
           case 2:
               return num + 'nd';
           case 3:
               return num + 'rd';
       }
       return num + 'th';
   }

   // Output
   console.log(humanizeNumber());
   console.log(humanizeNumber(1));
   console.log(humanizeNumber(8));

   // Write a function that reverses a number. The result must be a number.
function reverseNumber(num) {
    num = num + "";
    var output = "";
    var lastIndex = num.length - 1;
 
    for (var index = 0; index < num.length; index++) {
        var element = num[lastIndex - index];
        output += element;
    }
 
    var reversedNum = parseFloat(output);
    return reversedNum;
 }
 
 var result = reverseNumber(98765)
 
 console.log(typeof result);
 console.log(result);

//  Write a function that says whether a number is perfect.
function isPerfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }
 
    if (temp === number && temp !== 0) {
        console.log(number + " is a perfect number.");
    } else {
        console.log(num + " is not a perfect number.");
    }
 }
 
 isPerfect(28);

 // Write a function to find a word within a string.
 function searchWordCount(text, word) {

    var x = 0;
    var y = 0;
 
    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
 }
 
 console.log(searchWordCount('The quick brown fox', 'fox'));
 console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

//  Write a program to find the most frequent item of an array.
function findFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
            }
        }
        m = 0;
    }
 
    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
 }
 
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 console.log(findFrequentItem(arr1));

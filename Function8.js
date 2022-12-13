// Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

// Indexof method

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Danica Mihailovic"));

// drugi metod ne radi

var str=""
function getCount (str) {
    let vowelsCount=0
    const vowels =[a,e,i,o,u,A,E,I,O,U]
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}
getCount (Pakistan)

// Write a function that combines two arrays by alternatingly taking elements.

var a=['a','b','c'] 
var b=[1,2,3] 
var c=[]

function combine (a,b,c) {
    for (var i = 0; i < a.length; i++) {
            c.push(a[i]);
            c.push(b[i]);
        }
        
        console.log(c);
}

combine (a,b,c)

// Write a function that rotates a list by k elements.

let ar  = [1, 2, 3, 4, 5, 6, 7]
let d = 2;
let newAr =[]

function rotate(ar,d,newAr) {
    for (let i=0; i<ar.length; i++) {
        if(i<d) {
         newAr[ar.length-d+i]= ar[i]
        }
        else{
          newAr[i-d]=ar[i]
        }
        }

}

rotate(ar)

// slice varijanta 
let arr = [ 1, 2, 3, 4, 5, 6, 7];
let o = 2;
let array1 = arr.slice(0, o);
let array2 = arr.slice(o, arr.length);
let result = array2.concat(array1);
console.log(result);


  
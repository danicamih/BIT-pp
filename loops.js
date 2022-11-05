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




//ispisi brojeve od 0 do 20
var pocetak = 0;
var kraj = 20;

for(i = pocetak; i <= kraj; i++) {
    console.log(i);
}

for(i = 0; i <= 20; i++) {
    console.log(i);
}

//ispisi brojeve od 20 do 0
for(i = 20; i >= 0; i--) {
    console.log(i);
}

//ispisi sve parne brojeve od 1 do 20
for(i = 1; i<=20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// i = i + 1; - i++
// i = i + 2 - i+=2
// i = i * 2 - i*=2

for(i = 0; i <= 20; i+=2){
    console.log(i);
}

for(i = 0; i <= 20; i+=3) {
    console.log(i);
}

var a = 55;
var b = 5;
var c;
c = a / b;
var d = a % b;

console.log(d);

//ispisi sve negativne brojeve iz niza
var niz = [-2, -5, -250, 0, 34, 99, 15, 2022, -2, -9];
//console.log(prvi_element);
for(i = 0; i < niz.length; i++) {
    console.log(niz[i]);
   
}

//ispisi da li se broj 15 nalazi u nizu i koji je njegov index
var niz = [-2, -5, -250, 0, 34, 99, 15, 2022, -2, -9];
//console.log(niz[4]);
for(i = 0; i < niz.length; i++) {
    if(niz[i] == 15) {
        console.log ('jeste, i njegov index je ' + i);
    } 
}

//odredi zbir svih clanova niza
var niz = [1, 2, 3, 4, 5];
var suma = 0;
var product = 1;

for(i = 0; i < niz.length; i++) {
    suma += niz[i];
    suma = suma + niz[i];
}

console.log('Zbir svih clanova niza je ' + suma);

/* 
    Odrediti proizvod brojeva od 1 do 100 koji su 
    deljivi sa 7, a nisu sa 3
*/

var proizvod = 1;
for(i = 1; i <= 100; i++) {
    if(i % 7 == 0 && i % 3 != 0) {
        //formulu za proizvod ispisati ovde
    }
}
console.log(proizvod);


/* 
    Odrediti sumu kubova neparnih brojeva od 1 do 5;
*/
var suma = 0;
for(i = 0; i <= 5; i++) {
    if(i % 2 == 1) {
        suma = suma + Math.pow(i, 2); //Math.pow(i, 3) = i*i*i
    }
}
console.log(suma);

/* ispisi sve neparne brojeve*/
var babeizabe = [-2, -5, -250, 0, 34, 99, 15, 2022, -2, -9];

for(i = 0; i < babeizabe.length; i++) {
    /*
    if(babeizabe[i] % 2 == 1 || babeizabe[i] % 2 == -1) {
        console.log(babeizabe[i]);
    }
    */
   if(babeizabe[i] % 2 != 0) {
        console.log(babeizabe[i]);
    }
}


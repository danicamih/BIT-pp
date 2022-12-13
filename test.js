var a=12;
var result = 2;

if (a>10) {
    result = result +2;
} else {
    result = result - 2;
}

console.log (result);


var a=10, b=5;
var result = a || b++;
console.log (a,b) ;


var input = 0xA41;
console.log (typeof input);


var x= 10;
var y= 5;
console.log (x + "y="+ x + y);

console.log ([2,3,4]==[2,3,4])

console.log (10 * 'Abc');

console.log (2<3<1);

var x= [1,8,9,9,2]
console.log(x[13]);

console.log (2 > 10 ? 'two' : 5> 3 ? 'five':'three');

console.log("312"===312);

var value= 2;
switch (value) {
    case 2:
        console.log('2');
    case 3:
        console.log('3');

        case '2':
        console.log('Hmmmm');
        break;
    default:
        console.log ('`*`');

}

console.log (2e2 + 1);

var a=4, b=3;
if (a = b) {
    console.log('The numbers are equal')  
}
else {
    console.log('Nope, they aren\'t!')
}

var a= [2,3, 'abc', 11, -7];
console.log (a[a.length -1]);

var a = [ [1, 2, 3] , [4, 5, 6] , 8 [9, 10] ];
a.splice(8);
console.log(a[3][0]);

var n = 10;
n*= 4;
console.log(n);

console.log(2<3+5);

var x = 10;
var y = 5;
console.log(x + "y = " + (x+y));

console.log (typeof typeof 1);
''
var x;
console.log(x);

var array =['s', 'c', 'r', 'i', 'p', 't'];
array.lenght=0;
console.log(array);

function mul(a, b) {
    var result;
    return result;
    result= a*b;
}

var product;
product=mul(4, 5);
console.log(product);

var message = '';
var n = 4;

while (n>=0) {
    message += '*';
    n--;
}

console.log(message);

var result;
var n;

n=4;

switch (n) {
    case 2:
        result = 1;
        break;
    case 4:
        result = 2;
    case 6:
        result = 3;
        break;
    default:
        result = 100;
}

console.log(result);

var s= 'coffee';
s[0]= 'C';
console.log(s);

function f(a,b) {
    return a+b;
}
console.log(f(12));

var array = [];
for (var i=0; i<4; i++) {
    array[i]=2*i;
    }
console.log(array);

function f(a){
    for (var i = 0,  j = a.length -1; i < j ; i++, j--) {
       var tmp = a[i];
         a[i] = a[j];
            a[j] = tmp;
        }
    return a;
    }
    console.log(f(["3", 4, 22, true, -2]));

    function selection (a, b, c) {
        if (a>b && a>c) {
            return a;
        }
        if (b>a && b>c) {
            return b;
        }
        if (c>a && c>b) {
            return c;
        }
    }

    var result = selection(4, 5, 2);
    console.log(result);

    var sum = 0;
    for (var i = 0; i < 10; i++) {
        if (i == 6) {
            continue;
        }
        if (i % 3 == 0) {
            sum++;
        }
    }
    console.log(sum);

    var isBlue = true;
    var isSolid = false;
    console.log(isBlue || isSolid);

    var s ='34abc';
    console.log(parseInt(s));

    var array =[2, 15, 18, -4, 2]
    var result = array[0];

    for (var i = 1; i< array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }

    console.log(result);

    var result;
    var n = 34;

    if ( n%2 ==0) {
        result = n/2;
    }
    else {
        result = n*2;
    }
    console.log(result);

    var s= 'abc';
    console.log(s+s);

    var a= [2, 3, 11];
    a.length = 5;
    console.log(a);

    var s = 'ab34abc';
    console.log(parseInt(s));

    var n = 5;
    var numberOfOdds =0;
    var i=0;

    while (i<=n) {
        if (i%2 ==0) {
            numberOfOdds++;
        }
        i++;
    }
    console.log(numberOfOdds);

    var n = 23;
    n -= 2;
    console.log(n);

    var sum = 0;
    for (var i = 4; i < 8; i= i+1) {
       sum += i;
       console.log(sum);
        }


for (var i=1; i<6; i++) {
    if (i == 3 || i == 4) {
        break;
    }
    console.log(i);
}

function f (a,b) {
    return a+b;
}

var result;
result = f(4,5);
console.log(result);

function f () {}
 
var result;
result = f();
console.log(result);

var isBlue = true;
var isSolid = false;
console.log(isBlue && isSolid);

for (var i = 1; i < 6; I++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(i);
}


var n=10;
console.log(++n);

for ( var i = 3; i>=0; i--) {
    console.log(i);
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        sum++;
    }

    if (i == 8) {
        break;
    }
}
console.log(sum);

function mul (a,b) {
    var result;
    result = a*b;
    return result;
}

var product;
product = mul(4,5);
console.log(product);

var a = 10;
var b = 12;
var tmp;

tmp = a;
a = b;
b = tmp;

console.log(a,b);

function sum () {
    return arguments [0] + arguments [2];
}
var result;
result = sum(2, 5, 11, 'abc');
console.log(result);

var isWriter = true;
console.log (!isWriter);

function mul (a,b) {
    var result;
    result = a*b;
    return result;
}

var product;
product = mul(4);
console.log(product);

var message ='JaVaScRIPT progrAMMing';
var counter = 0;

for (var i = 0; i < message.length; i++) {
    if (message[i] == 'a'|| message[i] == 'A') {
        counter++;
    }
}
console.log(counter);

var s = "JavaScript Programming";
var result = s[3];
console.log(result);

var numbers = [4, 5, 12, 9];
console.log(numbers.length);

function f(a,b) {
    return 1+a+b;
}
var result;
result = f(4,5,32,11);
console.log(result);

var description ='Do the magic';
var s='';

for (var i = description.length -1; i>=0; i--) {
    s = s + description[i];
    
    }
    console.log(s);

    var result;
    var n;

    n=14;

    switch (n) {
        case 2:
            result = 1;
            break;
        case 4:
            result = 2;
            case 6:
                result = 3;
                break;
                default:
                    result =100;
    }

    console.log(result);

  

    var array= [];
    for (var i = 0; i<4; i++) {
        array[2*i]=i;
        array[2*i+1]=i;
    }
    console.log(array);

    var a = [2, 3, 11, 5, 23, 24];
    a.length =2;
    console.log(a);

    for (var i = 0; i<10; i+= 2) {
        console.log(i);
    }

    console.log (2+true);

    var sum = 0;
    for (var i = 0; i<5; i++) {
        sum += i;
        console.log(sum);
    }
// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: 'cappuccino',
    strength: 'medium',
    flavor:'cuban',
    milk: 'yes',
    sugar: 'no',

    effect: function () {
        console.log ('I feel energized');
    } ()

};

console.log(coffee);
console.log(coffee.name);
console.log(coffee['strength']);


// nn. Presentation example

var dog = {
    name: 'Rex',
    talk: function () {
        console.log ('Woof, woof!');
    }()
 };

//  2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.
 
var movie = {
    title: 'Cloud Atlas',
    actors: ['Tom Hanks', 'Halle Berry', 'Jim Broadbent', 'Hugo Weaving', 'Jim Sturgess', 'Doona Bae', 'Ben Whishaw'],
    directors: ['Tom Tykwer', 'Andy Wachowski', 'Lana Wachowski'],
    genre: 'drama',
    popularity: 'high',
};

console.log(movie);
console.log(movie.title);
console.log(movie['actors']);
console.log(movie['directors'][1]);


// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject (description, programmingLanguage, gitRepository, status) {
    var project = {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        status: status,
        printRepository: function () {
            console.log (project.gitRepository);
        },
        isJavaScript: function () {
            if (project.programmingLanguage === 'JavaScript') {
                return true;
            } else {
                return false;
            }
        },
        isDevelopment: function () { 
            if (project.status === 'development') {
                return true;
            } else {
                return false;
            }
        }
    };

    return project;
}

var project1 = createProject ('project1', 'JavaScript', 'JS projects', 'development');
var project2 = createProject ('project2', 'C#', 'C# projects', 'development');
var project3 = createProject ('project3', 'Java', 'Java projects', 'development');

console.log(project1);
// console.log(project2);
// console.log(project3);

// console.log(project1.printRepository());
console.log(project1.isDevelopment());
console.log(project1.isJavaScript());


// 4.Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function createRecipe (name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {
    var recipe = {

        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,

        printIngredients: function () {
            console.log (recipe.listOfIngredients);
        },
        isUnder15: function () {
            if (recipe.preparingTime <= 15) {
                return true;
            } else {
                return false;
            }
        },
        changeTypeOfCuisine: function (newTypeOfCuisine) {
            recipe.typeOfCuisine = newTypeOfCuisine;
        },
        deleteIngredient: function (ingredient) {
            // var index = recipe.listOfIngredients.indexOf(ingredient);
            // if (index > -1) {
            //     recipe.listOfIngredients=recipe.listOfIngredients.splice(index, 0);
            // }
            recipe.listOfIngredients = recipe.listOfIngredients.filter(function(item){
                return item != ingredient;
            });
        }
    };

    return recipe;
}

var recipe1 = createRecipe ('recipe1', 'italian', 3, ['pasta', 'tomato sauce', 'cheese'], 30, 'cook pasta, add tomato sauce and cheese');
var recipe2 = createRecipe ('recipe2', 'indian', 5, ['rice', 'chicken', 'curry'], 60, 'cook rice, add chicken and curry');

console.log(recipe1);
console.log(recipe2);

recipe1.printIngredients();
console.log(recipe1.isUnder15());

recipe1.changeTypeOfCuisine('french');
console.log(recipe1.typeOfCuisine);

recipe1.deleteIngredient('pasta');
console.log(recipe1);

// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
//     "product": "Milk",
//     "quantity": "1l",
//     "price": 1.50
// }

var groceries = [
    {
        product: 'milk',
        quantity: '1l',
        price: 1.50
    },
    {
        product: 'bread',
        quantity: '500g',
        price: 1.00
    },
    {
        product: 'cheese',
        quantity: '200g',
        price: 3.00
    }
];

function calculateTotalPrice (groceries) {
    var totalPrice = 0;
    for (var i = 0; i < groceries.length; i++) {
        totalPrice += groceries[i].price;
    }
    return totalPrice;
}

console.log(calculateTotalPrice(groceries));

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns "The most expensive
// one is the {name of jewelry piece}";.
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},
// …])
// - The most expensive one is the diamond Ring.

var jewelry = [
    {name: 'goldWatch' , price: 250},
    {name: 'diamondRing' , price: 1200},
    {name: 'goldNecklace' , price: 500},];

function mostExpensive (jewelry) {
    var mostExpensive = jewelry[0];
    for (var i = 0; i < jewelry.length; i++) {
        if (jewelry[i].price > mostExpensive.price) {
            mostExpensive = jewelry[i];
        }
    }
    return 'The most expensive one is the ' + mostExpensive.name;
}

console.log(mostExpensive(jewelry));

// Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.
// Examples:
// mapLetters('dodo') ➞ { d: [0, 2], o: [1, 3] }
// mapLetters('froggy') ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters('grapes') ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters (word) {
    var letters = {};
    for (var i = 0; i < word.length; i++) {
        if (!letters[word[i]]) {
            letters[word[i]] = [];
        }
        letters[word[i]].push(i);
    }
    return letters;
}

console.log(mapLetters('dodo'));
console.log(mapLetters('froggy'));
console.log(mapLetters('grapes'));

    // And who cursed the most in the fight between you and your spouse? Given an object
// with three rounds, with nested objects as your scores per round, return a string of who
// cursed the most: If you, return 'ME!' If your spouse, return 'SPOUSE!'; If a draw, return
// 'DRAW!';
// Examples:
// determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
// { me: 0, spouse: 10, }]) ➞ 'DRAW!'
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,
// spouse: 10}]) ➞ 'ME!';
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10,
// spouse: 55}]) ➞ 'SPOUSE!';

function determineWhoCursedTheMost (rounds) {
    var me = 0;
    var spouse = 0;

    for (var i = 0; i < rounds.length; i++) {
        if (rounds[i].me > rounds[i].spouse) {
            me++;
        } else if (rounds[i].me < rounds[i].spouse) {
            spouse++;
        }
    }
    if (me > spouse) {
        return 'ME!';
    } else if (me < spouse) {
        return 'SPOUSE!';
    } else {
        return 'DRAW!';
    }
}

console.log(determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 }, { me: 0, spouse: 10, }]));

// Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0";



// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks
// down the most efficient way that change can be made using USD quarters, dimes,
// nickels and pennies. Your function should return an object.
// Coin Value
// Penny 0.01
// Nickel 0.05
// Dime 0.10
// Quarter 0.25

// Examples:
// makeChange(47) ➞ { 'q': 1, 'd': 2, 'n': 0, 'p': 2 }
// makeChange(24) ➞ { 'q': 0, 'd': 2, 'n': 0, 'p': 4 }
// makeChange(92) ➞ {'q': 3, 'd': 1, 'n': 1, 'p': 2 }

function makeChange (amount) {
    var change = {};
    var coins = {
        'q': 0.25,
        'd': 0.10,
        'n': 0.05,
        'p': 0.01
    };
    for (var key in coins) {
        change[key] = Math.floor(amount / coins[key]);
        amount %= coins[key];
    }
    return change;
}

console.log(makeChange(47));

// Create a function that takes an array of objects like { name:"John", notes: [3, 5, 4]} and
// returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an
// empty array) then let's assume avgNote: 0.
// Examples:
// [
// { name: "John", notes: [3, 5, 4]}
// ]
// ➞
// [
// { name: "John", avgNote: 4 }
// ]

function avgNote (students) {
    for (var i = 0; i < students.length; i++) {
        var sum = 0;
        for (var j = 0; j < students[i].notes.length; j++) {
            sum += students[i].notes[j];
        }
        students[i].avgNote = sum / students[i].notes.length;
    }
    return students;
}

console.log(avgNote([{name: 'John', notes: [3, 5, 4]}]));
console.log(avgNote([{name: 'John', notes: [3, 5, 4]}, {name: 'Jane', notes: [4, 5, 6]}]));

// Given an object with students and the grades that they made on the tests that they
// took, determine which student has the best Test Average. The key will be the student's
// name and the value will be an array of their grades. You will only have to return the
// student's name. You do not need to return their Test Average.
// getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70,
// 80]}…]) ➞ 'John' // John's avg = 90 // Bob's avg = 83.33

function getBestStudent (students) {
    var bestStudent = '';
    var bestAvg = 0;
    for (var i = 0; i < students.length; i++) {
        var sum = 0;
        for (var j = 0; j < students[i].grades.length; j++) {
            sum += students[i].grades[j];
        }
        var avg = sum / students[i].grades.length;
        if (avg > bestAvg) {
            bestAvg = avg;
            bestStudent = students[i].name;
        }
    }
    return bestStudent;
}

console.log(getBestStudent([{name: 'John', grades: [100, 90, 80]}, {name: 'Bob', grades: [100, 70, 80]}]));

// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all
// code written in the file follows strict mode.
// Create an anonymous immediately-invoking function that will hold the main execution of all
// program calls. Writing a simple command console.log(“Hi”) inside this function and running
// the code should output “Hi“ in the console.
// Create constructor functions with properties representing the following “things”:
// ● Product - product id (random number of 5 digits generated on every product creation),
// name, price (with 2 decimal places), expiration date
// ● ShoppingBag - a list of products (initially empty; function constructor does not have any
// input parameters)
// Add getInfo method to Product. It should return a formatted string containing product code
// (the first and last letter of the name together with the product id), name and price.
// 'Banana'; BA32784, Banana, 129.31
// Add addProduct method to ShoppingBag. It should receive a Product and add it to the
// product list. You can add a product to the list only if it has a valid expiration date.
// Add a method to ShoppingBag that calculates the average product price of products in your
// product list and prints out this value with the precision of three decimals.
// Add getMostExpensive method that finds the most expensive product and prints out its info.
// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
// in the shopping bag list.
// Create a constructor function with properties representing the following:
// ● PaymentCard - account balance (number with 2 decimal places), active or inactive status,
// valid until date
// Create checkoutAndBuy function which receives shopping bag and payment card and prints if
// the purchase is successful or not. Purchase is successful only if the amount on the card is greater
// or equal to the total price of products in the shopping bag. If there is not enough money, print out
// the amount that is missing to complete the purchase.

"use strict";

(function () {
    function Product(name, price, expirationDate) {
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);
        this.getInfo = function () {
            var firstLetter = this.name[0];
            var lastLetter = this.name[this.name.length - 1];
            var code = firstLetter + lastLetter + this.id;
            return code + ", " + this.name + ", " + this.price;
        }
    }

    var bread = new Product('bread', 180, '3/08/2023');
    var fruit = new Product('apple', 238, '2/02/2023');
    var dessert = new Product('donut', 150, '12/02/2023');
    var drink = new Product('juice', 120, '5/02/2023');
    var meat = new Product('chicken', 300, '1/02/2023');
    var vegetables = new Product('tomato', 100, '1/04/2023');
    var cheese = new Product('cheese', 200, '1/03/2023');

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (product.expirationDate > new Date()) {
                this.listOfProducts.push(product);
            }
        }
        console.log(this.listOfProducts)

        this.averagePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += parseFloat(this.listOfProducts[i].price);
            }
            return (sum / this.listOfProducts.length).toFixed(3);
        }
        this.getMostExpensive = function () {
            var mostExpensive = this.listOfProducts[0];
            for (var i = 0; i < this.listOfProducts.length; i++) {

                if (mostExpensive.price < this.listOfProducts[i].price) {
                    mostExpensive = this.listOfProducts[i];
                }
            }
            return mostExpensive.getInfo();
        }
        this.calculateTotalPrice = function () {
            var sum = 0;

            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += parseFloat(this.listOfProducts[i].price);
            }

            return sum;
        }
    }
    console.log('Hi');
    console.log(bread.getInfo());
    console.log(fruit.getInfo());
    console.log(dessert.getInfo());
    console.log(drink.getInfo());
    console.log(meat.getInfo());
    console.log(vegetables.getInfo());
    console.log(cheese.getInfo());

    var shoppingBag = new ShoppingBag();
    shoppingBag.addProduct(bread);
    shoppingBag.addProduct(fruit);
    shoppingBag.addProduct(dessert);
    shoppingBag.addProduct(drink);
    shoppingBag.addProduct(meat);
    shoppingBag.addProduct(vegetables);
    shoppingBag.addProduct(cheese);

    console.log(shoppingBag.listOfProducts);
    console.log(shoppingBag.averagePrice());
    console.log(shoppingBag.getMostExpensive());
    console.log(shoppingBag.calculateTotalPrice());

    function PaymentCard(balance, status, validUntil) {
        this.balance = parseFloat(balance.toFixed(2));
        this.status = status;
        this.validUntil = new Date(validUntil);
    }

    var paymentCard = new PaymentCard(1000, 'active', '12/12/2023');

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (paymentCard.balance >= shoppingBag.calculateTotalPrice()) {
            console.log('Purchase is successful');
        } else {
            console.log('Purchase is not successful');
            console.log('You need ' + (shoppingBag.calculateTotalPrice() - paymentCard.balance) + ' to complete the purchase');
        }
    }

    checkoutAndBuy(shoppingBag, paymentCard);


})();
/**
 * Created by jcurry on 11/5/13.
 */
// Problem: Dog Years

// Givens

var humanYears = 5;

// Result Variable

var dogYears = humanYears * 7;

// Result to Print

console.log("Sparky is " + humanYears + " human years old which is " + dogYears + " in dog years.");


// Problem: Slice of Pie part 1

// Givens

var slicesPerPizza = 8;
var peopleAtParty = 30;
var numberOfPizzas = 8;

// Result Variable

var slicesPerPerson = slicesPerPizza * numberOfPizzas / peopleAtParty;

// Result to Print

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");


// Problem: Slice of Pie part 2

// Givens

// Use variables from previous problem

// Result Variable

var sparkysPizza = slicesPerPizza * numberOfPizzas % peopleAtParty;

// Result to Print

console.log("Sparky got " + sparkysPizza + " slices of pizza.");


// Problem: Average Shopping Bill

// Givens

var groceryBill = [101.77, 89.73, 66.79, 89.41, 110.52];

// Result Variable

var totalCost = groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4];
var averagePerWeek = (groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4]) / 5;

// Result to Print

console.log("You have spent a total of $" + totalCost + " on groceries over 5 weeks. That is an average of $" + averagePerWeek + " per week.");


// Problem: Discounts

// Givens

var originalPrice = 50;
var discountPercent = 15;
var saleItem = "Limited Edition Grand Theft Auto IV";
var salesTaxPercent = 10;

// Result Variable

var priceNoTax = originalPrice - (discountPercent / 100 * originalPrice);
var priceWithTax = originalPrice - (discountPercent / 100) * originalPrice + (salesTaxPercent / 100) * priceNoTax;

// Result to Print

console.log("Your " + saleItem + " was originally $" + originalPrice + " buf after a " + discountPercent + "% discount, it is now $" + priceNoTax + " without tax, and $" + priceWithTax + " with tax.");


//Declaring variables for the site's budget and the client's budget:
var siteBudget = 10000;
var clientBudget = Number(prompt("The site will likely cost around $" + siteBudget + ". What is the client willing to pay you?"));

//Used a ternary operator to say if the client budget is lower than the siteBudget, to find a new client. Else, get to work.
console.log = clientBudget < siteBudget ? "Find a new client." : "Sounds good. Get to work.";

//Validation
if (clientBudget === ""){
	console.log("Please do not leave field blank. Try again.");
}
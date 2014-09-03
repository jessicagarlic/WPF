/*var fruitBowl = new Array;

fruitBowl[0] = "pear";

var fruitOne = prompt("Name a fruit!");*/

//set up an array
var fruit = [fruitOne, "pear", "apple", "banana"];

//call the array
console.log(fruit);

//change an item in the array
fruit[0] = "pear";

//call one item from the array using the index
console.log(fruit[2]);

//use dot syntax (period) to find the length of the array
console.log(fruit.length);

//create a var to store the number of pears
var numPears = 0;

//use if statements to check items in the array
if(fruit[0] === "pear"){//check to see if item 1 is a pear
	numPears ++; 	//If it is a pear, add to numPears
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");	
}
///////////////////
if(fruit[1] === "pear"){//check to see if item 1 is a pear
	numPears ++; 	//If it is a pear, add to numPears
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");	
}
///////////////////
if(fruit[2] === "pear"){//check to see if item 1 is a pear
	numPears ++; 	//If it is a pear, add to numPears
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");	
}
///////////////////
if(fruit[3] === "pear"){//check to see if item 1 is a pear
	numPears ++; 	//If it is a pear, add to numPears
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");	
}

console.log(numPears);
//ask the name of the fruit owner
var name = prompt("what is your name");

//validate the prompt
if(name === ""){
	//if name is blank, then re-prompt the user for their name
	name = prompt("Please enter your name!");
}
	
	
//how many pears are in the bowl?
console.log("Hello " + name + ", you have " + numPears + " pears in your bowl");


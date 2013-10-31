
var hunger = prompt('Is your dog hungry? yes/no');


if(hunger === 'yes'){
        var dogWeight = prompt('How many lbs does your dog weigh?');
      
}else if(hunger === 'no'){
        console.log("Maybe later then...");
}else{
        console.log("You must answer yes or no to continue");
}
var incr = 50;
var totalFood=feed(Number(dogWeight), incr);

function feed(weight, increment){
        var food = weight / increment;
        return food;
}
console.log('You should give your dog ' + totalFood  + ' cups of food.' );

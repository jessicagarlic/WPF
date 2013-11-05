var yourAge = prompt("How old are you?"); //this variable represents your age.
var phoneAge = prompt("How old is your phone?  Please enter the number of years you have had your current wireless device."); //this variable represents how long the user has had their current wireless phone.
var contractAge = prompt("How long have you been in your current wireless contract?  Please enter the number of years."); //this variable represents how long the user has been in their current wireless contract.

var phoneUpgrade = function(yourAge, phoneAge, contractAge){ //this variable represents the "anonymous" function used to determine whether or not the user is eligible for a wireless phone upgrade.
        var YourAge = 18; //this variable represents the minimum age required is 18 years old. 
        var phoneAge = 2; //this variable represents the minimum phone age is 2 years old.
        var contractAge = 2; //this variable represents the minimum contract age is 2 years.
        var upgrade = yourAge && phoneAge && contractAge; //this variable represents that variables yourAge, phoneAge, and contractAge all have to be true in order for an upgrade to be available.
        return upgrade; //this represents the "finished product" of the function
}

phoneUpgrade(); //this represents the invocation of the function
if(yourAge === ""|| phoneAge === ""|| contractAge === ""){ //this if statement contains the validation statement for the input variables meaning that this statement checks to ensure that the variables are not left blank.  If it is blank, an error alert is produced.
        console.log("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
        alert("Please enter valid amounts."); //this is the alert if the clients variable is left blank.
}else if(yourAge < 18 && phoneAge >= 2 && contractAge >= 2){ //this else if statement contains the required variables to produce either an eligible or ineligible phone upgrade answer.
        console.log("You are not eligible for a free phone upgrade."); //this is the printout of the negative eligibility statement
        alert("You are not eligible for a free phone upgrade."); //this is the alert of the negative eligibility statement
}else if(phoneUpgrade < yourAge && phoneAge < 2 && contractAge < 2){ //this else if statement contains the required variables to produce either an eligible or ineligible phone upgrade answer.
        console.log("You are not eligible for a free phone upgrade."); //this is the printout of the negative eligibility statement
        alert("You are not eligible for a free phone upgrade."); //this is the alert of the negative eligibility statement
}else if(phoneUpgrade >= yourAge && phoneAge >= 2 && contractAge >= 2){ //this else if statement contains the required variables to produce either an eligible or ineligible phone upgrade answer.
        console.log("You are eligible for a free phone upgrade."); //this is the printout of the positive eligibility statement
        alert("You are eligible for a free phone upgrade."); //this is the alert of the positive eligibility statement
}else if(phoneUpgrade >= yourAge && phoneAge >= 2 && contractAge < 2){ //this else if statement contains the required variables to produce either an eligible, optional, or ineligible phone upgrade answer.
        console.log("You are eligible for $100 off of a new phone."); //this is the printout of the optional eligibility statement
        alert("You are eligible for eligible for $100 off of a new phone."); //this is the alert of the optional eligibility statement
}else if(phoneUpgrade >= yourAge && phoneAge < 2 && contractAge < 2){ //this else if statement contains the required variables to produce either an eligible, optional, or ineligible phone upgrade answer.
        console.log("You are eligible for $100 off of a new phone."); //this is the printout of the optional eligibility statement
        alert("You are eligible for eligible for $100 off of a new phone."); //this is the alert of the optional eligibility statement
}else if(phoneUpgrade >= yourAge && phoneAge < 2 && contractAge >= 2){ //this else if statement contains the required variables to produce either an eligible, optional, or ineligible phone upgrade answer.
        console.log("You are eligible for $100 off of a new phone."); //this is the printout of the optional eligibility statement
        alert("You are eligible for eligible for $100 off of a new phone."); //this is the alert of the optional eligibility statement
}else{ //this else statement encompasses any other combination of information input that does not complete an already written option.
        console.log("You are not eligable for an upgrade"); //this is the printout of the ineligible upgrade answer.
        alert("You are not eligable for an upgrade."); //this is the alert of the ineligible upgrade answer.
}
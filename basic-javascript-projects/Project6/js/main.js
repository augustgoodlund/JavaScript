//ternary operator (conditional 3-part operator that assigns a value to a variable based on a condition) syntax: Name_of_variable = (condition) ? Value_1:Value_2
console.log(Bigger=(5>1) ? "Left number is bigger":"Right number is bigger"); //if it's true that 5 is bigger than 1, display "Left number is bigger".
function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}
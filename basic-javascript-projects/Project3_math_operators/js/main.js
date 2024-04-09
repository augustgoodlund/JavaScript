function addFunction(p1, p2) {
    return p1 + p2;
  }
  function subtractFunction(p1, p2) {
    return p1 - p2;
  }
  function multiplyFunction(p1, p2) {
    return p1 * p2;
  }
  function divideFunction(p1, p2) {
    return p1 / p2;
  }
  
let result = addFunction(4, 3);
document.getElementById("add").innerHTML = result;

let result2 = subtractFunction(4, 3);
document.getElementById("subtract").innerHTML = result2;

let result3 = multiplyFunction(4, 3);
document.getElementById("multiply").innerHTML = result3;

let result4 = divideFunction(4, 3);
document.getElementById("divide").innerHTML = result4;

function more_Math() { //multi-step math problem
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
function modulus_Operator() { //divides and produces the remainder
    var simple_Math2 = 83%5;
    document.getElementById("modOper").innerHTML="When you divide 83 by 5 you have a remainder of: " + simple_Math2;
}
function negation_Operator() { //returns the opposite of the variable
    var x=10;
    document.getElementById("Math").innerHTML=-x;
}
var X=5; //increases by 1 increment
X++;
document.write(X);
var Y=5.25; //reduces by discrete amounts
Y--;
document.write(Y);
window.alert(Math.random()); //returns a random number between 0 and 1
window.alert(Math.random() * 100); //random number between 0 and 100
document.getElementById("power").innerHTML = Math.pow(8,2); //utilizes math object to return a value of x to the power of y
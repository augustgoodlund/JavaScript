
function addFunction() {
document.getElementById("add").innerHTML = 4+3;
}

function subtractFunction() {
  document.getElementById("subtract").innerHTML=4-3;
}

function multiplyFunction() {
  document.getElementById("multiply").innerHTML=4*3;
}

function more_Math() { //multi-step math problem
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML=simple_Math;
}
function modulus_Operator() { //divides and produces the remainder
    var simple_Math2 = 83%5;
    document.getElementById("modOper").innerHTML=simple_Math2;
}
function negation_Operator() { //returns the opposite of the variable
    var x=10;
    document.getElementById("negOper").innerHTML=-x;
}
var X=5; //increases by 1 increment
X++;
document.write(X);
var Y=5.25; //reduces by discrete amounts
Y--;
document.write(Y);
document.write(Math.random()); //returns a random number between 0 and 1
document.write(Math.random() * 100); //random number between 0 and 100
function powOper() {
  document.getElementById("power").innerHTML = Math.pow(8,2); //utilizes math object to return a value of x to the power of y
  }

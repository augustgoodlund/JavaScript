// document.write(typeof "Word"); gives data type of the variable
// document.write("10"+5); data coercion - forces value of the data into the type it chooses
function my_Function1() {
    document.getElementById("Test").innerHTML=0/0; //returns NaN because it isn't a real number
}
function my_Function2() {
    document.getElementById("Test").innerHTML=isNaN('This is a string'); //checks whether something is a number using true/false. this would return 'true' because it is a string, not a number
}
console.log(2E310); //displays "infinity" because the number is too large
console.log(-3E310); //displays negative infinity
console.log(10>2); //displays a boolean "true" because 10 is greater than 0
console.log(2+5); //displays the math problem in the console log
console.log(10==2); //displays true or false depending on if the numbers can be compared.  here it would be "false" in the console log because the two numbers are not equivalent.
console.log(82==="82"); //checks whether the data is of equivalent value AND equivalent type (ex. int and int, or string and string)
console.log(5>2&&10>4); // && || ! are the boolean logical operators used for And, Or, and Not, respectively. In the example, the console log would only display "True" if both 5>2 is true and 10>4 is also true.

document.write(typeof "This is a string which is made of letters"); //in the document, should declare "string"
document.write("30"+10); //in the document, coerces "30" to int 30 and adds 10, should display "40"
document.write(10==5); //in the document, checks whether 10 can be compared to 5, should display "false"
document.write("10"===5); //in the document, checks whether 10 can be compared to 5, and is the same type of data as 5, int
document.write(10>5); //in the document, checks whether 10 is greater than 5, should display "true"
document.write(10<5); //in the document, checks whether 10 is less than 5, should display "false"
document.write(10>5&&5>1); //in the document, checks whether 10 is greater than 5 AND 5 is greater than 1, should display "true"
document.write(10<5||5<1); //in the document, checks whether 10 is less than 5 OR 5 is less than 1, should display "false"
function my_Function() { //names and creates "my_Function"
    document.getElementById("Test").innerHTML=!(10>5); //in the HTML file, creates an Id "Test" which displays whether 10 IS NOT greater than 5, should display "false"
}
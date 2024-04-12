let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
let text2 = ""; //creates a Let variable that is empty, named "text2"
for (let i = 0; i < 10; i++) { //creates a for loop; the variable i is set to 0 originally, then if i is less than 10, increase i by 1
  if (i === 3) { continue; } //creates an if loop; if i can be comparable to 3, then continue
  text2 += "The number is " + i + "<br>"; //print the variable "text" plus the number i and then a line break
}
document.getElementById("continuestatement").innerHTML = text2;
var ages=[2, 10, 18, 20, 13, 15, 30];
//uses the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;
function ageFunction() {
  //use the .some method to iterate through the array of ages and display the result. Once the function gets to 18 in the array it won’t check the rest of the variables in the ages array, as 18 fulfills the function requirement.
  document.getElementById('displayAge').innerHTML=ages.some(checkAge);
}
function full_Sentence() { //creates and names the function
    var part_1="Fry, it’s been years since "; //creates a string variable
    var part_2="medical school, so remind me. "; //creates a string variable
    var part_3="Disemboweling in your species, "; //creates a string variable
    var part_4="fatal or non-fatal?"; //creates a string variable
    var whole_sentence=part_1.concat(part_2, part_3, part_4); //concatenates the variables
    document.getElementById("Concatenate").innerHTML=whole_sentence; //makes an ID for the HTML document
}
function slice_Method() { //creates and names the function
    var Sentence="She's built like a steakhouse, yet handles like a bistro."; //creates a string variable
    var Section=Sentence.slice(19,29); //prints only the characters between 19 and 29 in the string
    document.getElementById("Slice").innerHTML=Section; //makes an ID for the HTML document
}
const sentence = "Bite my shiny metal ass!"; //creates a string variable
document.write(sentence.toUpperCase()); //converts all letters in the string to upper case
function string_Method() { //creates and names the function
    var X=7269; //creates an integer variable X
    document.getElementById("Numbers_to_string").innerHTML=X.toString(); //creates an ID for the HTML document and converts the integer to a string
}
function Precision_Method() { //creates and names the function
    var X=9284.0298745908 //creates an integer variable X
    document.getElementById("Precision").innerHTML=X.toPrecision(10); //creates an ID for the HTML document and clips the number to 10 digits
}
function financial(x) { //creates and names the function and variable x
    return Number.parseFloat(x).toFixed(2); //formats this number using fixed-point notation
  }
  alert(financial(7329.39846)); //creates an alert that displays this number using the new fixed-point notation
function Value_Function(y) { //creates and names the function and variable y
    this.number=y //uses this statement to define y object
}
Value_Function.prototype.valueOf=function() { //creates and names the function
    return this.number; //converts the "this" value to an object and returns the new object
};
const object1=new Value_Function(4); //creates a new object in the function with the value of 4
console.log(object1+3); //in the console log, displays the new value, 7
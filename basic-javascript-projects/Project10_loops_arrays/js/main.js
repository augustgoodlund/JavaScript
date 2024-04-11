function count_To_Ten() { //names and creates the function
    var Digit=""; //creates variable "Digit" with no pre-set data
    var X=1; //sets variable X as int 1
    while(X<11) { //initiates a "while" loop
        Digit += "<br>" + X; //adds a line break between each number as it prints
        X++; //increase X by 1
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit; //creates an ID for the HTML document
}
function Call_Loop() { //names and creates the function
    var Digit=""; //creates variable "Digit" with no pre-set data
    var X=1; //sets variable X as int 1
    while(X<11) { //initiates a "while" loop, while X is less than 11, do the function
        Digit += "<br>" + X; //adds a line break between each number as it prints
        X++; //increase X by 1
    }
    document.getElementById("Loop").innerHTML=Digit; //creates an ID for the HTML document
}
//let text="You see, killbots have a preset kill limit. Knowing their weakness, I sent wave after wave of my own men at them until they reached their limit and shut down."; //creates variable text which is a string. "Let" creates a variable that can have block scope, which means that it is a variable that can be accessed from anywhere in the curly brackets that it's introduced in.
//let length=text.length; //sets variable length as text length
//document.getElementById("text_Length").innerHTML = length; //creates an ID for the HTML document
var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creates an array of variables
var Content=""; //creates variable "Content" which is blank
var Y; //creates variable Y
function for_Loop() { //creates and names the function
    for (Y=0; Y<Instruments.length; Y++) { //creates a for loop; Y is set to 0, as long as Y is less than the instruments.length variable, increase Y by 1
        Content += Instruments[Y] + "<br>"; //line break between each printed instrument name in Instruments array
    }
    document.getElementById("List_of_Instruments").innerHTML=Content; //creates an ID for the HTML document
}
function array_Function() { //creates and names the function
    var Cat_Picture=[]; //creates empty variable Cat_Picture
    Cat_Picture[0] = "sleeping"; //creates a list of objects for an array
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML="In this picture, the cat is " + Cat_Picture[2] + "."; //creates an ID for the HTML document and qualifies the display
}
function constant_function1() { //creates and names the function
    let Musical_Instrument={type:"guitar", brand:"Fender", color:"black"}; //creates a const keyword, which is a constant that can be either local or global. the value of this can change so it's not strictly a constant, but the variable identifier can not be reassigned anymore in this code.
    Musical_Instrument.color="blue"; //adds a data point to Musical_Instrument which changes the color from black to blue
    Musical_Instrument.price="$900"; //adds a data point to Musical_Instrument, "price"
    document.getElementById("Constant1").innerHTML="The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price; //creates an ID for the HTML document and qualifies the text that is displayed
} //if we tried to write "Musical_Instrument='piano'"later in the code, nothing would display, error because this is already a constant; the same as if we tried to assign a reserved word as a variable
function constant_function() {
    const Fruits={type:"apple", color:"red", size:"medium"};
    Fruits.color="green";
    Fruits.ripe="unripe";
    document.getElementById("Constant").innerHTML="I bought an " + Fruits.type + " but it was " + Fruits.ripe + ".";
}
//  let car = { //creates an object using a Let function
//    make: "Dodge", //creates variables with values 
//    model: "Viper",
//    year: "2021",
//    color: "red",
//    description:function() {
//        return "The car is a " + this.year + this.color + this.make + this.model;
//    }
//  };
//  document.getElementById("Car_Object").innerHTML=car.description(); //I get an error message from the Console here: TypeError: Cannot set properties of null (setting 'innerHTML')
let text = ""; //creates a Let variable that is empty, named Text
for (let i = 0; i < 10; i++) { //creates a For loop: if let i is 0, and i is less than 10, increase i by 1
  if (i === 3) { break; } //creates an if loop; if i can be comparable to 3, break out of the loop
  text += "The number is " + i + "<br>"; //print the variable "text" as well as the number i and then a line break
}
let text2 = ""; //creates a Let variable that is empty, named "text2"
for (let i = 0; i < 10; i++) { //creates a for loop; the variable i is set to 0 originally, then if i is less than 10, increase i by 1
  if (i === 3) { continue; } //creates an if loop; if i can be comparable to 3, then continue
  text2 += "The number is " + i + "<br>"; //print the variable "text" plus the number i and then a line break
}
document.getElementById("continuestatement").innerHTML = text2; //creates an ID for the HTML document and prints variable "text"
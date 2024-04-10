//ternary operator (conditional 3-part operator that assigns a value to a variable based on a condition) syntax: Name_of_variable = (condition) ? Value_1:Value_2
console.log(Bigger=(5>1) ? "Left number is bigger":"Right number is bigger"); //if it's true that 5 is bigger than 1, display "Left number is bigger".
function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote + " to vote.";
}
//A “constructor” is a special part of a class (a template for defining an object [item with state and behavior]).The constructor is a special part of the class that describes the default state of any new instance of the class that gets created. In other words, it gives default values for the properties of the class
// "This" keyword, like "var" keyword, is a javascript default. it indicates the object that is the owner of the code.
function Vehicle(Make, Model, Year, Color) { //Vehicle() is the object constructor
    this.Vehicle_Make=Make; //the "this" keyword gets the values of the newly created car object with the use of the "new" keyword. This is useful when you want to create objects because it creates a placeholder of undetermined values until the new object is created from the object constructor.
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red"); //the "new" keyword creates an object, then we define the values for the object
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Breakfast(Fruit, Yogurt, Time) { //creates the class and variables
    this.Breakfast_Fruit=Fruit; //"this" statement which creates a blank object for Fruit variable
    this.Breakfast_Yogurt=Yogurt; //"this" statement which creates a blank object for Yogurt variable
    this.Breakfast_Time=Time; //"this" statement which creates a blank object for Time variable
}

var Berries=new Breakfast("blueberries", "vanilla", "11:00"); //creates a new variable Berries
var Apples=new Breakfast("apples", "coconut", "9:00"); //creates a new variable Apples
var Bananas=new Breakfast("bananas", "raspberry", "10:15"); //creates a new variable Bananas

function breakfastFunction() { //creates an ID for the HTML document as well as a format for the data to be presented in, using strings
    document.getElementById("New_and_This").innerHTML="Today for breakfast I had " + Berries.Breakfast_Fruit + " with " + Berries.Breakfast_Yogurt + " yogurt at " + Berries.Breakfast_Time;
}
function count_Function() { //main function
    document.getElementById("Counting").innerHTML=Count(); // ID for the HTML file
    function Count() { // nested inner function
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;} //second nested inner function
        Plus_one();
        return Starting_point; //the output of this code would be "10" -the Plus_One() function is nested
    }
}

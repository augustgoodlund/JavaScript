var X=10; //X is a global variable, it can be accessed from anywhere in the script. Local variables can only be accessed from within the functions that they are in.
function Add_numbers_1() { 
    document.write(20+X+"<br>"); //if X was here, it would be a local variable. If it was, Add_numbers_2 would not display a result.
    Y=30
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();
if (1>2) {
    console.log("The left number is smaller than the number on the right")
} // if statement which displays the text in the console log IF it is TRUE that (left>right)
function get_Date() {
    if (new Date().getHours()<16) { //uses the javascript "get date" method to return the hour in the specified date according to local time, listed as an integer between 0-23.
        document.getElementById("Greeting").innerHTML="Hiya buddy";
    } //if it is before 6pm, script displays "How are you today?" and displays nothing if it is later 
}
function Age_Function() { //initiates and names the function
    Age=document.getElementById("Age").value; //pulls Age value from the input on the HTML document
    if (Age >=18) {
        Vote="You are old enough to vote!"; //displays this text in the document if the input age is greater than, or equal to, 18
    }
    else {
        Vote="You are not old enough to vote!"; //displays this text if the input age is less than 18
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote; //creates ID name
}
function Time_function() { //creates and names the time function
    var Time=new Date().getHours(); //gets the time from viewer's device
    var Reply; //defines behavior of first IF reply: IF the time is between midnight and 12, display the text.
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if(Time >=12==Time<18) { //defines behavior of second IF reply: IF the time is between 12 and 6pm, display the text.
        Reply="It is afternoon.";
    }
    else {
        Reply="It is evening time."; //defines the behavior of all other answers: IF the time is betweem 6pm and midnight, display the text.
    }
    document.getElementById("Time_of_day").innerHTML=Reply; //creates the ID for the HTML page.
}
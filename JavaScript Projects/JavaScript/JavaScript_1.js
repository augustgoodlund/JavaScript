function Fruit_Function() {
    var Fruit_Output;
    var Fruits=document.getElementById("Fruit_Input").value;
    var Fruit_String=" are delicious!";
    switch(Fruits) {
        case "Apples":
            Fruit_Output="Apples" + Fruit_String;
            break;
        case "Blackberries":
            Fruit_Output="Blackberries" + Fruit_String;
            break;
        case "Bananas":
            Fruit_Output="Bananas" + Fruit_String;
            break;
        case "Papayas":
            Fruit_Output="Papayas" + Fruit_String;
            break;
        case "Mangoes":
            Fruit_Output="Mangoes" + Fruit_String;
            break;
        case "Cherries":
            Fruit_Output="Cherries" + Fruit_String;
            break;
        default:
            Fruit_Output="Please enter a fruit exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=Fruit_Output;
}
function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}
const c = document.getElementById("canvas1"); //creates a constant c and gives it an ID that can be linked to HTML
const ctx = c.getContext("2d"); //creates a constant ctx, links it to c, and uses JS "getcontext" keyword, then assigns it the ID "2d"
//ctx.beginPath(); //uses the JS keyword beginPath and links it to ctx
//ctx.arc(95,50,40,0,2*Math.PI); //uses the JS keyword arc, links it to ctx, and gives it a list of values to plot on a line. These points use the value of Pi in the Math function to make a circle.
//ctx.stroke(); //draws a line between the points in CTX
const grd=ctx.createLinearGradient(0, 0, 170, 0)//creates a constant "grd", names and creates a new function createLinearGradient with an RGB value
grd.addColorStop(0, "blue")//creates a starting value for const grd, "blue"
grd.addColorStop(1, "white");//creates an ending value for const grd, "white"
ctx.fillStyle=grd; //fills the area with this function that travles between 0(blue) and 1(white)
ctx.fillRect(20,20,150,100);//fills the canvas
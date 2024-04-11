function count_To_Ten() {
    var Digit="";
    var X=1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit;
}
function Call_Loop() {
    var Digit="";
    var X=1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}
let text="You see, killbots have a preset kill limit. Knowing their weakness, I sent wave after wave of my own men at them until they reached their limit and shut down.";
let length=text.length;
document.getElementById("text_Length").innerHTML = length;
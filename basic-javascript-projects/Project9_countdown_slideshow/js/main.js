//function countdown() { //creates and names the function
//  var seconds=document.getElementById("seconds").value; //creates a new variable "seconds" and assigns it an ID for the HTML document
//
//function tick() { //creates and names the nested inner function
//  seconds=seconds-1; //creates variable with an interval that decreases by 1
//timer.innerHTML=seconds; //sets variable "seconds" as the timer
//    var time=setTimeout(tick, 1000); //the program pauses for 1000ms, 1 second
//    if (seconds==-1) { //IF statement: if the seconds can be comparable to decrease of 1
//        alert("Time's up!");
//        clearTimeout(time);
//        timer.innerHTML="";
//    }
//}
//tick();
//}
let slideIndex=1;
showSlides(slideIndex);
//NEXT/PREV CONTROLS
function plusSlides(n) {
    showSlides(slideIndex +=n);
}
//THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
    showSlides(slideIndex=n);
}
function showSlides(n) {
    let i;
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n<1) {slideIndex=slides.length}
    for (i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
}
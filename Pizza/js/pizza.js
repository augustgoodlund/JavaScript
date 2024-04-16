function getReceipt() {
    //this initializes string so that it can get passed from function to function, growing line by line into a full receipt
    var text1="<h4>You ordered:</h4>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //creates class name as "size"
    for (var i = 0; i < sizeArray.length; i++) { //creates variable i that returns user "size" choice monetary value
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Slice") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal=8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal=10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal=14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal=16;
    }
    runningTotal = sizeTotal; 
    console.log(selectedSize+" = $"+sizeTotal+".00"); //in console log, prints price
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //returns price as a variable that will get passed on to the next function
    getTopping(runningTotal,text1);
};
function getTopping(runningTotal,text1) { //creates and names a function that adds price to base price from previous function when toppings are chosen
    var toppingTotal = 0;
    var selectedTopping=[];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h4>Total: <strong>$"+runningTotal+".00"+"</strong></h4>";
};
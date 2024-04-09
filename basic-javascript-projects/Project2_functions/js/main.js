function myFunction() { //creates and names a function
    var str="Hiya buddy"; //assigns a string to the variable used in the function
    document.getElementById("demo").innerHTML=str; //uses getElementById to link function to HTML document using the id "demo"
  }
  function my2ndFunction() { //creates and names another function
    var sentence="I am learning"; //assigns a string to a variable
    sentence += " a lot from this class!"; //concatenates previous variable with a second string
    document.getElementById("Concatenate").innerHTML=sentence; //links the concatenated strings as a new value to the HTML document
  }
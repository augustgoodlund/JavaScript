//sets object as string and then returns string. ID for HTML is Li1
/*var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
document.getElementById("li1").innerHTML = obj.firstName; //will return "John"
//localstorage - saves info in device
// Set Item
localStorage.setItem("lastname", "Smith");
// Retrieve. ID for the HTML document is "li2"
document.getElementById("li2").innerHTML = localStorage.getItem("lastname"); //will return "Smith"
*/
//this function gets the task from input
function get_todos() {
    //this creates an array of tasks that are inputed
    var todos=new Array;
    //this pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //if the input is not null then JSON.Parse will communicate with the web browser to make the task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//this function adds the input task to the get_todos function array
function add(){
    //this takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //this adds a new task at the end of the array
    todos.push(task);
    //converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
//this function keeps the tasks permanently displayed on the screen
function show() {
    //this sets the task that was retrieved as a variable
    var todos = get_todos();

    //this sets up each task as an unordered list
    var html='<ul>';
    //this displays a task to the list in the order that it is inputed
    for (var i=0; i < todos.length; i++) {
        //this also displays the task as a list and creates a button with the "x"
       // commented this out because I tweaked it line 60 html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //this displays the task as a list
    document.getElementById('todos').innerHTML=html;
}
//this displays the inputed task when the 'Add Item' button is clicked
//document.getElementById('add').addEventListener('click', add);
//this will keep the inputs displayed permanently on the screen
//show();



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Changes CSS to "checked" when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//user double-clicks on heading, it is hidden
function dblclick() {
    var x = document.getElementById("h2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Cannot be empty!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
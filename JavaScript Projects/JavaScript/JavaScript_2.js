function validateForm1() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validateForm2() {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
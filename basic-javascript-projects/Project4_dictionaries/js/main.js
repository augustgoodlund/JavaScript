function myPlants() { //creates and names the dictionary
    var Plant = { //creates and names an object in the dictionary
        Species: "Pearls and Jade Pothos", //adds "Species" key
        Color: "Variegated", //adds "Color" key
        Size: "Large", //adds "Size" key
        Watered: "Yes", //adds "Watered" key
        Repotted: "Yes" //adds "Repotted" key
    };
    delete Plant.Repotted; //deletes "Repotted" key
    document.getElementById("watered").innerHTML=Plant.Watered; //creates an ID for the key "watered" and assigns it a keyword for the HTML file
  }
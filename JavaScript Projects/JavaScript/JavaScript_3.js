function displayType(character) {
    var characterType=character.getAttribute("data-character-type");
    alert(character.innerHTML + " is from " + characterType + "!");
}

//Variables
var growButton = document.getElementById("growButton")
var height;
var character;
var tree;
var spaces;

function clear () {
	window.location.reload()
};

function growTree (event) {
	height = parseFloat(document.getElementById("height").value)
	character = document.getElementById("character").value
	var characterCount = 1
	var spaceCount = height
	if (character.length === 1 && height > 0) {	
		for (var i = 0; i < height; i++) {
			spaces = " ".repeat(spaceCount);
			var characterString = character.repeat(characterCount);
			tree = spaces + characterString;
			console.log(tree);
			spaceCount -= 1;
			characterCount += 2;
		}
	} else {
		alert("Please enter a number greater than 0 for the height and a single character");
		clear();
	}
}

growButton.addEventListener("click", growTree);

document.getElementById("character").onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = growButton.click();
    }
}
document.getElementById("height").onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = growButton.click();
    }
}
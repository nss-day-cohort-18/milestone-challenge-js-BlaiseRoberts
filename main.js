
//Variables
var growButton = document.getElementById("growButton")
var height;
var character;
var tree;
var spaces;

function growTree (event) {
	height = parseInt(document.getElementById("height").value)
	character = document.getElementById("character").value
	var characterCount = 1
	var spaceCount = height
	for (var i = 0; i < height; i++) {
		spaces = " ".repeat(spaceCount);
		var characterString = character.repeat(characterCount);
		tree = spaces + characterString;
		console.log(tree);
		spaceCount -= 1;
		characterCount += 2;
	}
	

}

growButton.addEventListener("click", growTree);

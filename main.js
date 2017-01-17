
//Variables
var growButton = document.getElementById("growButton")
var height;
var character;
var tree = "";
var spaces = "";
var j = 0;
// for (var j = 0; j < height-i; j++) {
// 			 spaces = spaces + "-"
// }

function growTree (event) {
	height = parseInt(document.getElementById("height").value)
	character = document.getElementById("character").value
	for (var i = 0; i < height; i++) {
		height = height-i
		while (j < height-i) {
			 spaces += "-";
			 j++;
		}
		console.log(spaces)
		tree = spaces + character + tree
		console.log(tree)
		tree = character + tree
		
	}
}






growButton.addEventListener("click", growTree)

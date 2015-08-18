//Create boxes
window.onload = function() {

document.body.style.width = "100%";

//Paletter Container
var container = document.createElement("div");
container.style.height = "400px";
container.style.width = "800px";
container.style.border = "1px solid black";
container.classList.add("container");
document.body.appendChild(container); 


//Add boxes
	for (var i =0; i<800;i++){
		var newBox = document.createElement("div");
		newBox.style.height = "20px";
		newBox.style.width = "20px";
		// newBox.style.backgroundColor = "white";
		newBox.style.border = "1px solid black";
		newBox.style.float = "left";
		newBox.style.boxSizing = "border-box";
		document.querySelector(".container").appendChild(newBox);
		newBox.addEventListener("click", turnBlue);
	}

//Add Color Palette
var colorPad = document.createElement("div");
colorPad.style.height = "20px";
colorPad.style.width = "800px";
colorPad.style.border = "1px solid black";
colorPad.style.marginTop = "20px";
document.body.appendChild(colorPad);

function turnBlue() {
	this.style.backgroundColor = "blue";
}
};


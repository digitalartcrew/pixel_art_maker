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
colorPad.id = "colorPad";
colorPad.style.height = "20px";
colorPad.style.width = "800px";
colorPad.style.border = "1px solid black";
colorPad.style.marginTop = "20px";
document.body.appendChild(colorPad);

//
var red = document.createElement("div");
red.style.height = "20px";
red.style.width = "100px";
red.style.float = "left";
red.style.backgroundColor = "red";
document.getElementById("colorPad").appendChild(red);

//Add Red Event Listener
var redPaint = document.getElementById("colorPad").getElementsByTagName("div")[0];
redPaint.addEventListener("click")


var orange = document.createElement("div");
orange.style.height = "20px";
orange.style.width = "100px";
orange.style.float = "left";
orange.style.backgroundColor = "orange";
document.getElementById("colorPad").appendChild(orange);

var yellow = document.createElement("div");
yellow.style.height = "20px";
yellow.style.width = "100px";
yellow.style.float = "left";
yellow.style.backgroundColor = "yellow";
document.getElementById("colorPad").appendChild(yellow);

var green = document.createElement("div");
green.style.height = "20px";
green.style.width = "100px";
green.style.float = "left";
green.style.backgroundColor = "green";
document.getElementById("colorPad").appendChild(green);

var blue = document.createElement("div");
blue.style.height = "20px";
blue.style.width = "100px";
blue.style.float = "left";
blue.style.backgroundColor = "blue";
document.getElementById("colorPad").appendChild(blue);


var purple = document.createElement("div");
purple.style.height = "20px";
purple.style.width = "100px";
purple.style.float = "left";
purple.style.backgroundColor = "purple";
document.getElementById("colorPad").appendChild(purple);

var grey = document.createElement("div");
grey.style.height = "20px";
grey.style.width = "100px";
grey.style.float = "left";
grey.style.backgroundColor = "grey";
document.getElementById("colorPad").appendChild(grey);


var brown = document.createElement("div");
brown.style.height = "20px";
brown.style.width = "100px";
brown.style.float = "left";
brown.style.backgroundColor = "brown";
document.getElementById("colorPad").appendChild(brown);

function turnBlue() {
	this.style.backgroundColor = "blue";
}

function turnRed() {
	this.style.backgroundColor = "red";
}

};


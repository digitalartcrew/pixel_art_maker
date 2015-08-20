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
red.id = "redBox";
red.style.height = "20px";
red.style.width = "100px";
red.style.float = "left";
red.style.backgroundColor = "red";
document.getElementById("colorPad").appendChild(red);
redBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnRed);

}
});



var orange = document.createElement("div");
orange.id = "orangeBox";
orange.style.height = "20px";
orange.style.width = "100px";
orange.style.float = "left";
orange.style.backgroundColor = "orange";
document.getElementById("colorPad").appendChild(orange);
orangeBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnOrange);

}
});

var yellow = document.createElement("div");
yellow.id = "yellowBox";
yellow.style.height = "20px";
yellow.style.width = "100px";
yellow.style.float = "left";
yellow.style.backgroundColor = "yellow";
document.getElementById("colorPad").appendChild(yellow);
yellowBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnYellow);

}
});

var green = document.createElement("div");
green.id = "greenBox";
green.style.height = "20px";
green.style.width = "100px";
green.style.float = "left";
green.style.backgroundColor = "green";
document.getElementById("colorPad").appendChild(green);
greenBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnGreen);

}
});

var blue = document.createElement("div");
blue.id = "blueBox";
blue.style.height = "20px";
blue.style.width = "100px";
blue.style.float = "left";
blue.style.backgroundColor = "blue";
document.getElementById("colorPad").appendChild(blue);
blueBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnBlue);

}
});


var purple = document.createElement("div");
purple.id = "purpleBox";
purple.style.height = "20px";
purple.style.width = "100px";
purple.style.float = "left";
purple.style.backgroundColor = "purple";
document.getElementById("colorPad").appendChild(purple);
purpleBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnPurple);

}
});

var grey = document.createElement("div");
grey.id = "greyBox";
grey.style.height = "20px";
grey.style.width = "100px";
grey.style.float = "left";
grey.style.backgroundColor = "grey";
document.getElementById("colorPad").appendChild(grey);
greyBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnGrey);

}
});


var brown = document.createElement("div");
brown.id = "brownBox";
brown.style.height = "20px";
brown.style.width = "100px";
brown.style.float = "left";
brown.style.backgroundColor = "brown";
document.getElementById("colorPad").appendChild(brown);
brownBox.addEventListener("click", function(){
	var divs = document.querySelectorAll("div");
	for (var i=1; i<801; i++){
	divs[i].removeEventListener("click");
	divs[i].addEventListener("click", turnBrown);

}
});

function turnBlue() {
	this.style.backgroundColor = "blue";
}

function turnRed() {
	this.style.backgroundColor = "red";
}

function turnYellow() {
	this.style.backgroundColor = "yellow";
}

function turnGreen() {
	this.style.backgroundColor = "green";
}

function turnPurple() {
	this.style.backgroundColor = "purple";
}

function turnGrey() {
	this.style.backgroundColor = "grey";
}

function turnBrown() {
	this.style.backgroundColor = "brown";
}

function turnOrange() {
	this.style.backgroundColor = "orange";
}




};


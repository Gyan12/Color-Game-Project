var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
	squares[i].style.background=colors[i];
	}
	else{
	squares[i].style.background="none";
	}}
	});

hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];

	squares[i].style.background="block";
	}
});
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares)  
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
	squares[i].style.background=colors[i];
	}
	else{
	squares[i].style.background="none";
	}
	}
	h1.style.background="steelblue";
	});

colorDisplay.textContent=pickedColor;
function func(){
	var clickedColor=this.style.background;
	console.log(clickedColor);
	if(clickedColor===pickedColor)
	{
	messageDisplay.textContent="Correct";
	changeColors(clickedColor);
	h1.style.background=clickedColor;
	resetButton.textContent="play Again?";
	}
	else
	{
	this.style.background= "#232323";
	messageDisplay.textContent="try again";
	
	}
}
for(var i=0 ; i<squares.length ;i++)
{
	//add initital colors to square
	squares[i].style.background=colors[i];
	
	//add quickListeners to square
	squares[i].addEventListener("click",func);
}
function changeColors(color){
	for(var i=0;i<colors .length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random]
	}
function generateRandomColors(num)
{
	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0;i<num;i++){
	arr.push(randomColor())
	}
	//get random color and push into arr
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 -255
	var r=Math.floor(Math.random()*256);
	//pick a "green" form 0-255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	}

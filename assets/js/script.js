var c = document.getElementById( "courbe" );
var ctx = c.getContext("2d");
// Fond
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,380);
ctx.lineTo(380,380);
ctx.lineTo(380,20);
ctx.closePath();
ctx.fillStyle = "#0000FF";
ctx.fill();

// rond1
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,30,250,200);
ctx.stroke();
ctx.fill();
// rond2
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "#E0E1F3";
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(50,250);
ctx.quadraticCurveTo(200,80,350,250);
ctx.stroke();
ctx.fill();
// rond3
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "#E0E1F3";
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(50,250);
ctx.quadraticCurveTo(200,380,350,250);
ctx.stroke();
ctx.fill();

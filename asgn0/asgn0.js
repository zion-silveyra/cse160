// DrawTriangle.js (c) 2012 matsuda

var ctx;

function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  var drawButton = document.getElementById('draw');
  drawButton.onclick = handleDrawEvent;

  // Get the rendering context for 2DCG
  ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color

  var v1 = new Vector3([2.25,2.25]);
  drawVector(v1, "red");
}

function drawVector(v, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(200,200);
  ctx.lineTo(200+(20*v.elements[0]), 200-(20*v.elements[1]));
  ctx.stroke();

}

function handleDrawEvent() {
  let v1x = parseFloat(document.getElementById("v1x").value);
  let v1y = parseFloat(document.getElementById("v1y").value);
  var v1 = new Vector3([v1x,v1y]);

  let v2x = parseFloat(document.getElementById("v2x").value);
  let v2y = parseFloat(document.getElementById("v2y").value);
  var v2 = new Vector3([v2x,v2y]);

  ctx.fillRect(0,0,400,400);

  drawVector(v1, "red");
  drawVector(v2, "blue");
}
var ctx;
var v1, v2;

function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  var drawButton = document.getElementById('draw-vectors');
  drawButton.onclick = handleDrawEvent;

  var drawOpButton = document.getElementById('draw-operation');
  drawOpButton.onclick = handleDrawOperationEvent;
  
  var opDropdown = document.getElementById('op');
  opDropdown.onchange = handleDropdown;

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

function handleDropdown() {
  var scalarMenu = document.getElementById('scalar-menu');

  switch (document.getElementById('op').value) {
    case 'mul':
      scalarMenu.style.display = 'block';
      break;
    case 'div':
      scalarMenu.style.display = 'block';
      break;
    default:
      scalarMenu.style.display = 'none';
      break;
  }
}

function handleDrawEvent() {
  let v1x = parseFloat(document.getElementById("v1x").value);
  let v1y = parseFloat(document.getElementById("v1y").value);
  v1 = new Vector3([v1x,v1y]);

  let v2x = parseFloat(document.getElementById("v2x").value);
  let v2y = parseFloat(document.getElementById("v2y").value);
  v2 = new Vector3([v2x,v2y]);

  ctx.fillRect(0,0,400,400);

  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  handleDrawEvent();

  var v3 = new Vector3();
  var v4 = new Vector3();

  v3.set(v1);
  v4.set(v2);

  switch (document.getElementById('op').value) {
    case 'add':
      v3.add(v2);
      drawVector(v3, "green")
      break;
    case 'sub':
      v3.sub(v2);
      drawVector(v3, "green")
      break;
    case 'mul':
      v3.mul(parseFloat(document.getElementById('scalar-input').value));
      v4.mul(parseFloat(document.getElementById('scalar-input').value));
      drawVector(v3, "green")
      drawVector(v4, "green")
      break;
    case 'div':
      v3.div(parseFloat(document.getElementById('scalar-input').value));
      v4.div(parseFloat(document.getElementById('scalar-input').value));
      drawVector(v3, "green")
      drawVector(v4, "green")
      break;
  }


  
}
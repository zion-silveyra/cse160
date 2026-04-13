var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  uniform float u_PointSize;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = u_PointSize;
  }`;

var FSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }`;

const POINT=0;
const TRIANGLE=1;
const CIRCLE=2;

var canvas;
var ctx;
var gl;
var a_Position;
var u_FragColor;
var u_PointSize;
let g_selectedColor = [1.0,1.0,1.0,1.0];
let g_selectedSize = 10.0;
var g_shapesList = [];
var g_selectedShape = POINT;
var g_selectedSegments = 10;

function addHTMLInputActions() {
  document.getElementById("green").onclick = function() {
    g_selectedColor = [0.0,1.0,0.0,1.0];
  }
  document.getElementById("red").onclick = function() {
    g_selectedColor = [1.0,0.0,0.0,1.0];
  }
  document.getElementById("clear").onclick = function() {
    g_shapesList = [];
    renderAllShapes();
  }
  document.getElementById("point").onclick = function() {
    g_selectedShape = POINT;
  }
  document.getElementById("triangle").onclick = function() {
    g_selectedShape = TRIANGLE;
  }
  document.getElementById("circle").onclick = function() {
    g_selectedShape = CIRCLE;
  }
  document.getElementById("redSlide").addEventListener('mouseup', function() {
    g_selectedColor[0] = this.value/100;
  });
  document.getElementById("greenSlide").addEventListener('mouseup', function() {
    g_selectedColor[1] = this.value/100;
  });
  document.getElementById("blueSlide").addEventListener('mouseup', function() {
    g_selectedColor[2] = this.value/100;
  });
  document.getElementById("sizeSlide").addEventListener('mouseup', function() {
    g_selectedSize = this.value;
  });
  document.getElementById("segmentsSlide").addEventListener('mouseup', function() {
    g_selectedSegments = this.value;
  });
}

function setupGL() {
  canvas = document.getElementById('webgl');

  gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }
}

function setupGLVars() {
  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }
  
  u_PointSize = gl.getUniformLocation(gl.program, 'u_PointSize');
  if (!u_PointSize) {
    console.log('Failed to get the storage location of u_PointSize');
    return;
  }
}

function main() {
  setupGL();
  setupGLVars();
  addHTMLInputActions();

  canvas.onclick = function(ev){ click(ev) };
  canvas.onmousemove = function(ev){ if (ev.buttons == 1) click(ev) };

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  let eandi = new EmergencyAndI();
  eandi.render();
}

function click(ev) {
  [x,y] = getEventCoordinatesToGL(ev)
  let point;
  if (g_selectedShape == POINT) {
    point = new Point();
  } else if (g_selectedShape == TRIANGLE) {
    point = new Triangle();
  } else {
    point = new Circle();
    point.segments = g_selectedSegments;
  }
  point.position = [x,y];
  point.color = g_selectedColor.slice();
  point.size = g_selectedSize;

  g_shapesList.push(point);

  renderAllShapes();
}

function getEventCoordinatesToGL(ev) {
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer
  var rect = ev.target.getBoundingClientRect();

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  return ([x, y]);
}

function renderAllShapes() {
  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_shapesList.length;
  for(var i = 0; i < len; i++) {
    g_shapesList[i].render();
  }
}
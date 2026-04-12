// This class is used to paint triangles with vertices specified in
// screen coordinate system (top-left at (0,0)) and hex colors in WebGL

class CTriangle {
  constructor(p1, p2, p3, html_color) {
    this.type="ctriangle";

    this.base_canvas_height = 1500;
    this.base_canvas_width = 1500;

    this.vertices=[
      this.changeVerticesCoordinateSystem(p1),
      this.changeVerticesCoordinateSystem(p2),
      this.changeVerticesCoordinateSystem(p3)
    ];

    this.rgb = htmlToRGB(html_color);
  }

  changeVerticesCoordinateSystem(vertex) {
    let x = 2*(vertex[0]/this.base_canvas_width) - 1;
    let y = -(2*(vertex[1]/this.base_canvas_height) - 1);
    console.log(vertex, "->", x,y);
    return [x,y];
  }

  render() {
    var vertices = this.vertices;
    var rgb = this.rgb;

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgb[0], rgb[1], rgb[2], 1.0);

    drawTriangle([vertices[0][0], vertices[0][1],
                  vertices[1][0], vertices[1][1],
                  vertices[2][0], vertices[2][1]]);
  }
}

function drawTriangle(vertices) {
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  //gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  gl.drawArrays(gl.TRIANGLES, 0, n);
  return n;
}

function htmlToRGB(html_color) {
  var r = parseInt(html_color.slice(0, 2), 16)/255;
  var g = parseInt(html_color.slice(2, 4), 16)/255;
  var b = parseInt(html_color.slice(4, 6), 16)/255;
  return [r,g,b];
}

class CQuad {
  constructor(p1,p2,p3,p4,html_color) {
    this.type="cquad";
    // Points of the quad are assigned in clockwise order
    this.triangle1=new CTriangle(p1,p2,p3,html_color);
    this.triangle2=new CTriangle(p1,p3,p4,html_color);

  }
  render() {
    this.triangle1.render();
    this.triangle2.render();
  }
}
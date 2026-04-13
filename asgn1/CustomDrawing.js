const FLOOR_GREEN = 'acdabe';
const FLOOR_BLUE = '77ccf1';

class EmergencyAndI {
  constructor() {
    this.BG_GRADIENT = [
      new CQuad([40,40],[1440,40],[1440,240],[40,240], 'f2736c'),
      new CQuad([40,240],[1440,240],[1440,440],[40,440], 'f49e6d'),
      new CQuad([40,440],[1440,440],[1440,640],[40,640], 'f8c46e'),
      new CQuad([40,640],[1440,640],[1440,800],[40,800], 'fbde69'),
    ];
    this.BG_FLOOR = [
      new CTriangle([40,800],[340,800],[40,840],FLOOR_GREEN),
      new CQuad([40,840],[340,800],[465,800],[40,875],FLOOR_BLUE),
      new CQuad([40,875],[465,800],[550,800],[40,910],FLOOR_GREEN),
      new CQuad([40,910],[550,800],[600,800],[40,950],FLOOR_BLUE),
      new CQuad([40,950],[600,800],[630,800],[40,990],FLOOR_GREEN),
      new CQuad([40,990],[630,800],[655,800],[40,1032],FLOOR_BLUE),
      new CQuad([40,1032],[655,800],[670,800],[40,1090],FLOOR_GREEN),
      new CQuad([40,1090],[670,800],[690,800],[40,1150],FLOOR_BLUE),
      new CQuad([40,1150],[690,800],[700,800],[40,1225],FLOOR_GREEN),
      new CQuad([40,1225],[700,800],[715,800],[40,1310],FLOOR_BLUE),
      new CQuad([40,1310],[715,800],[725,800],[40,1425],FLOOR_GREEN),
      new CQuad([40,1425],[725,800],[733,800],[160,1440],FLOOR_BLUE),
      new CTriangle([40,1440],[40,1425],[160,1440],FLOOR_BLUE),
      //new CQuad([160,1440],[733,800],[743,800],[0,1440],FLOOR_GREEN),
      //new CQuad([0,1440],[743,800],[750,800],[0,1440],FLOOR_BLUE),
      //new CQuad([0,1440],[750,800],[755,800],[0,1440],FLOOR_GREEN),
      //new CQuad([0,1440],[755,800],[765,800],[0,1440],FLOOR_BLUE),
      //new CQuad([0,1440],[765,800],[770,800],[0,1440],FLOOR_GREEN),
      //new CQuad([0,1440],[770,800],[775,800],[0,1440],FLOOR_BLUE),
      //new CQuad([0,1440],[775,800],[782,800],[0,1440],FLOOR_GREEN),
      //new CQuad([0,1440],[782,800],[790,800],[0,1440],FLOOR_BLUE),
      //new CQuad([0,1440],[790,800],[797,800],[0,1440],FLOOR_GREEN),
      //new CQuad([0,1440],[797,800],[806,800],[0,0],FLOOR_BLUE),
      //new CQuad([0,1440],[806,800],[819,800],[0,0],FLOOR_GREEN),
      //new CQuad([0,0],[819,800],[834,800],[0,0],FLOOR_BLUE),
      //new CQuad([0,0],[834,800],[848,800],[0,0],FLOOR_GREEN),
      //new CQuad([0,0],[848,800],[867,800],[0,0],FLOOR_BLUE),
      //new CQuad([0,0],[867,800],[885,800],[0,0],FLOOR_GREEN),
      //new CQuad([0,0],[885,800],[905,800],[0,0],FLOOR_BLUE),
      //new CQuad([0,0],[905,800],[925,800],[0,0],FLOOR_GREEN),
      //new CQuad([0,0],[925,800],[950,800],[0,0],FLOOR_BLUE),
      //new CQuad([0,0],[950,800],[1045,800],[0,0],FLOOR_GREEN),
      //new CQuad([0,0],[1045,800],[1120,800],[0,0],FLOOR_BLUE),
      //new CTriange([0,0],[0,800],[0,800],[0,0],FLOOR_BLUE),
    ];

  }
  render() {
    for (let i=0;i<this.BG_GRADIENT.length;i=i+1) {
      this.BG_GRADIENT[i].render();
    }
    for (let i=0;i<this.BG_FLOOR.length;i=i+1) {
      this.BG_FLOOR[i].render();
    }
  }
}
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
      new CQuad([160,1440],[733,800],[743,800],[300,1440],FLOOR_GREEN),
      new CQuad([300,1440],[743,800],[750,800],[420,1440],FLOOR_BLUE),
      new CQuad([420,1440],[750,800],[755,800],[540,1440],FLOOR_GREEN),
      new CQuad([540,1440],[755,800],[765,800],[663,1440],FLOOR_BLUE),
      new CQuad([663,1440],[765,800],[770,800],[785,1440],FLOOR_GREEN),
      new CQuad([785,1440],[770,800],[775,800],[900,1440],FLOOR_BLUE),
      new CQuad([900,1440],[775,800],[782,800],[1025,1440],FLOOR_GREEN),
      new CQuad([1025,1440],[782,800],[790,800],[1155,1440],FLOOR_BLUE),
      new CQuad([1155,1440],[790,800],[797,800],[1290,1440],FLOOR_GREEN),
      new CQuad([1290,1440],[797,800],[806,800],[1440,1440],FLOOR_BLUE),
      new CTriangle([1440,1440],[1300,1308], [1440,1308],FLOOR_GREEN),
      new CQuad([1300,1308],[806,800],[819,800],[1440,1308],FLOOR_GREEN),
      new CQuad([1440,1308],[819,800],[834,800],[1440,1225],FLOOR_BLUE),
      new CQuad([1440,1225],[834,800],[848,800],[1440,1137],FLOOR_GREEN),
      new CQuad([1440,1137],[848,800],[867,800],[1440,1082],FLOOR_BLUE),
      new CQuad([1440,1082],[867,800],[885,800],[1440,1025],FLOOR_GREEN),
      new CQuad([1440,1025],[885,800],[905,800],[1440,985],FLOOR_BLUE),
      new CQuad([1440,985],[905,800],[925,800],[1440,938],FLOOR_GREEN),
      new CQuad([1440,938],[925,800],[950,800],[1440,905],FLOOR_BLUE),
      new CQuad([1440,905],[950,800],[1045,800],[1440,872],FLOOR_GREEN),
      new CQuad([1440,872],[1045,800],[1120,800],[1440,840],FLOOR_BLUE),
      new CTriangle([1120,800],[1440,800],[1440,840],FLOOR_GREEN),
    ];
    this.BG_OBJECTS = [
      new CCircle([110,730], 15.0,'231f20'),
      new CCircle([271,696], 8.0,'231f20'),
      new CCircle([198,605], 5.0,'231f20'),
      new CCircle([350,325], 20.0,'231f20'),
      new CCircle([350,325], 18.0,'e8d5e8'),
      new CQuad([117,695],[129,691],[138,698],[137,710],'fafafc'),
      new CQuad([269,680],[275,675],[289,682],[285,687],'fafafc'),
      new CQuad([200,598],[202,596],[209,602],[207,605],'fafafc'),
      new CTriangle([1000,800],[1215,610],[1310,800],'fbb28f'),
      new CTriangle([1262,800],[1403,666],[1423,800],'fbb28f'),
      new CTriangle([1295,768],[1215,610],[1336,730],'702c17'),
      new CQuad([1423,800],[1403,666],[1440,680],[1440,800],'702c17'),
    ];

  }
  render() {

    for (let i=0;i<this.BG_GRADIENT.length;i=i+1) {
      this.BG_GRADIENT[i].render();
    }
    for (let i=0;i<this.BG_FLOOR.length;i=i+1) {
      this.BG_FLOOR[i].render();
    }
    for (let i=0;i<this.BG_OBJECTS.length;i=i+1) {
      this.BG_OBJECTS[i].render();
    }
  }
}
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
      new CQuad([112,701],[124,697],[133,703],[133,717],'fafafc'),
      new CQuad([269,680],[275,675],[289,682],[285,687],'fafafc'),
      new CQuad([200,598],[202,596],[209,602],[207,605],'fafafc'),
      new CTriangle([1000,800],[1215,610],[1310,800],'fbb28f'),
      new CTriangle([1262,800],[1403,666],[1423,800],'fbb28f'),
      new CTriangle([1295,768],[1215,610],[1336,730],'702c17'),
      new CQuad([1423,800],[1403,666],[1440,680],[1440,800],'702c17'),
    ];
    this.FG_SUBJECT = [
      new CQuad([944,1160],[1017,905],[1034,911],[960,1165],'f6b037'),//post
      new CQuad([933,857],[950,670],[1069,690],[1043,798],'ee9b21'),//inner left
      new CQuad([933,857],[1042,798],[1111,821],[1080,900],'b77a2a'),//inner bottom
      new CQuad([915,871],[932,653],[950,670],[933,857],'c6832a'),//front-face left
      new CQuad([933,654],[1181,691],[1155,703],[950,670],'c6832a'),//front-face upper
      new CQuad([1181,691],[1088,923],[1080,900],[1155,703],'c6832a'),//front-face right
      new CQuad([915,871],[933,857],[1080,900],[1088,923],'c6832a'),//front-face bottom
      new CQuad([932,653],[1075,638],[1260,666],[1180,691],'fcb239'),//top
      new CQuad([1180,691],[1260,666],[1176,850],[1088,923],'fcb239'),//outer right
      new CQuad([1115,645],[1147,511],[1222,532],[1174,653],'fcb239'),//neck
      
      //left arm
      new CQuad([994,615],[1012,611],[1012,646],[994,647],'fcb239'),
      new CQuad([994,615],[926,575],[928,555],[1012,611],'fcb239'),
      new CQuad([926,575],[850,600],[840,590],[928,555],'fcb239'),
      new CQuad([810,555],[865,610],[843,626],[788,563],'fcb239'),
      new CQuad([788,563],[767,571],[765,583],[796,572],'fcb239'),
      new CQuad([804,579],[816,595],[794,613],[782,593],'fcb239'),
      new CQuad([782,593],[794,613],[748,622],[749,603],'fcb239'),
      new CQuad([826,604],[847,624],[803,654],[794,646],'fcb239'),

      // right arm
      new CQuad([1219,754],[1293,765],[1283,782],[1211,770],'fcb239'),
      new CQuad([1293,765],[1322,860],[1302,862],[1283,782],'fcb239'),
      new CQuad([1322,860],[1265,940],[1255,925],[1302,862],'fcb239'),
      new CQuad([1249,917],[1294,977],[1283,988],[1232,929],'fcb239'),
      new CTriangle([1232,929],[1247,947],[1198,965],'fcb239'),
      new CQuad([1258,959],[1270,973],[1248,995],[1234,982],'fcb239'),
      new CTriangle([1234,982],[1248,995],[1213,1025],'fcb239'),
      new CQuad([1277,982],[1284,988],[1262,1017],[1255,1009],'fcb239'),

      //head
      new CCircle([1100,400], 28.0, 'f79437'),
      new CCircle([1170,390], 48.0, 'f79437'),
      new CCircle([1247,368], 55.0, 'f79437'),
      new CCircle([1350,340], 40.0, 'f79437'),

      // face
      new CCircle([1190,450], 27.0, '231f20'),

      new CCircle([1220,285], 11.0, '231f20'),
      new CCircle([1380,310], 20.0, '231f20'),
    ];
    this.INITIALS = [
      new CQuad([1330,1450],[1360,1450],[1360,1460],[1330,1460],'4d2b34'),
      new CQuad([1348,1459],[1359,1459],[1338,1489],[1329,1489],'4d2b34'),
      new CQuad([1330,1490],[1360,1490],[1360,1499],[1330,1499],'4d2b34'),

      new CQuad([1380,1450],[1410,1450],[1410,1460],[1380,1460],'4d2b34'),
      new CQuad([1380,1460],[1388,1460],[1410,1490],[1400,1490],'4d2b34'),
      new CQuad([1380,1490],[1410,1490],[1410,1499],[1380,1499],'4d2b34'),
    ];

  }
  render() {

    n_triangles = 0;

    if (g_toggleLandscape) {
      for (let i=0;i<this.BG_GRADIENT.length;i=i+1) {
        this.BG_GRADIENT[i].render();
      }

      for (let i=0;i<this.BG_FLOOR.length;i=i+1) {
        this.BG_FLOOR[i].render();
      }
    }
    if (g_toggleBackground) {
      for (let i=0;i<this.BG_OBJECTS.length;i=i+1) {
        this.BG_OBJECTS[i].render();
      }
    }
    if (g_toggleForeground) {
      for (let i=0;i<this.FG_SUBJECT.length;i=i+1) {
        this.FG_SUBJECT[i].render();
      }
    }
    if (g_toggleLandscape) {
      new CQuad([0,0],[40,0],[40,1500],[0,1500],'f0f0f0').render();
      new CQuad([0,0],[1500,0],[1500,40],[0,40],'f0f0f0').render();
      new CQuad([0,1440],[1500,1440],[1500,1500],[0,1500],'f0f0f0').render();
      new CQuad([1440,0],[1500,0],[1500,1500],[1440,1440],'f0f0f0').render();
    }
    if (g_toggleInitials) {
      for (let i=0;i<this.INITIALS.length;i=i+1) {
        this.INITIALS[i].render();
      }
    }

    console.log('drew ' + n_triangles + ' triangles');
  }
}
screen_width = 1920;
screen_height = 1080;

//prepare fight
PFX = 1855;
PFY = 833;
//escape fight
EFX = 50;
EFY = 50;
//escape fight confirm
EFCX = 1110;
EFCY = 635;
points_prepare = [
		[1809.0, 965.0, -4945315.0],
		[1804.0, 982.0, -8171990.0],
		[1789.0, 968.0, -4615582.0],
		[1778.0, 979.0, -7113906.0]
	]

points_pk = [
		[1721, 961, -1458315],
		[1714, 928, -2968187],
		[1701, 884, -1853056],
		[1692, 893, -14212064]
]

if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}

function clic(x, y){
	checkAct();
	click(x+random(-20,20), y+random(-20,20));
}
function checkAct(){
	pkgname = currentPackage()
	if(pkgname != "com.netease.onmyoji"){
		toastLog('不在游戏中');
		log(pkgname)
		while(pkgname != "com.netease.onmyoji"){
			sleep(1000)			
			pkgname = currentPackage()
		}
		toastLog('回到游戏');
	}
}
var img
function isIn(points){
	for (var i = 0; i < 4; i++) {
		if (images.pixel(img, points[i][0], points[i][1]) != points[i][2]) {
			// log('not in')
			return false
		};
	};
	// log('in')
	return true
}

while(true){
	img = captureScreen();
	if (isIn(points_prepare)) {
		clic(EFX, EFY)
		sleep(random(800,1200))
		clic(EFCX, EFCY)
		while (!isIn(points_pk)) {
			clic(200+random(0,200), 500+random(50,200))
			sleep(random(400,600))
			img = captureScreen()
		};
	}else if (isIn(points_pk)){
		clic(1714, 928)
	}
	sleep(700)
}

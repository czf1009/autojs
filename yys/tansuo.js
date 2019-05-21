screen_width = 1920;
screen_height = 1080;

var img

if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}

//accept invite
AIX = 197;
AIY = 368;
//prepare fight
PFX = 1855;
PFY = 833;
//boss
BOSSX = 926;
BOSSY = 252;


points_home = [
		[1860, 1075, -13428723],
		[1857, 1077, -11917032],
		[1851, 1073, -12903919],
		[1842, 1042, -9232343]
	]

points_invite = [
		[261.0, 409.0, -1647412.0],
		[259.0, 401.0, -3689053.0],
		[256.0, 372.0, -4346210.0],
		[251.0, 346.0, -1712948.0]
	]

points_prepare = [
		[1809.0, 965.0, -4945315.0],
		[1804.0, 982.0, -8171990.0],
		[1789.0, 968.0, -4615582.0],
		[1778.0, 979.0, -7113906.0]
	]

points_end = [
		[699.0, 257.0, -3529963.0],
		[694.0, 258.0, -3529963.0],
		[687.0, 250.0, -4251628.0],
		[681.0, 249.0, -4776430.0]
	]

points_end_break = [
		[698.0, 244.0, -8775664.0],
		[694.0, 241.0, -9103601.0],
		[688.0, 243.0, -4153718.0],
		[680.0, 256.0, -3754849.0]
	]


points_tansuo = [
		[1695, 63, -5600920],
		[1687, 55, -2046050],
		[1681, 50, -2046050],
		[1676, 53, -2111839]
]

points_tansuo_home = [
		[108, 993, -13622729],
		[105, 985, -11522350],
		[100, 969, -13296564],
		[99, 972, -13296563]
]

// ====================================================
// ====================================================
// ====================================================

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


function clic(x, y){
	checkAct();
	click(x+random(-20,20), y+random(-20,20));
}

function isIn(points){
	try{
		for (var i = 0; i < 4; i++) {
			if (images.pixel(img, points[i][0], points[i][1]) != points[i][2]) {
				return false
			};
		};
	}catch(err){
		// toastLog(err)
	}
	return true
}


while(true){
	checkAct()
	img = captureScreen();
	if (isIn(points_end_break)) {
		log('end')
		// sleep(random(100,200))
		while (!isIn(points_tansuo)) {
			clic(800, 980)
			sleep(random(400,600))
			img = captureScreen()
		};
	}else if(isIn(points_tansuo_home)){
		log('tansuo_home')
		clic(923,500)
		sleep(1000)
		clic(1428, 796)
	}
	sleep(700)
}
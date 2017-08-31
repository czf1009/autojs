screen_width = 1920;
screen_height = 1080;

var img

if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}

//accept invite
// AIX = 220;
// AIY = 419;
AIX = 197;
AIY = 368;
//prepare fight
PFX = 1855;
PFY = 833;
//boss
BOSSX = 926;
BOSSY = 252;

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
	click(x+random(-50,50), y+random(-50,50));
}


points_home = [
		[1903.0, 1045.0, -9556948.0],
		[1903.0, 1031.0, -6131360.0],
		[1901.0, 1074.0, -11981531.0],
		[1892.0, 1031.0, -9221327.0]
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

function isIn(points){
	try{
		for (var i = 0; i < 4; i++) {
			if (images.pixel(img, points[i][0], points[i][1]) != points[i][2]) {
				// log('not in')
				return false
			};
		};
	}catch(err){
		toastLog(err)
	}
	// log('in')
	return true
}


while(true){
	checkAct()
	img = captureScreen();
	if (isIn(points_invite)) {
		log('invite')
		sleep(300+random(0,200))
		clic(AIX, AIY)
	}else if (isIn(points_prepare)) {
		log('prepare')
		sleep(300+random(0,200))
		clic(PFX, PFY)
	}else if (isIn(points_end)) {
		log('end')
		sleep(300+random(0,200))
		while (!isIn(points_home)) {
			clic(200+random(0,200), 500+random(50,200))
			sleep(random(400,600))
			img = captureScreen()
		};
	}
	sleep(700)
}
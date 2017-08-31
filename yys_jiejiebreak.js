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


var img

if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}

points_unbreak = [
	[217, 159, -3754595],
	[217, 363, -3754595],
	[217, 567, -3623010],
	[733, 159, -3688802],
	[733, 363, -3688802],
	[733, 567, -3623009],
	[1249, 159, -3688545],
	[1249, 363, -3623009],
	[1249, 567, -3622753]
]

points_break = [
		[447.0, 957.0, -740769.0],
		[451.0, 953.0, -740769.0],
		[453.0, 956.0, -740769.0],
		[453.0, 959.0, -609182.0]
	]

points_prepare = [
		[1809.0, 965.0, -4945315.0],
		[1804.0, 982.0, -8171990.0],
		[1789.0, 968.0, -4615582.0],
		[1778.0, 979.0, -7113906.0]
	]

points_end_break = [
		[698.0, 244.0, -8775664.0],
		[694.0, 241.0, -9103601.0],
		[688.0, 243.0, -4153718.0],
		[680.0, 256.0, -3754849.0]
	]


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

function start_fight(no){
	img = captureScreen();
	for (var j = 0; j < 9; j++) {
		i = (no+j)%9
		if (images.pixel(img, points_unbreak[i][0], points_unbreak[i][1]) == points_unbreak[i][2]) {
			clic(points_unbreak[i][0], points_unbreak[i][1])
			sleep(random(800,1200))
			clic(points_unbreak[i][0] + 345, points_unbreak[i][1] + 234)
			break
		};
	};
}

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


no = 0
faild_no = 0
while(true){
	checkAct()
	img = captureScreen();
	if (isIn(points_break)) {
		sleep(random(800,1200))
		start_fight(no)
		no++
		sleep(3000)
	}else if (isIn(points_prepare)) {
		log('prepare')
		sleep(300+random(0,200))
		if (faild_no < 3) {
			clic(EFX, EFY)
			sleep(random(800,1200))
			clic(EFCX, EFCY)
			faild_no++
			while (!isIn(points_break)) {
				clic(200+random(0,200), 500+random(50,200))
				sleep(random(400,600))
				img = captureScreen()
			};
		}else{
			clic(PFX, PFY)
		}
	}else if (isIn(points_end_break)) {
		log('end')
		sleep(300+random(0,200))
		while (!isIn(points_break)) {
			clic(200+random(0,200), 500+random(50,200))
			sleep(random(400,600))
			img = captureScreen()
		};
	}
	if (no == 9) {
		no = 0
		faild_no = 0
	};
	sleep(700)
}
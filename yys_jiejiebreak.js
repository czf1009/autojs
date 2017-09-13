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

points_get_prize = [
		[900, 805, -13887468],
		[907, 806, -12379627],
		[908, 808, -5234921],
		[909, 809, -4317927]
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

function start_fight(){
	for (var j = 0; j < 9; j++) {
		i = (no+j)%9
		if (images.pixel(img, points_unbreak[i][0], points_unbreak[i][1]) == points_unbreak[i][2]) {
			clic(points_unbreak[i][0], points_unbreak[i][1])
			sleep(random(800,1200))
			clic(points_unbreak[i][0] + 345, points_unbreak[i][1] + 234)
			no = i
			break
		};
	};
	sleep(3000)
}

function isIn(points){
	try{
		for (var i = 0; i < 4; i++) {
			if (images.pixel(img, points[i][0], points[i][1]) != points[i][2]) {
				return false
			};
		};
	}catch(err){
	}
	return true
}

function prepare(){
	log('prepare')
	if (faild_count < 3) {
		clic(EFX, EFY)
		sleep(random(800,1200))
		clic(EFCX, EFCY)
		faild_count++
		while (!isIn(points_break)) {
			clic(200+random(0,200), 500+random(50,200))
			sleep(random(400,600))
			img = captureScreen()
		};
	}else{
		clic(PFX, PFY)
	}
	no = (no+1)%9
}

function end(){
	log('end')
	success_count++
	while (!isIn(points_break)) {
		clic(200+random(0,200), 500+random(50,200))
		sleep(random(400,600))
		img = captureScreen()
	};
}

function init_success_count(){
	img = captureScreen();
	for (var i = 0; i < 9; i++) {
		if (images.pixel(img, points_unbreak[i][0], points_unbreak[i][1]) != points_unbreak[i][2]) {
			success_count++
		};
	};
}


start_no = 0
no = start_no
faild_count = 0
success_count = 0
	checkAct()
if (isIn(points_break)) {
	init_success_count()
	if (success_count > 6) {
		faild_count = 3
	};
	log('success_count:'+success_count)
};
while(true){
	checkAct()
	img = captureScreen();
	if (isIn(points_break)) {
		start_fight()
	}else if (isIn(points_prepare)) {
		prepare()
	}else if (isIn(points_end_break)) {
		end()
		log('success_count:'+success_count)
		log('faild_count:'+faild_count)
	}else if (isIn(points_get_prize)){
		log('get_prize')
		clic(500,500)
		sleep(1000)
	}
	if (success_count > 8) {
		faild_count = 0
		success_count = 0
	};
	sleep(700)
}
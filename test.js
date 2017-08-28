screen_width = 1920;
screen_height = 1080;

points = [
			[1903.0, 1045.0, -9556948.0],
			[1903.0, 1031.0, -6131360.0],
			[1901.0, 1074.0, -11981531.0],
			[1892.0, 1031.0, -9221327.0]
		]

if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}
var img = captureScreen();


function is_home(){
	for (var i = 0; i < 4; i++) {
		if (images.pixel(img, points[i][0], points[i][1]) != points[i][2]) {
			log('not home')
			return false
		};
	};
	log('in home')
	return true
}

is_home()
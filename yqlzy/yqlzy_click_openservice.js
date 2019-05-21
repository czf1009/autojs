if(!requestScreenCapture(1080,1920)){
	toast("请求截图失败");
	stop();
}

//开启服务
function isOpenService(){
    if (device.isScreenOn()) {
		var img = captureScreen();
		if(
			images.detectsColor(img, "#ffaacb4e", 420, 1120)
			&& images.detectsColor(img, "#fffcfa", 376, 1161)
			&& images.detectsColor(img, "#ff69c1ff", 607, 1133)
			&& images.detectsColor(img, "#ffcae3fe", 752, 1165)
			){
			return true;
		}
	}
	return false;
}

while(true){
	if(isOpenService()){
		// toastLog("true")
		press(357,1133, 10)
	}
	sleep(300)
}
if(!requestScreenCapture(1920,1080)){
	toast("请求截图失败");
	stop();
}

//在主界面
function isHome(){
	var img = captureScreen();
	if(
		// images.detectsColor(img, "#173a58", 1609, 933)
		images.detectsColor(img, "#134173", 1656, 898)
		&& images.detectsColor(img, "#243345", 1677, 1007)
		){
		return true;
	}else{
		return false;
	}
}

//收到邀请
function isReciveInvite(){
	var img = captureScreen();
	if(
		images.detectsColor(img, "#35609d", 689, 332)
		&& images.detectsColor(img, "#7f5fbc", 662, 386)
		&& images.detectsColor(img, "#4a312f", 90, 191)
		&& images.detectsColor(img, "#cbc5d0", 63, 247)
		){
		return true;
	}else{
		return false;
	}
}

// while(true){
// 	if(isReciveInvite){
// 		click(237, 357)
// 		toastLog("收到邀请")
// 		sleep(3000)
// 	}
// }

while(true){
	if(isReciveInvite()){
		toastLog("true")
	}else{
		toastLog("false")
	}
	sleep(2000)
}
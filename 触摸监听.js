events.observeTouch();

events.setTouchEventTimeout(30);

//toast("请在日志中查看触摸点的坐标");

events.onTouch(function(point){
	log(point);
	isStop = true
});

isStop = false;
//accept invite
AIX = 220;
AIY = 419;
//prepare fight
PFX = 1855;
PFY = 753;

while(true){
	if(currentActivity() != "com.netease.onmyoji.Client"){
		toast(currentActivity());
		break;
	}
	toast(isStop);
	if(isStop){
		break;
	}
	sleep(2000)
}


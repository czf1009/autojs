isStop = false

events.observeKey();
events.onKeyDown("menu", function(code, event){
	toast("stop")
	isStop = true;
});


//accept invite
AIX = 220;
AIY = 419;
//prepare fight
PFX = 1855;
PFY = 753;

while(true){
	toast(isStop)
	if(isStop){
		break;
	}
	sleep(2000)
}
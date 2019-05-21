//accept invite
AIX = 220;
AIY = 419;
//prepare fight
PFX = 1855;
PFY = 753;
//boss
BOSSX = 926;
BOSSY = 252;

while(true){
	clic(AIX, AIY);
	clic(PFX, PFY);
}

function checkAct(){
	if(currentActivity() != "com.netease.onmyoji.Client"){
		toast(currentActivity());
		exit();
	}
}

function clic(x, y){
	checkAct();
	click(x+random(0,20), y+random(0,20));
	sleep(500+random(0,100));
}
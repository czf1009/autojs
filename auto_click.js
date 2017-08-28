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

while(true){
	is_in(points_home)
	// clic(AIX, AIY);
	// clic(PFX, PFY);
}

function checkAct(){
	if(currentActivity() == "com.netease.onmyoji.Client"){
		toast(currentActivity());
		exit();
	}
}

function clic(x, y){
	checkAct();
	click(x+random(-50,50), y+random(-50,50));
	sleep(500+random(0,100));
}
//home
start_x = 1622
start_y = 868
end_x = 1722
end_y = 968
//invite
// start_x = 165
// start_y = 345
// end_x = 262
// end_y = 421
//prepare fight
// start_x = 1778
// start_y = 960
// end_x = 1810
// end_y = 985
//end fight
// start_x = 680
// start_y = 240
// end_x = 700
// end_y = 260
//end break
// start_x = 900
// start_y = 800
// end_x = 910
// end_y = 810

screen_width = 1920;
screen_height = 1080;
img_num = 3;


if(!requestScreenCapture(screen_width,screen_height)){
	toastLog("请求截图失败");
	stop();
}
// var img = captureScreen("/storage/emulated/0/test.png");


function get_img(){
	// initial img array
	var img = new Array(); 
	for (var i = 0; i <screen_width; i++) {
		img[i] = new Array()
	};

	// get first img
	capture = captureScreen()
	for (var x = start_x; x < end_x ; x++) {
		log(x)
		for (var y = start_y; y < end_y; y++) {
			img[x][y] = images.pixel(capture, x, y)
		}
	}
	log('get first img complete')
	sleep(1000+random(0,1000))

	// match color
	for (var i = 1; i < img_num-1; i++) {
		var capture = captureScreen()
		log('start match a img')
		for (var x = start_x; x < end_x ; x++) {
			for (var y = start_y; y < end_y; y++) {
				if (img[x][y] != 0) {
					if(img[x][y] != images.pixel(capture, x, y)){
						img[x][y] = 0
					}
				}
			}
		}
		log('match a img complete')
		sleep(1000+random(0,1000))
	}

	// print point
	for (var x = start_x; x < end_x ; x++) {
		for (var y = start_y; y < end_y; y++) {
			if(img[x][y] != 0){
				log('['+x+', '+y+', '+img[x][y]+'],')
			}
		}
	}	

}

function get_tupo_unbreak(){
	capture = captureScreen()

	start_x = 217
	start_y = 159

	x = start_x
	var points = new Array();
	var n = 0
	for (var i = 3 - 1; i >= 0; i--) {
		y = start_y
		for (var j = 3 - 1; j >= 0; j--) {
			points[n] = new Array()
			points[n][0] = x
			points[n][1] = y;
			points[n][2] = images.pixel(capture, x, y)
			y = y + 204
			n++
		};
		x = x + 516
	};

	for (var i = 0; i < 9; i++) {
		log(points[i][0]+', '+points[i][1]+', '+points[i][2])
	}
}

get_img()
// toastLog(img.getWidth());
// toastLog(img.getHeight());
// toastLog("开始找色");

// var match_num = 1
// for (var i = 0; i < screen_width ; i++) {
// 	for (var j = 0; j < screen_height; i++) {
// 		match_num = 1
// 		for (var k = 0; k < img_num-1; i++) {
// 			var a = images.pixel(imgs[k], i, j);
// 			var b = images.pixel(imgs[k+1], i, j);
// 			if (a == b){
// 				log(a,b)
// 				match_num++
// 			}else{
// 				log(a,b)
// 			}
// 		};
// 		if (match_num == img_num) {
// 			// log(i, j)
// 			// log(img_num)
// 		}
// 	};
// };

// toastLog(colors.toString(a));
// toastLog(colors.toString(b));
// toastLog(colors.toString(c));
// toastLog(colors.toString(d));

// press(689, 332, 2000);
// press(662, 386, 2000);
// press(90, 191, 2000);
// press(63, 247, 2000);

// if(
// 	images.detectsColor(img, "#0", 237, 357)
// 	&& images.detectsColor(img, "#0", 197, 398)
// 	&& images.detectsColor(img, "#0", 199, 381)
// 	&& images.detectsColor(img, "#0", 213, 358)
// 	){
// 	toastLog(images.detectsColor(img, "#0", 237, 357))
// }else{
// 	toastLog("False")
// }

toastLog("找色完毕");

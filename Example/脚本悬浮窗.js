"auto"
// for(i=0;i<scriptFiles.length;i++){
//     log(scriptFiles[i]);
// }
// var window = floaty.window(
//     <frame id="floaty">
//         <button id="action" text="开始运行" w="90" h="40" bg="#77ffffff"/>

//     </frame>
// );

var ra = new RootAutomator();
ra.setScreenMetrics(1080, 1920);
var test = require('test.js');
events.on('exit', function(){
    ra.exit();
});

function exec(action, args){
    args = args || {};
    engines.execScript(action.name, action + "(" + JSON.stringify(args) + ");\n" + action.toString());
}

//   var thread = threads.start(function(){
//     //在子线程执行的定时器
//     setInterval(function(){
//         log("子线程:" + threads.currentThread());
//     }, 1000);
// });
// log("当前线程为主线程:" + threads.currentThread());

// //等待子线程启动
// thread.waitFor();


var window = floaty.window(
    <vertical id="floaty" alpha="0.7" w="30" >
        <button id="btn5" style="Widget.AppCompat.Button.Colored" padding="0" text="5雷" />
        <button id="btn4" style="Widget.AppCompat.Button.Colored" padding="0" text="4瓷" />
        <button id="btn3" style="Widget.AppCompat.Button.Colored" padding="0" text="3远" />
        <button id="btn2" style="Widget.AppCompat.Button.Colored" padding="0" text="2中" />
        <button id="btn1" style="Widget.AppCompat.Button.Colored" padding="0" text="1近" />
    </vertical>
);
window.setPosition(150, 500);

var isShow = true;
function checkActivity(){
    if (device.isScreenOn()) {
        pkgname = currentPackage()
        // toastLog(pkgname)
        // toastLog(window.getWidth()+", "+window.getHeight());

        if(pkgname != "com.tencent.gwgo"){
            // toastLog('不在游戏中');
                //	exit();
            if (isShow) {
                window.setSize(1,1);
                isShow = false;
            }
        }else if (!isShow){
            // toastLog('在游戏中');
            window.setSize(width, height);
            isShow = true;
        }
            
    }
}
sleep(3000);
setInterval(()=>{checkActivity()}, 1000);

var width = window.getWidth();
var height = window.getHeight();

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0, y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;


window.btn5.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                run_script("旋转5雷.js")
            }
            return true;
    }
    return true;
})


window.btn4.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                run_script("旋转4瓷偶.js")
            }
            return true;
    }
    return true;
})

window.btn3.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                run_script("旋转3远.js")
            }
            return true;
    }
    return true;
})

window.btn2.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                run_script("旋转2中.js")
            }
            return true;
    }
    return true;
})

window.btn1.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                run_script("旋转1近.js");
            }
            return true;
    }
    return true;
})

function run_script(file){
    toast("Run" + file);
    engines.execScriptFile(file);
}



















function onClick(path){
    // if(window.action.getText() == '开始运行'){
    //     execution = engines.execScriptFile(path);
    //     window.action.setText('停止运行');
    // }else{
    //     if(execution){
    //         execution.getEngine().forceStop();
    //     }
    //     window.action.setText('开始运行');
    // }
    execution = engines.execScriptFile(path);
}
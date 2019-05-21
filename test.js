// "ui";
 
// ui.layout(
//     <vertical alpha="0.5">
//         <button id="btn1" text="第一个按钮" style="Widget.AppCompat.Button.Colored"/>
//         <button id="btn2" text="第二个按钮" style="Widget.AppCompat.Button.Colored"/>
//     </vertical>
// );

// ui.btn1.click(run_script);


// function run_script(){
//     log("======" + engines.myEngine().cwd());
//     engines.execScriptFile("test.js")
// };

// var w = floaty.rawWindow(
//     <vertical alpha="0.5">
//         <button id="btn1" text="第一个按钮" style="Widget.AppCompat.Button.Colored"/>
//         <button id="btn2" text="第二个按钮" style="Widget.AppCompat.Button.Colored"/>
//     </vertical>
// );

// setTimeout(()=>{
//     w.close();
// }, 2000);

// w.btn1.click(run_script)



// // engines.execScript("hello world", "toast('hello world')", delay=0, looptimes=1, interval=0);



// w.setPosition(100, 500);
// // w.setTouchable(true);

// // ui.run(function(){
// //     w.btn1.setText("文本");
// // }); 

// w.btn1.setText("xxx");




// var e = engines;


// engines.execScriptFile("旋转1近.js");

// w.btn1.click(function(){

// });

// function run_script(){

//     log("======" + engines.myEngine().cwd());
//     // toast(engines.getPath());
    
//     // var scp = e.execAutoFile("./旋转1近.js");
//     // engines.execScriptFile("/sdcard/脚本/1.js");
//     engines.execScriptFile("test.js")

// //     var scriptsPath = "/sdcard/脚本/";
// //     if(!files.exists(scriptsPath)){
// //         scriptsPath = "/sdcard/Scripts/";
// //     }
// //     var scriptFiles = files.listDir(scriptsPath, function(name){
// //         return name.endsWith(".js");
// //     });
// //     var i = dialogs.singleChoice("请选择要运行的脚本", scriptFiles);
// //     if(i < 0){
// //         exit();
// //     }
// //     var path = files.join(scriptsPath, scriptFiles[i]);
// //     engines.execScriptFile(path);
// };

// // run_script();

// ui.btn1.click(run_script);






var scriptsPath = "/sdcard/脚本/";
if(!files.exists(scriptsPath)){
    scriptsPath = "/sdcard/Scripts/";
}
var scriptFiles = files.listDir(scriptsPath, function(name){
    return name.endsWith(".js");
});

// var i = dialogs.singleChoice("请选择要运行的脚本", scriptFiles);
// if(i < 0){
//     exit();
// }
// var path = files.join(scriptsPath, scriptFiles[i]);
// engines.execScriptFile(path);


// var path = "/sdcard/Scripts/旋转1近.js";
// if(!files.exists(path)){
//     toast("脚本文件不存在: " + path);
//     exit();
// }
for(i=0;i<scriptFiles.length;i++){
    log(scriptFiles[i]);
}
var window = floaty.window(
    <frame>
        <button id="action" text="开始运行" w="90" h="40" bg="#77ffffff"/>

    </frame>
);

setInterval(()=>{}, 1000);

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0, y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;

window.action.setOnTouchListener(function(view, event){
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
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                onClick();
            }
            return true;
    }
    return true;
});

function onClick(){
    if(window.action.getText() == '开始运行'){
        execution = engines.execScriptFile(path);
        window.action.setText('停止运行');
    }else{
        if(execution){
            execution.getEngine().forceStop();
        }
        window.action.setText('开始运行');
    }
}








// var path = "旋转1近.js";
// if(!files.exists(path)){
//     toast("脚本文件不存在: " + path);
//     exit();
// }
// var window = floaty.window(
//     <frame>
//         <button id="action" text="开始运行" w="90" h="40" bg="#77ffffff"/>
//     </frame>
// );

// window.exitOnClose();

// var execution = null;

// window.action.click(()=>{
//     if(window.action.getText() == '开始运行'){
//         execution = engines.execScriptFile(path);
//         window.action.setText('停止运行');
//     }else{
//         if(execution){
//             execution.getEngine().forceStop();
//         }
//         window.action.setText('开始运行');
//     }
// });

// window.action.longClick(()=>{
//    window.setAdjustEnabled(!window.isAdjustEnabled());
//    return true;
// });

// setInterval(()=>{}, 1000);
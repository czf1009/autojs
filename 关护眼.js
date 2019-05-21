"auto"
// launchApp("云朵护眼");
// sleep(500);
// back();
// notifications();
// if(text("退出").findOne(1000)){
//     click("退出");
// }
// toast("start");
// sleep(1000);
// waitForActivity("android.widget.FrameLayout");
// waitForPackage("com.yunduo.nighttools");
// toast(currentActivity());
// app.startActivity("com.yunduo.nighttools/android.widget.FrameLayout")

//com.yunduo.nighttools
//android.widget.FrameLayout

var w = floaty.rawWindow(
    <frame gravity="center" bg="#44ffcc00"/>
);

w.setSize(-1, -1);
w.setTouchable(false);

setTimeout(()=>{
    w.close();
}, 60000);

// w.close()
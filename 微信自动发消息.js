"auto"

function send_message(){
    while(desc("返回").exists()){
        desc("返回").findOne().parent().click();
        toast("返回上一层");
        sleep(1000);
    }
    text(group).findOne().parent().parent().parent().parent().click();
    // toast("进入聊天")
    sleep(800);
    // sleep(500)
    className("android.widget.EditText").findOne().click();
    input("今晚有谁不回来吃?  --测试定时发送by陈志枫");
    sleep(500);
    text("发送").findOne().click();
    // sleep(500)
    alert("微信发送成功")
}

function unlock(){
    if(!device.isScreenOn){
        device.wakeUp();
        sleep(1000);
        swipe(500,1000,500,100,600);
        sleep(1500);
    }
}

//var group = dialogs.rawInput("我今晚回家吃饭");
// var group = "我今晚回家吃饭";
var group = "楓";

unlock()
launchApp("微信");
for(i=0; i<10; i++){
    sleep(1000)
    if(currentPackage() == "com.tencent.mm"){
        send_message();
        exit();
    }
}
alert("发送失败")

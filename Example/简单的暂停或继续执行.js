auto();
//创建本地数据判断是否需要暂停
var B_sj = storages.create("Stop");
//初始化不需要暂停
B_sj.put("yesorno", "no");
var time = 1;

//创建一个暂停按钮
var window = floaty.window(
    <frame>
        <button id="action" text="暂停脚本" w="90" h="40" bg="#77ffffff"/>
    </frame>
);

window.exitOnClose();

var execution = null;

window.action.click(() => {
    if (window.action.getText() == '暂停脚本') {
        B_sj.put("yesorno", "yes");
        window.action.setText('继续脚本');
    } else {
        B_sj.put("yesorno", "no");
        window.action.setText('暂停脚本');
    }
});

window.action.longClick(() => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
    return true;
});

setInterval(() => {}, 1000);

//主循环
while (1) {
stop_yesorno();
    toastLog("我是主循环,当前第：" + time + " 次");
    sleep(1000);
    time = time + 1;

}

//判断是否需要暂停

function stop_yesorno() {

    var bl = B_sj.get("yesorno");
    log(bl);
    if (bl == "yes") {
        while (1) {
            var bl = B_sj.get("yesorno");
            sleep(1000);
            toastLog("脚本暂停中…");
            
            if (bl == "no") {
                break;
            };
        };
    };
}
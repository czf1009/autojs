"auto"
launchApp("喜马拉雅FM");
launchApp("云朵护眼");
sleep(1000);
back();
id("main_sound_cover_img").findOne().click();
text("10分钟").findOne().parent().click();

// 控制台负责悬浮窗的隐藏和显示
// 控制台有两个控制区域
// 接码悬浮窗  +  浏览器悬浮窗
var 悬控移动和点击=require('./悬控移动和点击.js')

var 控制台=floaty.window(
<vertical bg='#FFB6C1' gravity="center" >
  <TableLayout layout_width="match_parent" layout_height="match_parent" stretchColumns="1" gravity="center">

    <TableRow>
      <vertical gravity="center">
        <text layout_weight="1" gravity="center">接码窗口控制</text>
        <horizontal>
          <button id='接码隐藏' layout_weight="1">隐藏</button>
          <button id='接码显示' layout_weight="1">显示</button>
        </horizontal>
      </vertical>
    </TableRow>
    <TableRow>
      <vertical>
        <text layout_weight="1" gravity="center">浏览器窗口控制</text>
        <horizontal>
          <button id='浏览器隐藏' layout_weight="1">隐藏</button>
          <button id='浏览器隐藏' layout_weight="1">显示</button>
        </horizontal>
      </vertical>
    </TableRow>
    <TableRow>
    <horizontal>
      <button id='移动' layout_weight="1">移动</button>
      <button id='关闭' layout_weight="1">关闭</button>
    </horizontal>
    </TableRow>
  </TableLayout>
</vertical>
)

// function kill(pid){
//   android.os.Process.killProcess(pid)
// }

控制台.关闭.click(
  function(){
    // var myPid=android.os.Process.myPid()
    // kill(myPid)
    控制台.close()
  }
)

悬控移动和点击(控制台,'控制台的移动按钮',控制台.移动)



module.exports=控制台

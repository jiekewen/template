<template>
  <!-- 总体布局 -->
  <!-- 给总体布局设置min-height: 100vh 视窗百分百   -->
  <el-container class="height">
    <!-- 头部header部分 -->
    <el-header>
      <el-row>
        <!-- 1.头部左侧 -->
        <el-col :span="8">
          <!-- 时间戳 -->
          <div id="date">左</div>
        </el-col>
        <!-- 2.头部中间 -->
        <el-col :span="8">
          <!-- 中间标题 -->
          <div>宽月加油</div>
        </el-col>
        <!-- 3.头部右侧 -->
        <el-col :span="8">
          <div>右部分</div>
        </el-col>
      </el-row>
    </el-header>
    <!-- 头部以下部分 -->
    <el-container>
      <!-- nav部分 -->
      <el-col :span="12" class="nav w200">
        <!-- 此处的 有router才可以实现跳转路由  此处的default-active可以默认选中first-->
        <el-menu background-color="skyblue" text-color="#000" router default-active="/first">
          <template v-for="item in menus">
            <el-menu-item :key="item.id" :index="item.url">
              <!-- 用于展示小图标并设置图标样式 -->
              <i :class="item.className" style="width:21px; height:21px;"></i>
              <!-- 导航栏的标题 -->
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
          <!-- 有次级选项的导航 -->
          <el-submenu index="1-4">
            <template slot="title">尤里佳佳文</template>
            <el-menu-item index="/first">
              <i class="el-icon-nav-1" style="width:21px; height:21px;"></i>
              <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="/second">
              <i class="el-icon-nav-2" style="width:21px; height:21px;"></i>
              <span slot="title">选项2</span>
            </el-menu-item>
            <el-menu-item index="third">
              <i class="el-icon-nav-3" style="width:21px; height:21px;"></i>
              <span slot="title">选项3</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 主体部分 -->
      <el-main>
        <router-view class="h">右侧的显示部分 不过一般都被选中的组件覆盖</router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 时间显示方法
var interval = setInterval(function() {
  var week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var hour = myDate.getHours();
  var showHour = hour > 12 ? hour - 12 : hour;
  var day = myDate.getDate();
  var minute = myDate.getMinutes();
  minute = minute < 10 ? "0" + minute : minute.toString();
  var dayOfWeek = week[myDate.getDay()];
  if (document.getElementById("date")) {
    document.getElementById("date").innerHTML =
      year +
      "年" +
      month +
      "月" +
      day +
      "日 " +
      dayOfWeek +
      " " +
      hour +
      ":" +
      minute;
  }
}, 1000);
export default {
  data() {
    return {
      menus: [
        {
          title: "佳佳文",
          url: "/first",
          id: 1,
          className: "el-icon-nav-1"
        },
        {
          title: "刀大杀人多",
          url: "/second",
          id: 2,
          className: "el-icon-nav-2"
        },
        {
          title: "小肥龙",
          url: "/third",
          id: 3,
          className: "el-icon-nav-3"
        },
        {
          title: "小胖纸",
          url: "/forth",
          id: 4,
          className: "el-icon-nav-4"
        },
        {
          title: "爱新觉罗杰克文",
          url: "/fifth",
          id: 5,
          className: "el-icon-nav-5"
        },
        {
          title: "短暂才会美丽",
          url: "/sixth",
          id: 6,
          className: "el-icon-nav-1"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="">
/* 导航小图标 */
.el-icon-nav-1 {
  background: url("../../static/images/nav-1.gif") no-repeat;
}
.el-icon-nav-2 {
  background: url("../../static/images/nav-2.gif") no-repeat;
}
.el-icon-nav-3 {
  background: url("../../static/images/nav-3.gif") no-repeat;
}
.el-icon-nav-4 {
  background: url("../../static/images/nav-4.gif") no-repeat;
}
.el-icon-nav-5 {
  background: url("../../static/images/nav-5.gif") no-repeat;
}
/* 选中状态字体的颜色 */
.el-menu-item.is-active {
  background-color: #86bbbb !important;
  color: #000;
}
/* 去除导航栏右侧边框 */
.el-menu {
  border: none;
}
/* 导航栏鼠标悬停的背景色 */
.el-menu-item:hover {
  background-color: #86bbbb !important;
}
/* 导航栏宽度 */
.w200 {
  width: 200px;
}
/* 高度为视窗高度 */
.height {
  min-height: 100vh;
}
/* 导航栏背景颜色以及弹性布局 */
.nav {
  display: flex;
  flex-direction: column;
  background-color: #86bbbb;
}
/* header样式 */
.el-header {
  background-color: #999;
}
/* 主体部分 */
.el-main {
  background-color: #666;
}
</style>

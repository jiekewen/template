<template>
  <!-- 总体布局 -->
  <el-container>
    <!-- 头部header部分 -->
    <el-header>
      <el-row>
        <el-col :span="8">
          <div>左</div>
        </el-col>
        <el-col :span="8">
          <div>中</div>
        </el-col>
        <el-col :span="8">
          <div>右</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- nav部分 -->
      <el-aside width="200px">
        <el-row class="tac">
          <!-- default-active="2"点击 文字颜色改变-->
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1" class="w200">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-submenu index="1-3" class="w200">
                <template slot="title">选项3</template>
                <el-menu-item index="1-3-1">选项3-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2" class="w200">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" class="w200">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-row>
      </el-aside>
      <!-- 主体部分 -->
      <el-main>
        <template>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>
        <!-- 视图容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },
  methods: {}
};
</script>

<style lang="">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.w200 {
  width: 200px;
}
.el-header {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}
</style>

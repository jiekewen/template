<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // labelPosition: "top", //文字跟表格的对齐方式
      formData: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="">
.login-wrap {
  background-color: #ccc;
  padding-top: 400px;
  /* 以下样式来操纵登录界面水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  padding: 20px;
  width: 400px;
  background-color: #aaa;
}
.login-wrap .login-form .login-button {
  width: 100%;
}
</style>
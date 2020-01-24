<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <h1>Future can be expected</h1>
      <p>My Blog</p>
      <div class="btn">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-else>
      <h1>Future can be expected</h1>
      <div>
        <i class="el-icon-edit"></i>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false // 是否登录
    };
  }
};
</script>

<style scoped lang="less">
header.no-login {
  padding: 2% 0;
  background-color: #008e2d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  p {
    margin: 1% 0 3%;
  }
}
header.login {
  padding: 2% 0;
  background-color: #008e2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  p {
    margin: 1% 0 3%;
  }
  > div {
    display: flex;
    align-items: center;
    i {
      margin-right: 20px;
    }
  }
}
</style>
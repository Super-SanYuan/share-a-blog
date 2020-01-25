<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <router-link to="/">
        <h1>Future can be expected</h1>
      </router-link>
      <p>My Blog</p>
      <div class="btn">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/reg">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <router-link to="/">
        <h1>Future can be expected</h1>
      </router-link>
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
a {
  color: #fff;
}
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
  .btn > a {
    margin: 0 10px;
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
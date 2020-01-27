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
        <i class="el-icon-edit" @click.stop="goToCreate" />
        <el-dropdown>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button type="text" @click.stop="goToMine">我的</el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button type="text" @click.stop="logout">登出</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>
  </header>
</template>

<script>
import Vuex from "vuex";
import { logout } from "@/api/auth";
export default {
  // props: ["isLogin"],
  computed: {
    ...Vuex.mapState(["isLogin"])
  },
  methods: {
    goToMine() {
      this.$router.push("/mine");
    },
    goToCreate() {
      this.$router.push("/create");
    },
    async logout() {
      let res = await logout();
      if (res.status === "ok") {
        this.$router.replace("/login");
      }
    }
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
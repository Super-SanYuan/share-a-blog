<template>
  <section class="login-form">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <p>没有账号？<router-link to="/reg">注册新用户</router-link></p>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    /**
     * username : 用户名, 长度1到15个字符，只能是字母数字下划线中文
     * password : 密码, 长度6到16个任意字符
     */
    var validateUserName = (rule, value, callback) => {
      // 验证账号
      if (value.length === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      // 验证密码
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["user/login"]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this["user/login"](this.ruleForm);
        } else {
          // 验证失败
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.login-form {
  width: 600px;
  margin: 30px auto 0;
}
p {
  margin: 50px auto 0;
  text-align: center;
  font-size: 12px;
  a {
    color: #092;
    margin-left: 10px;
  }
}
</style>
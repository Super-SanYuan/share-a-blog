<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="reg-form"
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
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

    <p>已有账户?<router-link to="/login">立即登录</router-link></p>
  </el-form>
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
      if (value.length < 6) {
        callback(new Error("密码必须大于6位"));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      // 验证密码
      if (value === "") {
        callback(new Error("长度6到16个任意字符"));
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
    ...mapActions(["user/register"]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 注册
          this["user/register"](this.ruleForm).then(res => {
            if (res.status === "ok") {
              this.$message.success(res.msg);
              this.$router.push("/login");
            } else {
              this.$message.warning(res.msg);
            }
          });
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
.reg-form {
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
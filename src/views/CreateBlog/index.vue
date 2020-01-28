<template>
  <div class="create">
    <h1>创建文章</h1>
    <p class="title">
      <label for="title">文章标题</label>
      <el-input
        v-model="blogInfo.title"
        placeholder="请输入内容"
        id="title"
      ></el-input>
    </p>
    <p class="description">
      <label for="description">内容简介</label>
      <el-input
        type="textarea"
        v-model="blogInfo.description"
        :autosize="{ minRows: 2, maxRows: 6 }"
        placeholder="请输入内容"
        id="description"
      ></el-input>
    </p>
    <p class="content">
      <label for="content">文章内容</label>
      <el-input
        type="textarea"
        v-model="blogInfo.content"
        :autosize="{ minRows: 4, maxRows: 30 }"
        placeholder="请输入内容"
        id="content"
      ></el-input>
    </p>
    <p>
      <label for="atIndex">展示到首页</label>
      <el-switch
        v-model="blogInfo.atIndex"
        id="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </p>
    <el-button type="primary" @click="create">确定</el-button>
  </div>
</template>

<script>
import { createBlog } from "@/api/blog";
export default {
  data() {
    return {
      blogInfo: {
        title: "",
        content: "",
        description: "",
        atIndex: false
      }
    };
  },
  methods: {
    create() {
      createBlog(this.blogInfo).then(res => {
        if (res.status === "ok") {
          this.$message.success(res.msg);
          this.$router.push(`/blog/${res.data.id}`);
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.create {
  display: felx;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
  > p {
    display: flex;
    flex-direction: column;
    > label {
      margin: 20px 0;
    }
  }
}
</style>
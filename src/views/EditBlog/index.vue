<template>
  <div class="edit">
    <h1>编辑文章</h1>
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
    <section>
      <label for="atIndex">展示到首页</label>
      <el-switch
        v-model="blogInfo.atIndex"
        id="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </section>
    <el-button type="primary" @click="submit">确定</el-button>
  </div>
</template>

<script>
import { getBlogDetail, editBlog } from "@/api/blog";
export default {
  data() {
    return {
      blogId: this.$route.params.id,
      blogInfo: {
        title: "",
        content: "",
        description: "",
        atIndex: false
      }
    };
  },
  created() {
    this.getBlogInfo(this.blogId);
  },
  methods: {
    async getBlogInfo(blogId) {
      let res = await getBlogDetail(blogId);
      this.blogInfo.title = res.data.title;
      this.blogInfo.description = res.data.description;
      this.blogInfo.content = res.data.content;
      this.blogInfo.atIndex = res.data.atIndex;
    },
    async submit() {
      let res = await editBlog(this.blogId, this.blogInfo);
      if (res.status === "ok") {
        this.$message.success(res.msg);
        this.$router.push(`/detail/${this.blogId}`);
      }
    }
  }
};
</script>

<style scoped lang="less">
.edit {
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
  > section {
    margin: 20px 0;
    display: flex;
    align-items: center;
    label {
      margin-right: 10px;
    }
  }
}
</style>
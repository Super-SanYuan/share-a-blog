<template>
  <div class="blog-detail">
    <section class="user">
      <el-avatar
        shape="square"
        :size="60"
        :src="userInfo.avatar || ''"
      ></el-avatar>
      <div>
        <h2>{{ title }}</h2>
        <span>
          <router-link :to="`/user/${userInfo.id}`">{{
            userInfo.username
          }}</router-link>
          发布于{{ createTime | getDateDiff }}</span
        >
      </div>
    </section>
    <section class="content" v-html="marked" />
  </div>
</template>

<script>
import marked from "marked";
import { getBlogDetail } from "@/api/blog";
export default {
  data() {
    return {
      title: "",
      content: "",
      blogId: this.$route.params.id,
      createTime: undefined, // 发布时间
      userInfo: {}
    };
  },
  computed: {
    marked() {
      return marked(this.content);
    }
  },
  created() {
    this.getBlogInfo();
  },
  methods: {
    async getBlogInfo() {
      let blogInfo = await getBlogDetail(this.blogId);
      this.userInfo = blogInfo.data.user;
      this.title = blogInfo.data.title;
      this.content = blogInfo.data.content;
      this.createTime = blogInfo.data.createdAt;
    }
  }
};
</script>

<style scoped lang="less">
.blog-detail {
  .user {
    padding: 20px 0;
    display: flex;
    border-bottom: 1px solid #ccc;
    > div {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      h2 {
        margin: 0;
      }
      span {
        margin: 4px 0;
        color: #999;
        font-size: 12px;
        a {
          color: #0094ff;
        }
      }
    }
  }
}
</style>
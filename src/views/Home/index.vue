<template>
  <div class="home">
    <section class="blog-item-container">
      <template v-for="item in blogs">
        <router-link
          :to="`/detail/${item.id}`"
          class="blog-item"
          :key="item.id"
        >
          <figure class="avatar">
            <img :src="item.user.avatar" />
            <figcaption>{{ item.user.username }}</figcaption>
          </figure>
          <h3>
            {{ item.title }} <span>{{ item.updatedAt | getDateDiff }}</span>
          </h3>
          <p>{{ item.description }}</p>
        </router-link>
      </template>
    </section>
    <el-pagination
      style="text-align: center;"
      layout="prev, pager, next"
      :page-size="10"
      :total="total"
      :current-page="page"
      :page-count="totalPage"
      @current-change="onPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getHomeBlogs } from "@/api/blog";
export default {
  /**
   * 进入页面获取博客列表
   * 点击翻页请求下一个数据
   */
  data() {
    return {
      blogs: [],
      totalPage: 0, // 总页数
      total: 0, // 总条数
      page: 1 // 当前页码
    };
  },
  async created() {
    this.page = parseInt(this.$route.query.page) || 1;
    this.getBlogs(this.page);
  },
  methods: {
    async getBlogs(page) {
      let res = await getHomeBlogs({ page });
      this.blogs = res.data;
      this.total = res.total;
      this.totalPage = res.totalPage;
      this.$router
        .replace({
          path: "/",
          query: {
            page: res.page
          }
        })
        .catch(() => {});
    },
    onPage(page) {
      this.getBlogs(page);
    }
  }
};
</script>

<style scoped lang="less">
.home {
  .blog-item {
    margin: 20px 0;
    display: grid;
    grid: auto auto / 80px 1fr;
    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      text-align: center;
      margin-left: 0;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      figcaption {
        font-size: 12px;
      }
    }
    h3 {
      grid-column: 2;
      grid-row: 1;
      & > span {
        font-size: 14px;
        color: #999;
      }
    }
    p {
      margin-top: 0;
    }
  }
}
</style>
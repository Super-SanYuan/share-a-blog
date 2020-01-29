<template>
  <div class="mine">
    <section class="user">
      <el-avatar shape="square" :size="60" :src="userInfo.avatar"></el-avatar>
      <span>{{ userInfo.username }}</span>
    </section>
    <section class="blogs">
      <template v-for="item in blogs">
        <div class="blog-item" :key="item.id">
          <div class="date-container">
            <span class="date">{{ item.updatedAt | getDate }}日</span>
            <span class="month">{{ item.updatedAt | getMonth }}月</span>
            <span class="year">{{ item.updatedAt | getFullYear }}年</span>
          </div>
          <div class="blog-container">
            <div class="titile">
              <router-link :to="`/detail/${item.id}`">
                {{ item.title }}
              </router-link>
            </div>
            <div class="descripton">{{ item.description }}</div>
            <div class="edit">
              <span>
                <router-link :to="`/edit/${item.id}`">编辑</router-link>
              </span>
              <span @click="del(item.id)">
                删除
              </span>
            </div>
          </div>
        </div>
      </template>
    </section>
    <section>
      <el-pagination
        :hide-on-single-page="true"
        layout="prev, pager, next"
        :page-size="10"
        :total="total"
        :current-page="page"
        :page-count="totalPage"
        @current-change="onPage"
      >
      </el-pagination>
    </section>
    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getMineBlogs, delBlog } from "@/api/blog";
export default {
  data() {
    return {
      blogs: [], // 博客列表
      totalPage: 0, // 总页数
      total: 0, // 总条数
      page: 1 // 当前页码
    };
  },
  computed: {
    ...mapGetters("user", ["userInfo"]),
    userId() {
      return this.userInfo.id;
    }
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      let res = await getMineBlogs({
        userId: this.userInfo.id,
        page: this.page
      });
      this.blogs = res.data;
      this.total = res.total;
      this.totalPage = res.totalPage;
    },
    onPage(page) {
      this.getBlogs(page);
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await delBlog(id);
          if (res.status === "ok") {
            this.$message.success(res.msg);
            this.getBlogs();
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped lang="less">
.mine {
  .user {
    padding: 20px 0;
    display: flex;
    span {
      margin-left: 20px;
    }
    border-bottom: 1px solid #ccc;
  }
  .blogs {
    .blog-item {
      margin: 20px 0;
      display: grid;
      grid-template-columns: 80px 1fr; // 列
      grid-template-rows: 80px 80px 1fr; // 行
      .date-container {
        text-align: center;
        grid-column: 1;
        grid-row: 1 / 1;

        display: grid;
        span {
          margin: 4px 0;
          color: #999;
          font-size: 14px;
        }
        span.date {
          color: #333;
        }
      }
      .blog-container {
        margin-left: 20px;
        display: grid;
        grid-template-rows: 40px 40px 10px; // 行
        .descripton {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          /*设置省略号在容器第二行文本后*/
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .edit {
          grid-column: 1;
          grid-row: 4;
          color: #0094ff;
          font-size: 12px;
          span {
            cursor: pointer;
            margin-right: 20px;
            a {
              color: #0094ff;
            }
          }
        }
      }
    }
  }
}
</style>
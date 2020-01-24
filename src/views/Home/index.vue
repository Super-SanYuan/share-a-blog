<template>
  <div>
    home
  </div>
</template>

<script>
import { editBlog } from "@/api/blog";
export default {
  mounted() {
    editBlog({ blogId: 1 }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
</style>
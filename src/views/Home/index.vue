<template>
  <div>
    home
  </div>
</template>

<script>
import { getHome } from "@/api/home";
export default {
  mounted() {
    getHome().then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
</style>
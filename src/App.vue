<template>
  <div id="app">
    <Header id="header" />
    <main id="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: { Header, Footer }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

a {
  text-decoration: none;
  color: #333;
}
#app {
  display: grid;
  /* 行 */
  grid-template-columns: 12% auto 12%;
  /* 列 */
  grid-template-rows: auto 1fr auto;
  /* 布局指定区域 */
  grid-template-areas:
    "header header header"
    ".      main  ."
    "footer footer footer";
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;
  }
  #header,
  #footer {
    padding-left: 10px;
    padding-right: 10px;
  }
}

#header {
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}
#main {
  grid-area: main;
}
#footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

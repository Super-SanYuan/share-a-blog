<template>
  <div class="home">
    <section class="blog-item-container">
      <router-link to="/" class="blog-item">
        <figure class="avatar">
          <img
            src="https://blog-server.hunger-valley.com/avatar/63.jpg"
            alt=""
          />
          <figcaption>滴滴</figcaption>
        </figure>
        <h3>设计模式 <span>Ginger</span></h3>
        <p>设计模式原则 单一性原则 开放封闭原则</p>
      </router-link>
      <router-link to="/" class="blog-item">
        <figure class="avatar">
          <img
            src="https://blog-server.hunger-valley.com/avatar/63.jpg"
            alt=""
          />
          <figcaption>滴滴</figcaption>
        </figure>
        <h3>设计模式 <span>Ginger</span></h3>
        <p>设计模式原则 单一性原则 开放封闭原则</p>
      </router-link>
      <router-link to="/" class="blog-item">
        <figure class="avatar">
          <img
            src="https://blog-server.hunger-valley.com/avatar/63.jpg"
            alt=""
          />
          <figcaption>滴滴</figcaption>
        </figure>
        <h3>设计模式 <span>Ginger</span></h3>
        <p>设计模式原则 单一性原则 开放封闭原则</p>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {};
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
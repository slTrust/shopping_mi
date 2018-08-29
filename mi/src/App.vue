<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <TheFooter/>
  </div>
</template>
<script>
import TheFooter from '@/components/TheFooter.vue'

export default{
  components: {
    TheFooter
  },
  data () {
    return {
      transitionName: 'page-left'
    }
  },
  watch: {
    // 监听路由信息的变化
    '$route' (to, from) {
      this.transitionName = to.meta.index > from.meta.index ? 'page-left' : 'page-right'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 通用样式 */
.app-shell {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
/* .app-view-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
} */
.app-view {
  position: absolute;
  /* z-index: 999; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  will-change: transform;
  background: #fff;
  color: #3c3c3c;
}
.app-view-with-footer {
  padding-bottom: 52px;
}
.app-view-with-header {
  padding-top: 50px;
}
/* 头部通用样式 */
.app-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-wrapper>div {
  display: flex;
  align-items: center;
}
.app-header-item {
  display: block;
  width: 32px;
  margin: 0 10px;
}
.app-header-middle {
  flex: 1;
}

/*
过渡动画迁移到app.vue 因为这里的style里没有scope可以左右到所有的子组件
*/
.page-left-enter-active,
.page-left-leave-active,
.page-right-enter-active,
.page-right-leave-active
{
  transition: all .5s;
}
.page-left-enter,
.page-right-leave-to {
  transform: translateX(100%);
}
.page-left-enter-to,
.page-left-leave,
.page-right-enter-to,
.page-right-leave {
  transform: translateX(0);
}
.page-left-leave-to ,
.page-right-enter{
  transform: translateX(-100%);
}

</style>

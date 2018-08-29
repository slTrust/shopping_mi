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

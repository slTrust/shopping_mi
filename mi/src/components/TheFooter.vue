<template>
  <footer class="app-bottom-navigator-wrapper app-shell-footer">
    <div class="fill-height box-flex align-center">
      <!-- <a
        v-for="(nav,index) in navigation"
        :key="nav.icon"
        class="flex"
        :class="index==curIndex?'on':''"
        @click="curIndex = index"
        >
        <i class="iconfont" :class="nav.icon"></i>
        <span>{{nav.name}}</span>
      </a> -->
      <router-link
        v-for="nav in navigation"
        :key="nav.icon"
        class="flex"
        :class="nav.link==$route.name?'on':''"
        :to="nav.link"
        >
        <!-- 不在需要@click时触发标记当前焦点了  因为是router-link了 -->
        <i class="iconfont" :class="nav.icon"></i>
        <span>{{nav.name}}</span>
      </router-link>
    </div>
  </footer>
</template>
<script>
const navigation = [
  {
    name: '首页',
    icon: 'icon-shouye',
    link: 'home'
  },
  {
    name: '分类',
    icon: 'icon-fenlei',
    link: 'category'
  },
  {
    name: '购物车',
    icon: 'icon-gouwuche',
    link: 'cart'
  },
  {
    name: '我的',
    icon: 'icon-iconfuzhi',
    link: 'user'
  }
]
/*
在每次路由跳转的时候能获取 $route这个路由对象  能获取当前路由信息
*/
export default {
  data () {
    return {
      navigation
    }
  },
  updated () {
    console.log(this.$route)
  }
}
</script>
<style scoped>
.app-shell-footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
}
.app-bottom-navigator-wrapper {
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.fill-height {
  height: 100%;
}
.align-center {
  align-items: center;
}
.box-flex {
  display: flex;
}
.flex {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #999;
}
.iconfont {
  font-size: 24px;
}
.flex span {
  font-size: 12px;
}
.on {
  color: #ff6700;
}
</style>

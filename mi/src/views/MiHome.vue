<template>
<div class="app-view-wrapper">
  <div class="app-view">
    <header class="header">
      <div class="app-header-wrapper">
        <div class="app-header-left">
          <div class="app-header-item logo">
            <img src="../assets/images/searchlogo.png" alt="">
          </div>
        </div>
        <div class="app-header-middle">
          <div class="app-header-title">
            <i class="iconfont icon-sousuo"></i>&nbsp;&nbsp;
            搜索商品名称
          </div>
        </div>
        <div class="app-header-right">
          <div class="app-header-item">
            <i class="iconfont icon-user"></i>
          </div>
        </div>
      </div>
      <div class="nav">
        <div
          v-for="nav in navList"
          class="nav-item"
        >
          <span>{{nav.name}}</span>
        </div>
      </div>
    </header>
    <div class="page-wrap">
      <div class="bodys">
        bodys
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
  data () {
    return {
      msg: 'hello',
      navList: null
    }
  },
  beforeCreate () {
    console.log('beforeCreate:', this.msg)
  },
  // 异步数据获取和赋值给data
  created () {
    console.log('created:', this.getNavList())
    // 对动态元素  获取是空的
    // console.log(document.querySelectorAll('.nav-item'))
    // 对静态元素 获取是空的 因为没挂载
    console.log(document.querySelectorAll('.app-header-title'))
  },
  // 静态dom已挂载
  mounted () {
    console.log('mounted:')
    // 对动态元素  获取是空的
    // console.log(document.querySelectorAll('.nav-item'))
    // 对静态元素 获取不是空的 因为挂载了
    console.log(document.querySelectorAll('.app-header-title'))
    // 只有通过nextTick的时候 元素才能获取
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then(res => {
        this.navList = res.data.list
        // 动态数据赋值后，dom可操作 要通过nextTick
        // 只有通过nextTick的时候 元素才能获取
        this.$nextTick(() => {
          console.log(document.querySelectorAll('.nav-item'))
        })
      })
    }
  }
}
</script>

<style scoped>
.app-view {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* height: 100%; */
  overflow-x: hidden;
  overflow-y: auto;
  will-change: transform;
  background: #fff;
  color: #3c3c3c;
  padding-bottom: 52px;
}
.header {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  background: #f2f2f2;
}
.app-header-wrapper>div, .app-header-wrapper {
  display: flex;
  align-items: center;
}
.app-header-wrapper {
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-item {
  display: block;
  width: 32px;
  margin: 0 10px;
}
.app-header-item img {
  width: 80%;
}
.app-header-middle {
  flex: 1;
}
.app-header-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  color: rgba(0,0,0,.3);
  background-color: #fff;
  border-radius: 4px;
  height: 32px;
  padding-left: 12px;
}
.icon-people {
  font-size: 24px;
}
.nav {
  overflow-x: auto;
  background: #f2f2f2;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
}
.nav .nav-item {
  display: inline-block;
  padding: 0 14px;
}
.nav .nav-item span {
  display: inline-block;
  line-height: 32px;
  border-bottom: 2px solid rgba(237, 91, 0, 0);
}
.page-wrap {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.bodys {
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  background: rgba(237, 91, 0, 0.1);
  height: 800px;
  line-height: 800px;
  font-size: 72px;
}
</style>

<template>
  <div class="app-shell">
    <MiSearch title="分类" :loading="loading"/>
    <img v-if="loading" src="../assets/images/loading.png" class="loading_img">
    <div v-else class="app-view-wrapper">
      <div class="container app-view app-view-with-header app-view-with-footer">
        <div class="list-navbar">
          <ul>
            <!-- 先渲染左侧nav标签 -->
            <li
              v-for="(list,index) in categoryList"
              @click="changeIndex(index)"
              :key="list.category_id"
              :class="index==curIndex?'active':''">
              <a>
                <span>{{list.category_name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="list-wrap" @touchstart="wrapScroll">
          <div
            v-for="(list,index) in categoryList"
            :key="list.category_id"
            :class="'category'+index"
            :ref="'category'+index"
            class="list-item">
            <div class="component-list-main">
              <div class="cells_auto_fill">
                <a class="exposure items">
                  <img v-lazy="list.category_img" lazy="loaded">
                </a>
              </div>
              <template v-for="(item,index) in list.category_list">
                <div :key="'title'+index" class="category_title">
                  <span>{{item.category_title}}</span>
                </div>
                <CategoryGroup :key="'group'+index" :products="item.category_group"/>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 顶部搜索组件
import MiSearch from '../components/MiSearch.vue'
import CategoryGroup from '../components/CategoryGroup.vue'
import bus from '../bus.js'
export default{
  components: {
    MiSearch,
    CategoryGroup
  },
  data () {
    return {
      curIndex: 0,
      categoryList: null,
      loading: true,
      offsetTop: [], // 左侧nav对应右侧内容时的位置
      scrollTimer: null
    }
  },
  created () {
    this.getLists()
  },
  methods: {
    getLists () {
      this.$fetch('category').then(res => {
        this.categoryList = res.data.lists
        // 改变loading状态
        this.loading = false
        bus.$emit('loading', false)
        // 获取dom结构要通过nextTick
        this.$nextTick(() => {
          this.categoryList.forEach((item, index) => {
            this.offsetTop.push(this.$refs['category' + index][0].offsetTop)
          })
        })
      })
    },
    changeIndex (index) {
      document.querySelector('.list-wrap').removeEventListener('scroll', this.scrollHandler)
      this.curIndex = index
      document.querySelector('.list-wrap').scrollTo(0, this.offsetTop[index])
    },
    wrapScroll () {
      // 移动右边内容区域  的时候有滚动事件，但是你不知道它什么时候结束
      // 高级技巧 通过一个延时器监听 进入就清除定时器，然后重新生成定时器
      document.querySelector('.list-wrap').addEventListener('scroll', this.scrollHandler)
    },
    scrollHandler () {
      clearTimeout(this.scrollTimer)
      this.scrollTimer = null
      this.scrollTimer = setTimeout(() => {
        let scrollTop = document.querySelector('.list-wrap').scrollTop
        let len = this.offsetTop.length
        for (let i = 0; i < len; i++) {
          if (scrollTop >= this.offsetTop[i] && scrollTop < this.offsetTop[i + 1]) {
            this.curIndex = i
            console.log(this.curIndex)
            break
          }
        }
        // 为什么用touchstart 因为你是否记得在 点击左侧的时候有调用 scrollTo会触发滚轮事件
        // 这样 左右会相互作用，所以避免这种情况  用两个事件
      }, 100)
    }
  }
}
</script>
<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  flex-basis: 100%;
}
.container .list-navbar {
  position: fixed;
  top: 49px;
  bottom: 140px;
  left: 0;
  width: 80px;
  border-right: 1px solid #efefef;
  overflow: hidden;
}
.container .list-navbar ul {
  z-index: 90;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* 隐藏滚动条 */
  right: -6px;
  padding: 8px 6px 8px 0;
  background: #fefefe;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.container .list-navbar ul li.active {
  color: #fb7d34;
  transform: scale(1);
}
.container .list-navbar ul li {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: transform 0.1s linear;
  transform-origin: center center;
  transform: scale(0.76);
}
.container .list-navbar ul li span {
  display: inline-block;
}
.container .list-wrap {
  position: absolute;
  left: 80px;
  right: 0;
  top: 49px;
  bottom: 160px;
  padding: 2px 16px;
  overflow: auto;
}
.component-list-main .cells_auto_fill .items {
  height: auto!important;
  display: block;
}
.cells_auto_fill .items img{
  width: 260px;
  height: 104px;
  background: #f2f2f2;
}
.component-list-main .category_title {
  background: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  height: 66px;
  line-height: 66px;
  overflow: hidden;
}
.component-list-main .category_title span {
  position: relative;
}
.component-list-main .category_title span:after, .component-list-main .category_title span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%,-50%,0);
}
.component-list-main .category_title span:after {
  left: auto;
  right: 0;
  transform: translate3d(150%,-50%,0);
}

.box-flex>*, .box-inline-flex>* {
  flex: 1 1 auto;
}

.component-list-main .img {
  display: block;
  position: relative;
  overflow: hidden;
}

.loading_img{
  width:100%;
}

</style>

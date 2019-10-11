<!-- 分类页面 -->
<template>
  <div>
    <header class="headerbar">
      <van-search
        placeholder="请输入搜索关键字"
        v-model="value"
        @focus="focus"
      />
    </header>
    <section>

      <aside class="catebox-menu">
        <van-sidebar
          v-model="activeKey"
          class="van-sidebar"
        >
          <van-sidebar-item
            title="热门推荐"
            to="/hot"
          />
          <van-sidebar-item
            title="
            鲜花"
            to="/flower"
          />
          <van-sidebar-item title="永生花" />
          <van-sidebar-item title="蛋糕" />
          <van-sidebar-item title="巧克力" />
          <van-sidebar-item title="特色礼品" />
          <van-sidebar-item title="礼篮" />
          <van-sidebar-item title="绿植花卉" />
        </van-sidebar>

      </aside>
      <section class="catebox-details">
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>
 


<script>
export default {
  name: 'Fenlei',
  data() {
    return {
      value: '',
      activeKey: 0
    };
  },
  methods: {
    focus() {
      this.$router.push('/search')
    }
  }
}

</script>
<style  scoped>
.headerbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 9;
  height: 3.14285714rem;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background: #fff;
  overflow: hidden;
  border-bottom: 2px solid #f1f3f6;
}
.van-search {
  flex: 1;
}
.van-search__content {
  background-color: #e9ecf0;
}
.van-cell__value--alone {
  color: #71797f;
}
.catebox-menu {
  position: absolute;
  top: 3.14285714rem;
  left: 0;
  bottom: 3.5rem;
  z-index: 2;
  width: 25%;
  border-right: 2px solid #f1f3f6;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  
  overflow-x: hidden;
  overflow-y: auto;
}
.catebox-details {
  position: absolute;
  top: 3.14285714rem;
  left: 25%;
  width: 75%;
  bottom: 3.5rem;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
 
  overflow-x: hidden;
  overflow-y: auto;
}
.van-sidebar {
  width: 100%;
  text-align: center;
}
.catebox-menu-item {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.van-sidebar-item--select {
  border-color: #ff734c;
  color: #ff734c;
}
</style>
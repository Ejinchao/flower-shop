<!-- 商品列表 -->
<template>
  <div>
    <header>
      <van-nav-bar  title="爱情鲜花"  left-text=""  left-arrow @click-left="back"> 
        <div  class="nav-right"  slot="right">
          <van-icon  name="service-o"  color="#232628"></van-icon>
          <van-icon  name="wap-nav"  color="#232628"  @click="nav()"/>
        </div>
      </van-nav-bar>
    </header>


    <nav class="filter">
      <van-tabs  v-model="active"  sticky  title-active-color=#FF734C  title-inactive-color=#232628  line-height=0  nav-right="fff">
        <van-tab  v-for="(index,i) in list"  :key="i">
          <div slot="title">
            {{index.title}}
            <i :class="index.name"></i>
          </div>
          {{ category }}
        </van-tab>
      </van-tabs>
    </nav>

    <nav class="purpose">
      <div class="purpose-list">
        <div
          v-bind:class="{'purpose-tags':isa,'purpose-tags-active':i==isb}"
          @click="changeColor(i)"
          v-for="(item,i) in list2"
          :key="i"
        >
          <span>{{item.title}}</span>
        </div>
      </div>
    </nav>

    <aside class="purpose-filter">
      <van-popup  v-model="show"  position="right"  :style="{ height: '100%', width: '90%' }">
        <div class="purpose-layer-warp">
          <h4>人群</h4>
          <div class="purpose-layer-list">
            <div  class="purpose-layer-item"  v-for="(item,i) in list2" :key="i">
              <a  href="javascript:;"  class="navigation">{{item.title}}</a>
            </div>
          </div>
        </div>
      </van-popup>

    </aside>
    <section class="product">
      <div class="product-list">
        <div  class="product-item product-item-vertical"  v-for="(item,i) in 8"  :key="i">
          <a  href="javascript:;"  class="navigation">
            <div class="product-item-pic">
              <img  src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg"  alt="一往情深">
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name  text-overflow-line2">一往情深·精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</p>
              <div class="product-item-info-bottom">
                <p class="product-item-info-prices">
                  <strong>￥239</strong>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="bottomLoading">
        <ul class="product-footer-loading">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="product-footer-reachbottom">已经到底了。。。</p>
      </div>
    </section>
    <footer class="footer">
    </footer>
    <div class="scrollbox">
      <a
        href="javascript:;"
        class="scrollbox-item"
      >
        <van-icon name="service-o" />
      </a>
      <div
        class="scrollbox-item"
        @click="goTop()"
      >
        <van-icon name="upgrade" />
      </div>
    </div>

    <van-dialog
      v-model="showdia"
      title="修改库存"
      confirm-button-text="保存"
    >
      <van-row>商品名称:</van-row>
      <van-row>库存：</van-row>
    </van-dialog>
  
  </div>
</template>

<script>
export default {
  name: 'Prolist',
  data() {
    return {
      active: '',
      list: [{ title: '综合', name: 'aa', category: '' }, { title: '销量', name: 'aa', category: '' }, { title: '价格', name: 'filter-item-price', category: '' }, { title: '新品', name: 'aa', category: '' }],
      list2: [{ title: '送女友' }, { title: '送女友' }, { title: '送女友' }, { title: '送朋友' }, { title: '筛选' }],
      priceArrow: '',
      category: '',
      isa: true,
      isb: false,
      show: false,
      showdia: false

    };
  },
  methods: {
     back() {
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true;
    },
    changeColor(i) {
      this.isb = i;
      if (i == 4) {
        this.showPopup()
      }
    },

    move() {
      this.show == true;
      showPopup
    },
    goTop() {

      document.scrollingElement.scrollTop = 0;
    },
    nav() {
      this.showdia = true;
    }
  },

}
</script>
<style  scoped>
.van-nav-bar {
  font-size: 2rem;
  color: #232628;
}
.van-nav-bar .van-icon {
  color: inherit;
  vertical-align: middle;
  font-size: 1.42857143rem;
}
.van-nav-bar__title {
  font-size: 1.14285714rem;
  color: inherit;
}
.van-nav-bar__right {
  right: 0px;
  width: 6.28571429rem;
  height: 3.14285714rem;
  font-size: 0;
}
.van-nav-bar__left {
  left: 0px;
}
.van-nav-bar .van-icon[data-v-9d8cd3be] {
  color: inherit;
  vertical-align: middle;
  width: 3.14285714rem;
  height: 3.14285714rem;
  font-size: 1.42857143rem;
  line-height: 3.14285714rem;
}
.filter-item-price {
  position: relative;
  top: 0.14285714rem;
  margin-left: 0.28571429rem;
}
.filter-item-price::before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0;
  height: 0;
  font-size: 0;
  border: 0.28571429rem solid transparent;
  border-bottom-color: #b4babf;
}
.filter-item-price::after {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0;
  height: 0;
  font-size: 0;
  border: 0.28571429rem solid transparent;
  border-top-color: #b4babf;
  top: 0.57142857rem;
}
.purpose {
  background-color: #fff;
}
.purpose-list {
  padding: 0.71428571rem 0.28571429rem;
}
.purpose-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.purpose-list .purpose-tags {
  width: 20%;
  float: left;
  height: 1.71428571rem;
  padding: 0 0.28571429rem;
  font-size: 0;
  box-sizing: border-box;
  text-align: center;
}
.purpose-tags span {
  display: inline-block;
  width: 100%;
  height: 1.71428571rem;
  line-height: 1.71428571rem;
  font-size: 0.85714286rem;
  border-radius: 0.14285714rem;
  background-color: #f7f9fa;
}
.purpose-tags-active span {
  color: #ff734c;
  background: #fff;
  border: 1px solid #ff734c;
}
.purpose-layer-warp {
  /* height: 500px;
  width: 500px;
  background: red; */

  padding: 0 1em;
  overflow-x: hidden;
  overflow-y: auto;
}
.purpose-layer-warp > h4 {
  font-weight: 500;
  font-size: 1.14285714rem;
  padding: 1.14285714rem 0;
}
.purpose-layer-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  padding: 0 0.42857143rem;
  margin-bottom: 0.85714286rem;
  box-sizing: border-box;
}
.purpose-layer-item .navigation {
  height: 2.42857143rem;
  line-height: 2.42857143rem;
  background-color: #f7f9fa;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  border: 1px solid #f7f9fa;
  font-size: 0.85714286rem;
  color: inherit;
  display: block;
}
.product {
  margin-top: 0.57142857rem;
}
.product-list {
  padding: 0 0.28571429rem 1.14285714rem;
}
.product-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.product-item.product-item-vertical {
  float: left;
  width: 50%;
  padding: 0 0.28571429rem;
  margin-bottom: 0.57142857rem;
  border: 0;
  padding: 0 0.28571429rem;
  margin-bottom: 0.57142857rem;
  box-sizing: border-box;
}
.product-item > .navigation {
  background: #fff;
  overflow: hidden;
  -webkit-box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  -webkit-border-radius: 0.28571429rem;
  -moz-border-radius: 0.28571429rem;
  border-radius: 0.28571429rem;
  color: inherit;
  box-sizing: border-box;
}
.product-item.product-item-vertical .product-item-pic {
  max-height: 13.35714286rem;
  min-height: 13.35714286rem;
  overflow: hidden;
  box-sizing: border-box;
}
img {
  width: 100%;
  vertical-align: middle;
}
.product-item.product-item-vertical .product-item-info {
  padding: 0.57142857rem 0.57142857rem 1.14285714rem;
  height: 5.85714286rem;
  overflow: hidden;
  position: relative;
  background: #fff;
}
.product-item.product-item-vertical
  .product-item-info-name.text-overflow-line2 {
  line-height: 1.6;
}
.product-item.product-item-vertical .product-item-info-name {
  font-size: 0.85714286rem;
}
.product-item-info-name {
  font-weight: 300;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-item.product-item-vertical .product-item-info-bottom {
  position: absolute;
  left: 0.57142857rem;
  right: 0.57142857rem;
  bottom: 1.14285714rem;
  z-index: 1;
  display: flex;
}
.product-item.product-item-vertical .product-item-info-prices > strong {
  font-size: 1rem;
  color: #ff734c;
  font-weight: 500;
}
.product-footer-loading {
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23FF9B80' fill-rule='nonzero' opacity='.8' cx='16' cy='16' r='16'/%3E%3Cpath d='M18.233 17.481h-.913v-.776c-.031-.937-.997-1.009-1.028-1.01h-.001V10.21h1.03V8h1.518v2.21h4.116v1.485h-2.82s-1.296 0-1.296 1.181v.012a.601.601 0 0 1-.606.593zm-8.009 4.02a4.397 4.397 0 0 0 1.342-3.15h1.52v9.056a.603.603 0 0 1-.609.593h-.91v-4.673c-.11-.706-.801-.315-.801-.315l-.001-.005A6.134 6.134 0 0 1 7 20.294v-1.483a4.608 4.608 0 0 0 3.224-1.31zm8.98-1.841c0 1.181 1.295 1.181 1.295 1.181H23v1.484h-2.501s-1.43.002-1.191 1.326a3.7 3.7 0 0 0 1.011 1.776A3.833 3.833 0 0 0 23 22.517V24a5.364 5.364 0 0 1-3.754-1.524 5.115 5.115 0 0 1-1.561-3.668v-4.456h1.518v1.308zm-6.105-5.957v.507h1.03v1.484h-.001c-.032.001-1.03.075-1.03 1.059v.108a.602.602 0 0 1-.607.593h-.91v-.579c0-1.181-1.298-1.181-1.298-1.181H7.465V10.21h4.115V8H13.1v1.703z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 28px 28px;
  display: none;
}
.product-footer-loading > li {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  opacity: 0;
}
.product-footer-reachbottom {
  display: none;
  color: #71797f;
  font-size: 0.85714286rem;
}
.scrollbox {
  position: fixed;
  bottom: 7.14285714rem;
  right: 0.57142857rem;
  z-index: 100;
  display: block;
}
.scrollbox-item {
  display: block;
  width: 2.57142857rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  cursor: pointer;
  color: inherit;
}
.van-icon {
  font-size: 16px;
  line-height: 2.57142857rem;
}
.scrollbox-item {
  margin-top: 2.28571429rem;
}
.scrollbox-item > .van-icon {
  font-size: 1.42857143rem;
}
</style>
<!-- 分类-热门推荐 -->
<template>
  <div class="section">
    <header class="banner">
      <a href=""><img
          src="
        https://img02.hua.com/m/category/Classification/flower.png"
          alt=""
        ></a>
    </header>
    <section>
      <div class="object card">
        <div class="catebox-details-title">
          <h4 class="catebox-details-title-left">对象</h4>
          <div class="catebox-details-title-right">
            <a
              href=""
              class="navigation"
            ><i class="iconfont icon--trophy"></i>鲜花排行榜</a>
          </div>
        </div>
        <ul class="nav">
          <li
            v-for="(item,i) in list1"
            :key="i"
          ><a href="#">
              <img
                :src="item.pimg"
                alt=""
              >
              <p>{{item.pname}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="session card">
        <div class="catebox-details-title">
          <h4 class="catebox-details-title-left">场合</h4>

        </div>
        <ul class="nav">
          <li
            v-for="(item,i) in list2"
            :key="i"
          ><a href="#">
              <img
                :src="item.pimg"
                alt=""
              >
              <p>{{item.pname}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="material card">
        <div class="catebox-details-title">
          <h4 class="catebox-details-title-left">花材</h4>

        </div>
        <ul class="nav">
          <li
            v-for="(item,i) in list2"
            :key="i"
          ><a href="#">
              <img
                :src="item.pimg"
                alt=""
              >
              <p>{{item.pname}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="material card">
        <div class="catebox-details-title">
          <h4 class="catebox-details-title-left">颜色</h4>

        </div>
        <ul class="nav">
          <li
            v-for="(item,i) in list3"
            :key="i"
          ><a href="#">
              <img
                :src="item.pimg"
                alt=""
              >
              <p>{{item.pname}}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Flower',
  data() {
    return {
      list1: [{ pname: "全部", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png' }, { pname: "送女友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png' }, { pname: "送男友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png' }, { pname: "送长辈", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png' }, { pname: "送朋友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png' }],
      list2: [{ pname: "爱情", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Love.png' }, { pname: "生日", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Birthday.png' }, { pname: "探望", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Visit.png' }, { pname: "商务", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Business.png' }, { pname: "祝贺", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Congratulate.png' }, { pname: "婚庆", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Wedding.png' }, { pname: "道歉", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Apologize.png' }, { pname: "哀思", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Grief.png' }],
      list3: [{ pname: "全部", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png' }, { pname: "送女友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png' }, { pname: "送男友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png' }, { pname: "送长辈", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png' }, { pname: "送朋友", pimg: 'https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png' }, { pname: "商务鲜花", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_business.jpg' }, { pname: "巧克力", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_chocolate.jpg' }, { pname: "礼篮", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_baseket.jpg' }, { pname: "绿植花卉", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_plant.jpg' }, { pname: "企业团购", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_groupbuy.jpg' }]
    };
  },

}

</script>
<style  scoped>
.section {
  box-sizing: border-box;
  padding: 0.57142857rem 0.57142857rem 1.14285714rem;
}
.banner {
  height: 6.28571429rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  text-align: center;
  color: #fff;
  font-size: 0.85714286rem;
  margin-bottom: 0.57142857rem;
}
.banner img {
  display: block;
  height: 6.28571429rem;
  width: 100%;
}

.card {
  padding: 0.57142857rem 0.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  -webkit-box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
}
.catebox-details-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.85714286rem;
  padding: 0 0.85714286rem;
  box-sizing: border-box;
}
.catebox-details-title-left {
  font-weight: normal;
  flex: 1;
  margin: 0;
}
.catebox-details-title-right {
  text-align: right;
  color: #71797f;
  flex: 1;
  height: 1.42857143rem;
}
.navigation {
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-focus-ring-color: transparent;
}
.catebox-details-title-right > .navigation {
  display: inline-block;
  padding: 0 0.28571429rem;
  height: 2.57142857rem;
  font-size: 0.85714286rem;
}
.catebox-details-title-right > .navigation .iconfont {
  font-size: inherit;
}
.card li {
  float: left;
  width: 33.33333333%;
  padding: 0.57142857rem 0;
}
.nav::after {
  content: " ";
  display: block;
  clear: both;
}
.card li a {
  display: block;
  text-align: center;
}
.card li img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  vertical-align: middle;
  text-align: center;
}
.card li p {
  font-size: 0.85714286rem;
  font-weight: 300;
  line-height: 1.33333333;
  max-width: 6em;
  margin: 0.57142857rem auto 0;
  color: #232323;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
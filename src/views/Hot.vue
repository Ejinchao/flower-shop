<!-- 分类-热门推荐 -->
<template>
  <div class="section">
    <header class="banner">
      <a href=""><img
          src="
        https://img02.hua.com/slider/19_920_all_m.jpg"
          alt=""
        ></a>
    </header>
    <section>
      <ul>
        <li
          v-for="(item,i) in list"
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
    </section>

  </div>
</template>

<script>
export default {
  name: 'Hot',
  data() {
    return {
      list: [{ pname: "鲜花", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_flower.jpg' }, { pname: "蛋糕", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_cake.jpg' }, { pname: "永生花", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_ppf.jpg' }, { pname: "特色礼品", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_gift.jpg' }, { pname: "设计师款", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_you.jpg' }, { pname: "商务鲜花", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_business.jpg' }, { pname: "巧克力", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_chocolate.jpg' }, { pname: "礼篮", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_baseket.jpg' }, { pname: "绿植花卉", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_plant.jpg' }, { pname: "企业团购", pimg: 'https://img02.hua.com/m/category/m_category_flower_hot_groupbuy.jpg' }]
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
section {
  display: flex;
  flex-grow: 1;
  /* flex-direction: column; */
}
section li {
  float: left;
  width: 33.33333333%;
  padding: 0.57142857rem 0;
}
section li a {
  display: block;
  text-align: center;
}
section li img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  vertical-align: middle;
  text-align: center;
}
section li p {
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
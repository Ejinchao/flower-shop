<template>
  <div class="goods">
    <!-- 顶部导航条 -->
    <van-nav-bar
      fixed
      :title="goods.name"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- 详情图片轮播 -->
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in 2" :key="thumb">
        <img :src="goods.coverImg" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      text="好一朵迎春花，人人都爱它。相信很多人一想到春天这一段旋律就在耳边响起。因其在百花之中开花最早，花后即迎来百花齐放的春天而得名。迎春花花色艳丽，气质非凡，具有不畏寒威，不择风土，适应性强的特点，历来为人们所喜爱。"
      left-icon="volume-o"
    />

    <!-- 详情信息 -->
    <van-cell-group>
      <van-cell>
        <div class="goods-title">
          {{ goods.name }}
          <span class="cff5733" style="float:right ">
            经典款式
            <van-icon name="like-o" style="margin-left:20px" @click="addCollection" />
          </span>
        </div>
        <div class="goods-price">
          {{ goods.price }}
          <!-- <van-tag round color="#324c36">8折</van-tag>
          <van-tag round color="#324c36">App专享</van-tag>-->
          <!-- <van-col span="10">已售{{ goods.Sold }}万件</van-col> -->
        </div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell>
        <template slot="title">
          <span class="van-cell-text">花语</span>
          <span>喜欢像一阵风，而爱你是细水长流</span>
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <span class="van-cell-text">材料</span>
          <span>11枝香槟玫瑰，多头白色百合2枝，栀子叶8枝</span>
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <span class="van-cell-text">配送</span>
          <span>全国</span>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 配送地址选择 -->
    <van-cell-group>
      <van-cell value="配送至"></van-cell>
      <van-cell id="textAdress" title="地址" icon="location-o">
        <van-icon name="ellipsis" />
      </van-cell>
    </van-cell-group>

    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="service">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="onClickAdd">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="service">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      goods: {
        title: "恋恋情深-11枝香槟玫瑰，白色多头百合2枝",
        price: 268,
        express: "免运费",
        Sold: 0.6,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },

  methods: {
    onClickCart() {
      this.$router.push("cart");
    },
    service() {},
    onClickAdd() {
      let url = `http://api.cat-shop.penkuoer.com/api/v1/shop_carts`;
      let token = localStorage.getItem("token");
      let product = this.$route.params.id;
      let quantity = "1";
      let params = { product, quantity };

      this.$axios
        .post(url, params, {
          headers: { Authorization: "Bearer " + token }
        })
        .then(res => {
          alert(res.data.message);
        });
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      // Toast("按钮");
    },
    getName() {
      return this.goods.title.split("-")[0];
    },
    addCollection() {
      // Toast("收藏");
    }
  },
  //页面加载完成
  mounted() {
    let id = this.$route.params.id;

    let url = `http://api.cat-shop.penkuoer.com/api/v1/products/${id}`;
    this.$axios.get(url).then(res => {
      // console.log(res);
      this.goods = res.data;
    });
  }
};
</script>

<style scoped>
.goods {
  padding-bottom: 100px;
}
.goods-swipe img {
  width: 100%;
  display: block;
}

.goods-title {
  font-size: 16px;
}

.goods-price {
  color: #f44;
}

.goods-express {
  color: #999;
  font-size: 12px;
  padding: 5px 15px;
}

.goods-cell-group {
  margin: 15px 0;
}
.van-cell__value {
  color: #999;
}

.goods-tag {
  margin-left: 5px;
}
.goods-title {
  font-size: 12px;
}
.cff5733 {
  color: #ff5733;
}
.goods-title span {
  margin-left: 15px;
}
.goods-price {
  font-size: 14px;
  color: #ff5733;
}
.goods-price .van-tag {
  margin-left: 15px;
}
.van-cell {
  font-size: 10px;
}
.van-col {
  font-size: 10px;
  float: right;
  text-align: right;
}
.van-cell-text {
  margin-right: 18px;
}
/* #textAdress {
  display: inline-block;
} */

.van-goods-action {
  position: fixed;
  bottom: 50px;
}
</style>

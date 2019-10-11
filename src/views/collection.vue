<template>
  <div>
    <!-- 顶部导航条 -->
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <van-card
      v-for="item in collgoods"
      :key="item.id"
      :title="item.title"
      :price="formatPrice(item.price)"
      :thumb="item.thumb"
    >
      <div slot="footer">
        <van-button id="cancel" size="mini">取消收藏</van-button>
        <van-button id="addcart" size="mini">加入购物车</van-button>
        <van-divider :style="{ borderColor: '#d9d9d9'}" />
      </div>
    </van-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      collgoods: [
        {
          id: "1",
          title: "温柔如你--戴安娜粉玫瑰12枝，石竹梅7枝",

          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "2",
          title: "月光女神--白玫瑰11枝，绿色桔梗7枝，小菊3枝",
          price: 690,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        }
      ]
    };
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.van-card__price {
  color: #f44;

  position: absolute;
  bottom: 0;
}
#addcart {
  display: inline-block;
  position: absolute;
  bottom: 40px;
  right: 10px;
  color: #ff5733;
  border: 1px solid #ff5733;
  border-radius: 2px;
}
#cancel {
  display: inline-block;
  position: absolute;
  bottom: 40px;
  right: 80px;
  border: 1px solid #000;
  border-radius: 2px;
}
</style>
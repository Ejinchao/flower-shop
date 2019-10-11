<template>
  <div>
    <van-nav-bar left-arrow title="购物车" @click-left="onClickLeft" />

    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        checked-color="#ff551a"
        label-disabled="true"
        class="card-goods__item"
        v-for="item in goods"
        :key="item.product.id"
        :name="item.product.id"
      >
        <van-card
          :title="item.product.name"
          :desc="item.product.descriptions"
          :price="item.product.price"
          :thumb="item.product.coverImg"
        >
          <div slot="footer">
            <van-stepper v-model="item.num" async-change @change="onChange" />
            <van-button id="del" size="mini">删除</van-button>
            <van-divider :style="{ borderColor: '#d9d9d9'}" />
          </div>
        </van-card>
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />

    <div class="more">购买该商品的还购买了</div>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" :key="i" v-for="i in 4">
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span>永生花带灯</span>
        <span class="morePrice">￥398</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedGoods: ["5d8b715e26a7dacece268de9"],
 
       goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
    };
  },

  mounted() {
    let url = `http://api.cat-shop.penkuoer.com/api/v1/shop_carts`;
    let token = localStorage.getItem("token");
  //   this.$axios
  //     .get(url, {
  //       headers: { Authorization: "Bearer " + token }
  //     })
  //     .then(res => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         console.log(res.data);
  //         this.goods = res.data.filter(el => el.product != null);
  //         this.goods.forEach(el => {
  //           this.checkedGoods.push(el._id);
  //         });
  //         console.log(this.goods);
  //         console.log(this.checkedGoods);
  //       } else {
  //         // Toast(res.data.msg);
  //         console.log(res.statusText);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },

    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },

  methods: {
    onSubmit() {
      // Toast("点击结算");
      this.$router.push({
        name: "cartSubmit"
      });
    },
    onChange() {
      // this.value = value;
    },
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>


<style scoped >
.card-goods {
  padding: 10px 0;
  background-color: #fff;
}
.card-goods__item {
  position: relative;
  background-color: #fafafa;
}

.card-goods__item .van-checkbox__label {
  width: 100%;
  height: auto;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}

.van-checkbox__icon {
  top: 50%;
  left: 10px;
  z-index: 1;
  position: absolute;
  margin-top: -10px;
}

.van-card__price {
  color: #f44;
  font-size: 18px;
  position: absolute;
  bottom: 0;
}
.van-submit-bar {
  bottom: 50px;
}
.van-card__footer {
  overflow: hidden;
}
.van-stepper {
  display: inline-block;
  position: absolute;
  bottom: 40px;
  right: 70px;
}
#del {
  display: inline-block;
  position: absolute;
  bottom: 40px;
  right: 5px;
}
.more {
  padding-left: 27px;
  font-size: 12px;
  color: #ff551a;
}
.van-grid-item .van-image {
  width: 54px;
  height: 54px;
}
.van-grid-item span {
  font-size: 10px;
  line-height: 18px;
}
.morePrice {
  color: #ff551a;
}
</style>
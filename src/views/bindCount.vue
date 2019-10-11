<!-- 绑定账号 -->
<template>
  <div>
    <van-nav-bar
      title="账号绑定"
      left-arrow
      @click-left="back()"
    />

    <van-nav-bar
      :title=mobileNum
      left-text="手机"
      right-text="已绑定"
      right-arrow
      @click-right="onClickRight1"
    >
      <div slot="right">
        <i>已绑定</i>
        <van-icon
          name="arrow"
          color="#000"
        ></van-icon>
      </div>
    </van-nav-bar>
    <van-nav-bar
      :title=email
      left-text="邮箱"
      right-text="已绑定"
      right-arrow
      @click-right="onClickRight2"
    >
      <div slot="right">
        <i>已绑定</i>
        <van-icon
          name="arrow"
          color="#000"
        ></van-icon>
      </div>
    </van-nav-bar>

    <van-cell-group style="margin-top:8px;">
      <van-field
        label="关联第三方账号"
        style="font-size: 12px;"
      />
      <van-field
        v-model="wechat"
        label="微信"
        :placeholder=promit
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
        >关联</van-button>
      </van-field>
      <van-field
        v-model="QQ"
        label="QQ"
        :placeholder=promit
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
        >关联</van-button>
      </van-field>
      <van-field
        v-model="myPay"
        label="支付宝"
        :placeholder=promit
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
        >关联</van-button>
      </van-field>
    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {

    return {
      checked: true,
      radio: '1',
      mobileNum: '1234567',
      email: '1234567@vip.hua.com',
      currentDate: new Date(),
      show: false, date: '2008.08.08',
      promit: '未关联',
      wechat: '',
      QQ: '',
      myPay: ''
    };
  },
  methods: {
    back() {
      history.back(-1)
    },

    onClickRight1() {
      Toast('返回');
    },
    onClickRight2() {
      Toast('按钮');
    }
  }
}

</script>
<style  scoped>
.van-nav-bar__text {
  font-size: 14px;
  color: #323233;
}
i {
  font-style: normal;
}
.van-button--primary {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  height: 25px;
  line-height: 25px;
}
.van-cell__title {
  font-size: 12px;
}
.van-nav-bar .van-icon {
  color: #000;
}
</style>
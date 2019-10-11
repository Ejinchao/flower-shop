<!--  -->
<template>
  <div>
    <van-nav-bar left-arrow title="提交订单" @click-left="onClickLeft" />
    <!-- 收货地址 -->
    <van-cell-group>
      <van-cell
        id="adrName"
        title="查洋 188 9539 9726"
        label="安徽合肥市蜀山区社钢路374号"
        size="large"
        is-link
        to="AddressList"
      />
    </van-cell-group>

    <van-cell-group>
      <van-cell id="date" title="送达日期" @click="showPopup" is-link>
        <span class="newDate">{{newDate}}</span>
        请选择
        <!-- 日期时间选择 -->
        <van-popup v-model="show" :style="{ height: '40%',width:'100% '}" @click.stop>
          <van-datetime-picker
            @confirm="getDate"
            @cancel="back"
            v-model="currentDate"
            type="date"
            :max-date="maxDate"
            :min-date="minDate"
            :formatter="formatter"
          />
        </van-popup>
      </van-cell>
      <van-cell title="您的姓名/手机" is-link>请选择</van-cell>
      <van-cell id="leavingMessage" title="贺卡留言" label="填写即赠精美贺卡" is-link></van-cell>
    </van-cell-group>

    <!-- 优惠券 -->
    <van-cell-group>
      <!-- <van-cell title="备注/优惠券/权益卡/发票" is-link></van-cell> -->
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        title="备注/优惠券/权益卡/发票"
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </van-cell-group>

    <!-- 已购商品 -->
    <van-card
      :key="i"
      v-for="i in 2"
      num="1"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <van-cell-group>
      <van-cell title="商品总金额" value="￥30.50" />
    </van-cell-group>
    <!-- 底部结算 -->
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit" />
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 3
      ),
      maxDate: new Date(
        new Date().getFullYear() + 1,
        new Date().getMonth() + 3,
        1
      ),
      show: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      newDate:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        (new Date().getDate() + 3)
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    onClickLeft() {
      this.$router.back();
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onSubmit() {},
    back() {
      this.show = false;
    },
    getDate(d) {
      this.newDate =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      this.show = false;
    }
  }
};
</script>
<style  scoped>
.van-cell-group {
  margin-bottom: 10px;
}
#adrName {
  position: relative;
}
.van-cell__title span {
  font-size: 14px;
}
.van-cell__label {
  font-size: 12px;
}
#adrName .van-cell__right-icon {
  position: absolute;
  top: 25px;
  right: 16px;
}
#date .van-cell__label,
#leavingMessage .van-cell__label {
  display: inline-block;
  margin-left: 25px;
}
.newDate {
  color: #000;
  position: absolute;
  left: 0;
}
</style>
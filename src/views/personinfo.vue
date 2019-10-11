<!-- 个人信息 -->
<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-text=""
      right-text="保存"
      left-arrow
      @click-left="back()"
      @click-right="save()"
    />

    <van-cell-group>
      <div class="imgbox">

        <a
          href="javascript:;"
          class="avatar-item"
        ><img
            src="//img02.hua.com/pc/assets/img/avatar_default_06.jpg"
            alt=""
            class="avatar-item-pic"
          >
          <p class="avatar-item-desc">点击修改头像</p>
        </a>

      </div>

      <van-field
        v-model="username"
        label="姓名"
        placeholder="请输您的姓名"
      />

      <van-field
        v-model="phone"
        label="手机"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="phone"
        label="邮箱"
        placeholder="请输入邮箱号"
      />
    </van-cell-group>
    <van-nav-bar
      left-text="性别"
      style="color:#000"
    >
      <van-icon slot="title">
        <van-radio-group v-model="radio">
          <van-radio
            name="1"
            checked-color='#000'
            style="float:left"
          >男</van-radio>
          <van-radio
            name="2"
            checked-color='#000'
            style="float:left;margin-left:60px"
          >女</van-radio>
        </van-radio-group>
      </van-icon>
    </van-nav-bar>
    <van-field
      v-model="phone"
      label="生日"
      :placeholder=date
      @focus="settime"
    >
    </van-field>

    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' ,width:'100%'}"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="admit"
        @cancel="cancel"
      />
    </van-popup>

  </div>
</template>

<script>
export default {
  data() {

    return {
      checked: true,
      radio: '1',
      phone: '',
      username: '',
      currentDate: new Date(),
      show: false, date: '2008.08.08'
    };
  },
  methods: {
    back() {
      history.back(-1)
    },
    save() {
      console.log(5555)
    },
    showPopup() {
      this.show = true;
    },
    settime() {
      this.show = true;
    },
    admit() {
      this.show = false;
      console.log(this.currentDate.toLocaleDateString())
      this.date = this.currentDate.toLocaleDateString()
    }, cancel() {
      this.show = false;
    }
  }
}

</script>
<style  scoped>
.van-nav-bar__text {
  font-size: 14px;
  color: #323233;
}
body .profile-list .profile-avatar .avatar-item {
  display: inline-block;
  margin-top: 1.42857143rem;
}
.avatar-item-pic {
  width: 4.57142857rem;
  height: 4.57142857rem;
  border-radius: 50%;
}
.avatar-item-desc {
  font-size: 0.85714286rem;
  color: #232628;
  margin: 0;
}
.imgbox {
  height: 9.42857143rem;
  border-bottom: 1px solid #ebedf0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-nav-bar .van-icon {
  color: #000;
}
</style>
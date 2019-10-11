





<template>
  <div class="about">
    <van-nav-bar left-arrow title="关于我们" @click-left="onClickLeft" />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style>
</style>
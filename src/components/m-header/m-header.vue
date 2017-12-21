<template lang="html">
  <div class="m-header">
  <!--   <div class="icon"></div> -->
    <p  class="text">
      <span @click="goMain()">9158</span>
      <span class="icon" @click="actor()">
      <!--   <x-icon  type="navicon"  size="35" color="#fff"></x-icon> -->
      <img src="../../common/image/icon_header.png" alt="">
      </span>
    </p>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    goMain: function() {
      this.$router.push('/main')
    },
    actor: function() {
      this.$store.commit('openDrawer')
      // alert('12月8日12点,正式开放注册敬请期待')
    }
  }
}
</script>

<style lang="less">
@import '~common/less/variable.less';
.m-header{
/*   position: fixed;
.top(0);
.left(0); */
  z-index: 999;
  color: #fff;
  background: @bg-mheader;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid @font-gray;
  // .h(45);

  .w(375);
  p{
    .fs(18);
    .h(45);
    text-align: center;
    .l-h(45);
    position: relative;
  }
  .icon{
    .w(25);
    .h(25);
  /* border: 1px solid green; */
    color: #fff;
    position: absolute;
    .top(7);
    .left(10);
    img{
      width: 100%;
    }
  }

}
</style>

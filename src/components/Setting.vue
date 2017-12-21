<template lang="html">
  <div class="setting">
    <m-header  >
    </m-header>
    <div class="ttip-firstline">
      <p class="title">设置</p>
    </div>
    <div class="qq help-item" @click="jumptoforgrtpass">
      <span class="left">找回密码</span> <span class="right">></span>
    </div>
    <!-- <div class="wx help-item">
       <span class="left">官方客服微信群</span> <span class="right">22222</span>
    </div>
    <div class="wxq help-item">
      <span class="left">官方客服微信</span> <span class="right">22222</span>
    </div> -->
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
export default {
  components:{
    MHeader
  },
  methods:{
    jumptoforgrtpass: function(){
      this.$router.push('/main/userInfo/forgetpass')
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.setting {
  position: absolute;
  .left(0);
  .top(0);
  background: #1D232E;
  height: 100vh;
  width: 100%;
  color: @font-gray;
  .ttip-firstline {
    .m-t(30);
    .fs(18);
    .h(40);
    color: #fff;
    position: relative;
    .title {
      position: absolute;
      .top(5);
      .left(168)
    }
  }
  span {
    .h(60);
    .l-h(60);
    .w(150);
    .fs(15);
    border-radius: 55px;
    color: @font-white;
  }
  .help-item {
    width: 100%;
    .h(60);
    background: #323744;
    .l-h(60);
    margin: 0 auto;
    .left {
      float: left;
      text-align: left;
      .m-l(15);
    }
    .right {
      float: right;
      text-align: right;
      .m-r(25);
    }
  }
}
</style>

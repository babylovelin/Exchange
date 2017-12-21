<template lang="html">
  <div class="help">
    <m-header  >
    </m-header>
    <div class="ttip-firstline">
      <p class="title">客服帮助</p>
    </div>
    <div class="qq help-item">
      <span class="left">官方QQ群1</span> <span class="right">623745774</span>
    </div>
    <div class="qq help-item">
      <span class="left">官方QQ群2</span> <span class="right">377262831</span>
    </div>
    <div class="wx help-item">
       <span class="left">官方微信1</span> <span class="right">exchange9158</span>
    </div>
    <div class="wxq help-item">
      <span class="left">官方微信2</span> <span class="right">key490699</span>
    </div>
    <div class="wxq help-item">
      <span class="left">官方邮箱</span> <span class="right">jiaoyisuo9158@163.com</span>
    </div>
    <div class="wxq help-item">
      <span class="left">官方电报群</span> <span class="right">https://t.me/Exchange9158</span>
    </div>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
export default {
  components:{
    MHeader
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.help {
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
      .left(150)
    }
  }
  span {
    .h(40);
    .l-h(40);
    .fs(15);
    color: @font-white;
  }
  .help-item {
    width: 90%;
    .h(60);
    margin: 0 auto;
    .left {
      float: left;
      text-align: left;
      .w(120);
    }
    .right {
      float: right;
      text-align: right;
      .w(190);
    }
  }
}
</style>

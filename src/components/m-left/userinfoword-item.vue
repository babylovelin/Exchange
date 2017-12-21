<template lang="html">
  <div class="word-div vux-1px-b">
    <span class="left" style="padding-left:15px">{{leftword}}</span>
    <span class="right"><x-icon class="myicon" type="ios-arrow-forward" size="45"></x-icon></span>
    <span class="right">{{rightword}}</span>
  </div>
</template>

<script>
export default {
  props: ['leftword', 'rightword']
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.word-div {
  color:@font-gray;
  .h(70);
  background-color: #3D4859;
  width: 100%;
  position: relative;
  // border-bottom: 1px solid #aaa;
  span {
    display: inline-block;
    .h(70);
    .l-h(70);
  }
  .left {
    float: left;
    .fs(17);
  }
  .right {
    float: right;
    .h(70);
    .l-h(70);
    .fs(17);
    .m-r(30);
  }
  .myicon {
    position: absolute;
    .right(5);
    .top(15);
    color: #fff;
  }
  .vux-x-icon {
  fill: #fff;
}
}
</style>

<template lang="html">
  <div class="img-div">
    <span class="left" style="padding-left:15px">{{leftword}}</span>
    <span class="right"><x-icon class="myicon1" type="ios-arrow-forward" size="45" style="float:right"></x-icon></span>
    <span class="right"><img class="myicon2" v-bind:src="rightword" alt=""></span>

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
.img-div {
  color:@font-gray;
  .h(70);
  background-color: #3D4859;
  width: 100%;
  border-bottom: 1px solid #aaa;
  position: relative;
  span {
    display: inline-block;
    .h(70);
    .l-h(70);
    .myicon1 {
      position: absolute;
      .right(5);
      .top(15);
    }
    .myicon2 {
      position: absolute;
      .right(60);
      .top(15);
    }
  }
  .left {
    float: left;
    .fs(17);
  }
  .right {
    float: right;
    .fs(17);
    img {
      display: block;
      .w(35);
      .h(35);
    }
  }
}
.vux-x-icon {
fill: #fff;
}
</style>

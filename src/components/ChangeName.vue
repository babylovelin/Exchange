<template lang="html">
  <div class="out" style="height:100vh;background-color:#2c3443">
    <m-header  >
    </m-header>
    <div class="changename">
      <p class="tocenter">修改昵称</p>
    </div>
    <div class="changename next">
      <div class="">
        <input id="username" type="text" name="" value="">
      </div>
       <x-icon type="ios-close-empty" size="50" @click="empty"></x-icon>
    </div>
    <div class="confirm">
      <div class="confirmbutton">
        确定
      </div>
    </div>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
export default {
  components: {
    MHeader
  },
  methods:{
    empty: function() {
      document.getElementById("username").value="";
      document.getElementById("username").focus();
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
  .out {
    position: absolute;
    left: 0;
    top: 0;
  }
  p {
    text-align: center;
    .fs(20);
    .l-h(70);
    color: #fff;
  }
  .changename {
    .h(70);
    position: relative;
  }
  .next {
    background-color: #3d4859;
  }
  .input_control{
    .w(50);
    margin:2px auto;
  }
  input[type="text"] {
    box-sizing: border-box;
    text-align:center;
    .fs(18);
    .h(40);
    border-radius:4px;
    color:#999999;
    -web-kit-appearance:none;
    -moz-appearance: none;
    display:block;
    outline:0;
    text-decoration:none;
    width:50%;
    background: #3d4859;
    position: absolute;
    .left(10);
    .top(15);
  }
  .vux-x-icon {
  fill: #fff;
  position: absolute;
  .right(20);
  .top(10);
}
.confirm {
  .h(50);
  .m-t(150);
  .confirmbutton {
    .w(100);
    .h(40);
    .fs(20);
    text-align: center;
    .l-h(40);
    color: #aaa;
    margin:0 auto;
    border-radius: 2px;
    background-color: #3d4859;
  }
}
</style>

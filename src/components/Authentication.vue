<template lang="html">
  <div class="authentication">
    <m-header  >
    </m-header>
    <div class="changename">
      <p class="tocenter">身份认证</p>
    </div>
    <userinfoword-item v-for='item in userinfoword' :leftword="item.leftword" :rightword="item.rightword">
    </userinfoword-item>
    <userinfoinput-item></userinfoinput-item>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
import UserinfowordItem from './m-left/userinfoword-item'
import UserinfoinputItem from './m-left/userinfoinput-item'
export default {
  data() {
    return {
      userinfoword: [{leftword: '选择国籍', rightword: '未设置'}, {leftword: '证件类型',rightword:'身份证'}]
    }
  },
  components: {
    MHeader,
    UserinfowordItem,
    UserinfoinputItem
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
  .authentication {
    background: @bg-body;
    // background-image: url('../bg/17.png');
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    .left(0);
    .top(0);
  }
  p {
    text-align: center;
    .fs(16);
    .l-h(70);
    color: #fff;
  }
  .changename {
    .h(70);
    position: relative;
  }
</style>

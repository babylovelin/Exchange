<template lang="html">
  <div class="h" style="height:100vh;background-color:#2c3443">
    <m-header  >
    </m-header>
    <userinfoimage-item v-for='item in userinfoimage' :leftword="item.leftword" :rightword="item.rightword">
    </userinfoimage-item>
    <userinfoword-item v-for='item in userinfoword' :leftword="item.leftword" :rightword="item.rightword">
    </userinfoword-item>

  </div>
</template>

<script>
import MHeader from './m-header/m-header'
import UserinfoimageItem from './m-left/userinfoimage-item'
import UserinfowordItem from './m-left/userinfoword-item'
export default {
  data() {
    return {
      userinfoimage: [{leftword: '头像', rightword: 'src/common/image/icon_header.png'}],
      userinfoword: [{leftword: '昵称', rightword: '未设置'}, {leftword: '实名认证',rightword:'未认证'}, {leftword:'账户', rightword:'000××@qq.com'}]
    }
  },
  components: {
    MHeader,
    UserinfoimageItem,
    UserinfowordItem
  }
}
</script>

<style lang="less">
  .h{
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

<template lang="html">
<div class="img_contain">
<m-header class="top"></m-header>

<div class="contain">
      <button type="button"  v-on:click="goreg()"></button>
    <img class="active_img" src="../common/image/regactive.jpg" alt="">
</div>
</div>


</template>

<script>
import MHeader from './m-header/m-header'
export default {
  methods: {
    goreg: function() {
      this.$router.push('reg')
    }
  },
  components: {
    MHeader
  }
}
</script>

<style lang="less">
@import '../common/less/variable.less';
.img_contain{
  background:rgb(0,16,41);
  height: 100%;
  display: flex;
  flex-direction:column;
  .top{
    .h(45);
  }
  .contain{
    .w(375);
    position: relative;
    flex-grow:1;
    overflow: scroll;
    .active_img{
      .w(375);

    }
    button{
      position: absolute;
      .top(200);
      .left(200);
      .w(150);
      .h(50);
      opacity: 0;
    }
  }
}

</style>

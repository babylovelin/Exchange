<template lang="html">
  <div class="money">
    <m-header  >
    </m-header>
    <div class="money-top">
      <p>折合BTC估量</p>
    </div>
    <div class="money-mid">
      <div class="mid money-mid-left">
          <p class="p1">1.0000141</p>
          <p class="p2">总资产</p>
      </div>
      <div class="mid money-mid-mid">
          <p class="p1">1.0000141</p>
          <p class="p2">可用</p>
      </div>
      <div class="mid money-mid-right">
          <p class="p1">1.0000141</p>
          <p class="p2">冻结</p>
      </div>
    </div>
    <div class="money-bottom">
      <div class="bottom">
          <span class="money-bottom-left" @click="jumptocb">充币</span>
      </div>
      <div class="bottom">
          <span class="money-bottom-right" @click="jumptotb">提币</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumptocb: function(){
      this.$router.push('/main/userInfo/recharge');
    },
    jumptotb: function(){
      this.$router.push('/main/userInfo/ttip');
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.money {
  background: #1d232e;
  height: 45vh;
  .money-top {
    p{
      .fs(15);
      color: #9da5b4;
      font-weight: 500;
      .padding(15);
      text-align: center;;
    }
  }
}
.money-mid {
  .padding(15);
  .mid {
    .fs(15);
    width: 33%;
    display: block;
    float: left;
    text-align: center;
  }
  .money-mid-left {
    .p1 {
      color: #fff;
      font-weight: 500;
    }
    .p2 {
      color: @font-gray;
    }
  }
  .money-mid-mid {
    .p1 {
      color: green;
      font-weight: 500;
    }
    .p2 {
      color: @font-gray;
    }
  }
  .money-mid-right {
    .p1 {
      color: red;
      font-weight: 500;
    }
    .p2 {
      color: @font-gray;
    }
  }
}
.money-bottom {
  .fs(15);
  color: #fff;
  font-weight: 500;
  position: relative;
  width: 100%;
  .bottom {
      text-align: center;
      .l-h(35);
      float: left;
      display: block;
      .w(375/2);
      .h(100);
      position: relative;
      .money-bottom-left {
        .w(100);
        .h(35);
        border-radius: 3px;
        background: @bg-button;
        position: absolute;
        .left(40);
        .bottom(20);
      }
      .money-bottom-right {
        display: block;
        .w(100);
        .h(35);
        border-radius: 3px;
        background: @bg-button;
        position: absolute;
        .right(40);
        .bottom(20);
      }
  }
}
.vux-x-icon {
fill: #fff;
}
.hide {
display: none;
}
.dis {
display: block;
}
</style>

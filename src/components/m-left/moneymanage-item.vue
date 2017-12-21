<template lang="html">
  <div class="moneymanageitem">
    <div class="item-top">
      <div class="item-div item-left">
        <span>{{coin.toUpperCase()}}</span>

      </div>
      <div class="item-div item-right">
        <span class="span1">总资产</span>  <span class="span2">{{allNum}}</span>
      </div>
    </div>
    <div class="item-bottom">
      <div class="item-div item-left">
        <div class="item-div-top">
          <span class="span1">冻结</span>
          <span class="span2">{{frozen}}</span>
        </div>
        <div class="item-div-bottom">
          <span class="span1">可用</span>
          <span class="span2">{{allNum-frozen}}</span>
        </div>
      </div>
      <div class="item-div item-right">
        <span class="cb" @click='jumptocb' v-bind:class="dis==1?'disbg':''">充币</span>
        <span class="tb" @click='jumptotb'>提币</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['coin','allNum','frozen','dis'],
  data(){
    return {
      coin:''
    }
  },
  methods: {
    jumptocb: function(){
      if(this.coin=='tch'){
        alert("充值功能暂未开放");
        return false;
      }
      let url = '/main/userInfo/recharge/'+this.coin.toUpperCase();
      this.$router.push(url);
    },
    jumptotb: function(){
      alert("提币功能暂未开放");
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.moneymanageitem {
  color: #fff;
  .item-top {
    .item-div {
      float: left;
      width: 50%;
      text-align: center;
      .h(50);
      .l-h(70);
    }
    .item-left {
      .fs(18);
      // text-align: left;
      span{
        display: inline-block;
        text-align: left;
        .w(140);
      }
    }
    .item-right {
      .fs(13);
      .span1 {
        display: inline-block;
        .m-r(10);
        color: @font-gray;
      }
    }
  }
  .item-bottom {
    .fs(12);
    .item-div{
      width: 50%;
      text-align: center;
      float: left;
      .h(70);
      span {
        display: inline-block;
      }
      .span1 {
        color: @font-gray;
        .w(40);
        text-align: left;
      }
      .item-div-top {
        .h(35);
        .l-h(35);
        .span2 {
          .w(100);
          color: red;
          text-align: left;
        }
      }
      .item-div-bottom {
        .span2 {
          color: green;
          .w(100);
          text-align: left;
        }
      }
    }
    .item-left {
      border-bottom: 1px solid #444;
    }
    .item-right {
      position: relative;
      border-bottom: 1px solid #444;
      span {
        display: block;
        .w(50);
        .h(25);
        .fs(11);
        border-radius: 2px;
        background: @bg-button;
        position: absolute;
        .top(25);
        .l-h(25);
      }
      .cb {
        .left(5);
      }
      .tb {
        .right(30);
        background:  #666;
        color: #fff;
      }
      .disbg{
        background:  #666;
        color: #fff;
      }
    }

  }

}
</style>

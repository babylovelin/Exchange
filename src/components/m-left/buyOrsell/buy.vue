<template lang="html">
  <div class="buy vux-1px-b" id="buy">
    <div class="buytop">
      <div class="left top-item">
        <span>{{(buy_kind).toUpperCase()}}</span><span>/</span> <span>{{(market_kind).toUpperCase()}}</span>
        <!-- <span>qwe</span><span>/</span> <span>dasd</span> -->
      </div>
      <div class="right top-item">
        <span>{{time | formatDate}}</span>
        <!-- <span>2017-10-32 12:12:12</span> -->
      </div>
    </div>
    <div class="buybottom">
      <div class="bottom-item bottom-left">
        <p class="bottomp1"><span>价格:</span><span>{{price}}</span></p>
          <!-- <p class="bottomp1"><span>价格:</span><span>0.00125</span></p> -->
          <p class="bottomp1"><span>数量:</span><span>{{buy_num}}</span></p>
          <!-- <p class="bottomp1"><span>数量:</span><span>40000</span></p> -->
      </div>
      <div class="bottom-item bottom-mid">
        <p><span>手续费:</span><span>0</span></p>
        <!-- <p><span>手续费:</span><span>0</span></p> -->
        <p><span>成交总额:</span><span>{{(buy_num*price).toFixed(8)}}</span><span>{{market_kind.toUpperCase()}}</span> </p>
        <!-- <p><span>交易金额:</span><span>20000</span><span>tch</span> </p> -->
        <p><span>订单号:</span> <br> <span>{{dd}}</span></p>
        <!-- <p><span>订单号:</span> <br> <span>022222222222222222</span></p> -->
      </div>
      <div class="bottom-item bottom-right">
        <span>认</span>
      </div>
    </div>
    <div style="clear:both">

    </div>
  </div>
</template>

<script>
import {formatDate} from '../../../common/js/date.js'
export default {
  props:['buy_kind','market_kind','price','buy_num','time','dd'],
  filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
        }
    }
}
</script>

<style lang="less">
@import '~common/less/variable.less';

.buy {
  .h(150);
  position: relative;
  background: #1D232E;
  color: @font-white;
  .fs(16);
  .buytop {
    width:90%;
    margin: 0 auto;
    .h(40);
    .l-h(40);
    // .padding(15);
    .left {
      float: left;
    }
    .right {
      color: @font-gray;
      float: right;
      .fs(13);
    }
  }
  .buybottom {
    .fs(12);
    .h(100);
    width:90%;
    margin: 0 auto;
    .bottom-item {
      .h(100);
      float: left;
    }
    .bottom-left {
      .w(100);
      .bottomp1 {
        .p-t(25);
      }
    }
    .bottom-mid {
      .w(170);
      p {
        .p-t(8);
      }
    }
    .bottom-right {
      .w(60);
      span{
        display: block;
        .w(40);
        .h(40);
        .m-t(45);
        .m-l(20);
        text-align: center;
        .l-h(40);
        background: green;
        border-radius: 100%;
        .fs(15);
      }
    }
  }

}
</style>

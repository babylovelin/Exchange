<template lang="html">
 <div class="trad_contain">
   <m-header></m-header>
   <m-tab :tabdata='tabs'></m-tab>
   <div class="selcoin" >
       {{coinsel}}/BTC
      <x-icon v-on:click="openSheet()"
      type="ios-arrow-down" size="30"></x-icon>
   </div>
   <div class="view_contain">
     <router-view>
     </router-view>
   </div>
  <div v-transfer-dom>
   <popup v-model="show11" position="bottom">
     <div class="position-vertical-demo sel-item"
     v-for='coin in coins'
     v-on:click="selCoin(coin)"
     >
      {{coin}}/BTC
     </div>
   </popup>
  </div>
 </div>
</template>

<script>
import MHeader from './m-header/m-header'
import MBottom from './m-bottom/m-bottom'
import MTab from './m-tab/m-tab'
import { TransferDom, Popup } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    MHeader,
    MTab,
    MBottom,
    Popup
  },
  methods: {
    selCoin: function(coin) {
      console.log(coin)
      this.show11 = false
      this.coinsel = coin
    },
    openSheet: function() {
      this.show11 = true
      alert(11)
    }
  },
  data() {
    return {
      tabs: [{tag: '买入', link: '/trad/buy'},
             {tag: '卖出', link: '/trad/sale'},
             {tag: '委托', link: '/trad/entrust'},
             {tag: '行情', link: '/trad/market'}
      ],
      show11: false,
      coins: ['BTC', 'ETH', 'TCH', 'USTD'],
      coinsel: 'BTC'
    }
  }
}
</script>

<style lang="less">
@import '../common/less/variable.less';
.trad_contain{
  background: @bg-body;
  .selcoin{
    .h(35);
    .l-h(35);
    text-align: center;
    color: #fff;
    .fs(18);
    .btn-down{
      background: red;
      position: absolute;
      .w(30);
      .h(30);
    }
  }
  .view_contain{
    overflow: scroll;
    .w(375);
    position: fixed;
    .top(125);
    .bottom(0);
    .border(lightgreen);
  }
}
.sel-item{
  text-align: center;
  background: @bg-body;
  .fs(16);
  color:#fff;
  font-weight: 200;
  .padding(15);
}

.vux-x-icon {
  fill: #fff;
  position: absolute;
}
</style>

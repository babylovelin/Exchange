<template lang="html">
  <div class="ttip vux-1px-b">
    <div class="top">
      <div class="left top-item">
        <span>{{num}}</span><span>{{kind.toUpperCase()}}</span>
      </div>
      <div class="right top-item">
        <span>{{time | formatDate}}</span>
      </div>
    </div>
    <div style="clear:both">
    </div>
    <div class="mid">
      <span class="tt">TXID:</span>
      <!-- <p class='txid'>QWEQWEEEEEEEEEEEEEEEEEEEEEDQWDSDAWDFWADWADWDWDAW</p> -->
      <textarea v-bind:id="'tx'+index" class="tx" name="name" rows="2" cols="35" disabled v-model='txidq'></textarea>
      <p class="pro"> <span>进度</span> <span>{{confirmations}}</span>/ <span>6</span>  </p>
      <p class="prook">{{status}}</p>
      <p class="copyTXID">
          <span class='copybtn'
           v-clipboard:copy="txidq"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError">复制TXID</span>
       </p>
    </div>

  </div>
</template>

<script>
import {formatDate} from '../../../common/js/date.js'
export default {

  props:['txid','kind','num','time','confirmations','index','status'],
  data(){
    return {
       txidq:'qwe'
    }
  },
  methods:{
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  },
  mounted:function(){
    this.txidq=this.txid;
  },
  filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
        }
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.ttip {
  .h(120);
  background: #1D232E;
  color: @font-white;
  .fs(16);
  .top {
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
      .fs(12);
    }
  }
  .mid {
    word-break:break-all;
    position: relative;
    // .left(12.5);
    // .w(350);
    width: 90%;
    margin: 0 auto;
    .h(60);
    .fs(10);
    .txid{
      .h(40);
    }
    .tx{
      background: #222831;
      color: #fff;
      position: absolute;
      .right(0);
    }
    .tt{
      position: absolute;
      .left(0);
    }
    .pro{
      position: absolute;
      .bottom(0);
    }
    .prook {
      position: absolute;
      .bottom(0);
      .left(60);
    }
    .copyTXID {
      position: absolute;
      .right(0);
      .bottom(0);
      .w(70);
      .h(25);
      text-align: center;
      .l-h(25);
      border-radius: 3px;
      background: @bg-button;

    }
  }

}
</style>

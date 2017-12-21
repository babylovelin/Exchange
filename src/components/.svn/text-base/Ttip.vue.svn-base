<template lang="html">
  <div class="ttip">
    <m-header></m-header>
    <div class="ttip-firstline">
      <p class="title">提币</p>
    </div>
    <div class="ttip-sndline" @click="showselect">
      <div class="recharge-sndline" >
        <span class="num">12</span>
          <span class="bz">BTC<x-icon class="jian" type="ios-arrow-down" size="25"></x-icon>
          </span>
      </div>
    </div>
    <div class="ttip-thirdline">
      <div class="third1 third">
        <span>每日限额</span><span class="w">2</span> <span class="w">BTC</span>
      </div>
      <div class="third2 third">
        <span>今日已用</span> <span class="w">1</span> <span class="w">BTC</span>
      </div>
    </div>
    <div class="ttip-mid">
      <ul>
        <li class="vux-1px-b pocket-sel" @click="selpocket"><span class="pocket">钱包</span> <span class="sel">未选择</span> <span class="arrow"><x-icon type="ios-arrow-down" size="25"></x-icon></span></li>
        <li class="vux-1px-b pocket-sel"><span class="pocket">数量</span><span class="sel"><input type="text" placeholder="输入数量"></span></li>
        <li class="vux-1px-b pocket-sel"><span class="pocket">邮箱</span><span class="sel">364****@qq.com</span><span class="btn">60S</span></li>
        <li class="vux-1px-b pocket-sel"><span class="pocket">邮箱验证</span><span class="sel"><input type="text" placeholder="输入交易密码"></span></li>
        <li class="vux-1px-b pocket-sel"><span class="pocket">手机</span><span class="sel">188****1233</span></li>
        <li class="vux-1px-b pocket-sel"><span class="pocket">短信验证</span><span class="sel"><input type="text" placeholder="输入验证码"></span><span class="btn">60S</span></li>
      </ul>
    </div>
    <div class="ttip-bot">
      <ul>
        <li><span class="gz">估值</span><span class="btc">BTC</span><span class="num">1</span></li>
        <li><span class="gz">手续费</span><span class="btc">ETH</span><span class="num">0.00022</span></li>
        <li><span class="gz">实际到帐</span><span class="btc">ETH</span><span class="num">1.1</span></li>
      </ul>
    </div>
    <div class="tijiao">
      <span>提币</span>
    </div>
    <div class="model" id="model-sel">
      <ul>
        <li class="vux-1px-b  qbxz" style="position:relative">选择币种</li>
        <li class="vux-1px-b" @click="hidesel">BTC</li>
        <li class="vux-1px-b">LTC</li>
        <li class="vux-1px-b">BCC</li>
        <li class="vux-1px-b">TCA</li>
        <li class="vux-1px-b">TCA</li>
      </ul>
    </div>
    <div class="model" id="pocket">
      <ul>
        <li class="vux-1px-b qbxz" style="position:relative">选择钱包 <span class="plus">新增</span></li>
        <li class="" @click="hidepocket"> <span class="poc">钱包名称</span><span class="pocname">swdewdawadwadwadaw</span></li>
        <li class="">钱包名称</li>
        <li class="">钱包名称</li>
        <li class="">钱包名称</li>
        <li class="">钱包名称</li>
      </ul>
    </div>
    <div class="zz" id="zz">

    </div>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
export default {
  components: {
    MHeader
  },
  data() {
    return {
      hide:true,
      modelshow:true
    }
  },
  methods: {
    showselect: function(){
      if(this.modelshow){
        this.modelshow=!this.modelshow;
        document.getElementById('model-sel').style.top='60vh';
        document.getElementById('model-sel').style.display='block';
        document.getElementById('zz').style.display='block';
        return;
      }
      if(!this.modelshow){
        document.getElementById('model-sel').style.top='100vh';
        document.getElementById('model-sel').style.display='none';
        document.getElementById('zz').style.display='none';
        this.modelshow=!this.modelshow;
        return;
      }
    },
    hidesel: function(){
      document.getElementById('model-sel').style.top='100vh';
        document.getElementById('model-sel').style.display='none';
      document.getElementById('zz').style.display='none';
      this.modelshow=!this.modelshow;
    },
    selpocket: function(){
      if(this.modelshow){
        this.modelshow=!this.modelshow;
        document.getElementById('pocket').style.top='60vh';
        document.getElementById('pocket').style.display='block';
        document.getElementById('zz').style.display='block';
        return;
      }
      if(!this.modelshow){
        document.getElementById('pocket').style.top='100vh';
        document.getElementById('pocket').style.display='none';
        document.getElementById('zz').style.display='none';
        this.modelshow=!this.modelshow;
        return;
      }
    },
    hidepocket: function(){
      document.getElementById('pocket').style.top='100vh';
      document.getElementById('pocket').style.display='none';
      document.getElementById('zz').style.display='none';
      this.modelshow=!this.modelshow;
    },
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
  .ttip {
    position: absolute;
    .left(0);
    .top(0);
    background: #1D232E;
    height: 100vh;
    width: 100%;
    color: @font-gray;
    text-align: center;
    .ttip-firstline {
      .fs(18);
      .h(20);
      position: relative;
      .title {
        position: absolute;
        .top(5);
        .left(170)
      }
    }
    .recharge-sndline {
      .m-t(10);
      .fs(20);
      color: red;
      .num {
        .fs(25);
        color: #fff;
        font-weight: bold;
      }
      .bz {
        position: relative;
        .jian {
          position: absolute;
          .left(50);
          .top(0);
        }
        .sel {
          position: absolute;
          .left(-80);
          .top(40);
          ul {
            width: 90%;
            margin: 0 auto;
            li {
              background: #2e3443;
              .fs(20);
              color: #fff;
              border: 1px solid #999;
              .w(200);
              .h(30);
            }
          }

        }
      }
    }
    .ttip-thirdline {
      span {
        display: inline-block;
        .fs(15);
        float: left;
        .m-r(5);
      }
      .third {
        margin: 0 auto;
        width: 80%;
        .padding(0);
        .h(24);
        .w {
          color: #fff;
        }
      }
    }
    .ttip-mid {
      .fs(13);
      .m-t(15);
      ul {
        li {
          background: #3d4859;
          .h(35);
          .l-h(35);
        }
      }
      .pocket-sel {
        .pocket {
          text-align: left;
          float: left;
          .m-l(39);
          color: @font-white;
          .w(65);
        }
        .sel {
          float: left;
          .m-l(39);
          input {
            .w(100);
            background: #3d4859;
            color: #fff;
            .fs(13);
          }
        }
        .arrow {
          float: right;
          .l-h(32);
          .m-t(10);
          .m-r(32);
        }
        .btn {
          background: @bg-button;
          .p-t(5);
          .p-b(5);
          .p-l(13);
          .p-r(13);
          .m-r(-10);
          border-radius: 2px;
        }
      }
    }
    .ttip-bot {
      .fs(13);
      ul {
        li {
          width: 100%;
          .h(30);
          span {
            text-align: left;
            .w(80);
            .h(30);
            .l-h(30);
          }
          .gz {
            float: left;
            .m-l(39);
          }
          .btc {
            float: right;
            .m-r(-10);
          }
          .num {
            float: right;
            .m-r(-20);
          }

        }
      }
    }
    .tijiao {
      span {
        display: block;
        width: 98%;
        margin: 0 auto;
        .m-t(15);
        border-radius: 2px;
        .l-h(40);
        .h(40);
        .fs(17);
        color: @font-white;
        background: @bg-button;
      }
    }
    .zz{
      display: none;
      height: 60vh;
      width: 100%;
      background: rgba(0,0,0,0.85);
      position: absolute;
      top:0vh;
      left: 0;
    }
    .model {
      display: none;
      height: 40vh;
      width: 100%;
      overflow: scroll;
      background: rgba(0,0,0,0.85);
      position: absolute;
      top:100vh;
      left: 0;
      .fs(14);
      ul {
        li {
          .padding(10);
          width: 100%;
          .poc {
            float: left;
            .m-l(25);
          }
          .pocname {
          }
          .plus {
            position: absolute;
            .right(10);
            .top(10);
            .fs(15);
            font-weight: normal;
          }
        }
        .qbxz {
          .fs(18);
          font-weight: bold;
          background: rgb(23,30,43);
        }
        li:hover {
          background: @bg-button;
        }
      }

    }
  }
  .vux-x-icon {
  fill: #fff;
}
</style>

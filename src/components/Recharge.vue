<template lang="html">
  <div class="recharge">
    <m-header></m-header>
    <div class="recharge-firstline">
      <p class="title">充币</p>
    </div>
    <div class="recharge-sndline">
        <span class="bz" @click="showselect">{{coin}}<x-icon class="jian" type="ios-arrow-down" size="20"></x-icon>
        </span>
    </div>
    <!-- <div class="container"> -->
    <!-- <input type="text" v-model="message"> -->
  <!-- </div> -->
    <div class="recharge-thirline">
      <div class="" style="border:4px solid white;width:170px;height:170px;margin:0 auto">
        <qrcode :value="qrcode" :fg-color="fgColor" style="width:'100px'"></qrcode>
      </div>

    </div>
    <div class="recharge-fourline">
      <!-- <p id='biao1'>{{qrcode}}</p> -->
      <input id="biao1" class="addr" type="text" name="" v-model='qrcode' value="" disabled>
      <!-- <p>复制地址或扫描二维码充值</p> -->
      <!-- <p style="user-select:text">{{qrcode}}</p> -->
      <!-- <textarea id="biao1" name="name" rows="8" cols="30" readonly></textarea> -->
    </div>
    <div class="recharge-fiveline">
      <!-- <span class="save">{{qrcode}}</span> -->
      <span class="copy"
      v-clipboard:copy="qrcode"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
      复制地址
    </span>

    </div>
    <div class="recharge-sixline">
      <p>转入说明</p>
      <p>1.转入是自动的，货币转账需要需要整个网络进行确认，达到6个确认后您的货币会自动充值到您的账户。</p>
      <p>2.此地址是您唯一且独自使用的转入地址，你可以同时进行多次充值，也可将此地址作为您在矿池的付款地址。</p>
      <p>3.请仔细确认该地址币种，任何其他币种充值到该地址将无法找回。</p>
    </div>
      <div class="model" id="model-sel">
        <ul>
          <!-- <li class=" qbxz" @click="hidesel">选择币种</li> -->

          <li  v-for="(item,index) in coinarr" v-bind:id="'li'+index" class="" @click="hidesel('li'+index)">{{item}}</li>
          <!-- <li class="" @click="hidesel">ETH</li> -->
        </ul>
      </div>
    <div class="zhezhao" id="zhezhao">
      <p class="xzbz qbxz">选择币种</p>
    </div>

</div>
</template>

<script>
// import axios from 'axios'
// import {Clipboard} from 'clipboard'
import {Qrcode } from 'vux'
import MHeader from './m-header/m-header'
export default {
  components: {
    MHeader,
    Qrcode
  },
  data() {
    return {
      hide:true,
      modelshow:true,
      qrcode:'',
      coin:'BCH',
      coinarr:['BCH','ETH'],
      fgColor:'#000',
      message: 'Copy These Text'
    }
  },
  mounted: function(){

     // const clipboard = new Clipboard('.btn');
    //获取罗有参数  币种
    // console.log(this.$route.params.coinkind);
    this.coin=this.$route.params.coinkind.toUpperCase();
    var params = new URLSearchParams();
    params.append('uid', localStorage.uid)
    params.append('kind',this.coin.toLowerCase())
    // console.log(this.coin.toLowerCase());
    // params=JSON.stringify(params)
    var that=this;
    // var url=this.global.api+'/user/getCoinAddress'
    this.$http.post("user/getCoinAddress",params)
                  .then(function (response) {
                    // if(response.data.err=='-999'){
                    //   that.$router.push('/login');
                    // }
                      that.qrcode=response.data.data
                    // console.log(this.total);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    showselect: function(){
      if(this.modelshow){
        this.modelshow=!this.modelshow;
        document.getElementById('model-sel').style.top='50vh';
        document.getElementById('model-sel').style.display='block';
        document.getElementById('zhezhao').style.top='0vh';
        document.getElementById('zhezhao').style.display='block';
        return;
      }
      if(!this.modelshow){
        document.getElementById('model-sel').style.top='100vh';
        document.getElementById('model-sel').style.display='none';
        document.getElementById('zhezhao').style.display='none';
        this.modelshow=!this.modelshow;
        // this.coin=
        return;
      }
    },
    hidesel: function(id){
      document.getElementById('model-sel').style.top='100vh';
      document.getElementById('model-sel').style.display='none';
      document.getElementById('zhezhao').style.display='none';
      this.coin=document.getElementById(id).innerHTML;
      var params = new URLSearchParams();
      params.append('uid', localStorage.uid);
      params.append('kind', this.coin.toLowerCase());
      // console.log(params);
      var that=this;
      // params=JSON.stringify(params)
      // var url=this.global.api+'/user/getCoinAddress'
      this.$http.post('user/getCoinAddress',params)
                    .then(function (response) {
                      // if(response.data.err=='-999'){
                      //   that.$router.push('/login');
                      // }
                      that.qrcode=response.data.data
                    })
                    .catch(function (error) {
                      alert("获取地址错误");
                    });
      this.modelshow=!this.modelshow;
    }
//     copy :function(id){
//       // alert(1);
//       var obj = document.getElementById('biao1');
//       try {
//         var n = obj.select()?'1':"2";
//       } catch (e) {
//         alert(e.message)
//       } finally {
// alert('123');
//       }
//
//       // Url2.select(); // 选择对象
//       var m = document.execCommand("Copy")?'1':"2"; // 执行浏览器复制命令
//       alert(id+'----'+n+"---"+m+"已复制好，可贴粘。");
//     }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
#biao1{
  .fs(12);
  .h(30)
}
  .recharge {
    position: absolute;
    .left(0);
    .top(0);
    background: #1D232E;
    height: 100vh;
    width: 100%;
    color: @font-gray;
    text-align: center;
    .recharge-firstline {
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
      .fs(28);
      color: red;
      .bz {
        position: relative;
        .jian {
          position: absolute;
          .left(75);
          .top(8);
        }
      }
    }
    .recharge-thirline {
      .m-t(10);
    }
    .recharge-fourline {
      .h(80);
      p{
        .fs(15);
        width: 90%;
        word-break:break-word;
        .h(35);
        .p-t(5);
        margin: 0 auto;
      }
      .p-b(5);
      .addr {
          .fs(10);
        background: #1D232E;
        color: #fff;
        text-align: center;
        .w(300)
      }
    }
    .recharge-fiveline {
      .h(50);
      span{
        display: block;
        width: 95%;
        margin: 0 auto;
        .h(40);
        background-color: @bg-button;
        border-radius: 3px;
        .m-b(8);
        .fs(20);
        .l-h(40);
        color: @font-white;
      }
    }
    .recharge-sixline {
      .fs(12);
      width: 96%;
      margin: 0 auto;
      text-align: left;
    }
    .zhezhao {
      display: none;
      height: 50vh;
      width: 100%;
      position: absolute;
      .top(0);
      .left(0);
      background: rgba(0,0,0,0.9);
      .xzbz {
        position: absolute;
        bottom:0;
        text-align:center;
        width:100%;
        .fs(20);
      }
    }
    .model {
      display: none;
      height: 50vh;
      width: 100%;
      overflow: scroll;
      background: rgba(0,0,0,0.9);
      position: absolute;
      top:100vh;
      left: 0;
      .fs(15);
      ul {
        li {
          .padding(10);

        }
        li:hover {
          background: @bg-button;
          color: @font-white;
        }
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
.qbxz {
  .fs(18);
  font-weight: bold;
  background: rgb(23,30,43);
  .padding(10);
}
</style>

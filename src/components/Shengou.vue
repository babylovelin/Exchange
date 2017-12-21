<template lang="html">
  <div class="rengoupage" id='rengoupageid'>
    <m-header></m-header>
    <div class="recharge-firstline">
      <p class="title">TCH认购</p>
    </div>
    <div class="rengoudata">
      <div class="rengoudata-item">
        <span>每人限购：</span> <span>40000</span> <span>TCH</span>
      </div>
      <div class="rengoudata-item" v-for='item in cash'  v-if="item.kind=='tch'">
        <div class="">
          <span>您已认购：</span> <span id='nyrg'>{{item.allNum}}</span> <span>TCH</span>
        </div>

      </div>
      <!-- <div class="rengoudata-item">
        <div class="">
          <span>您已认购：</span> <span id='nyrg'>0</span> <span>TCH</span>
        </div>
      </div> -->
    </div>
    <div class="" style="clear:both">

    </div>
    <div class="coin">
        <p><span>TCH/BCH</span> <span>0.00032</span></p>
        <p><span>TCH/ETH</span> <span>0.0008</span>  </p>
    </div>
    <!-- <div class="chargecoin">
      <div class="left chargecoin-item">
        <span >可用：</span> <span>1000</span> <span >BCC</span>
      </div>
      <div class="right chargecoin-item">
        <span @click="jumptorecharge">充值</span>
      </div>
    </div> -->
    <div class="chargecoin_container">
      <div class="chargecoin" v-for='(item,index) in cash' v-if="item.kind!='tch'">
        <div class="left chargecoin-item">
          <span >可用：</span> <span v-bind:id="'coin'+item.kind">{{(item.allNum).toFixed(8)}}</span> <span >{{item.kind.toUpperCase()}}</span>
        </div>
        <div class="right chargecoin-item">
          <span @click="jumptorecharge(item.kind)">充值</span>
        </div>
      </div>
    </div>


    <div class="" style="clear:both">

    </div>
    <div class="userbuytcash" style="margin-top:20px;">
      <span style="float:left">数量</span> <span><input v-on:focus="tolarge" type="text" name="" v-model="buynum" > </span> <span style="float:right">TCH</span>
    </div>
    <div class="buynum" style="margin-top:40px">
      <!-- <range v-model="data1" @on-change="onChange"></range> -->
       <range v-model="buynum" :range-bar-height="4" :min='0' :max="20000" :disabled='range'></range>
    <!-- {{data9}} -->
    </div>
    <div class="total">
      <p class="left"><span>需要</span> <span>{{(buynum/3125)}}</span> <span>BCH</span></p>
      <p class="right"><span>需要</span> <span></span>{{(buynum/1250)}} <span>ETH</span></p>

    </div>
    <div class="btn">
      <span class="bch" @click="duihuan('bch')">以BCH兑换</span>
      <span class="eth" @click="duihuan('eth')">以ETH兑换</span>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

import MHeader from './m-header/m-header'
import { XButton, Range, Group, GroupTitle, Cell } from 'vux'
export default {
  data(){
    return {
        buynum:0,
        total:'',
        bybch:'',
        byeth:'',
        cash:'',
        tchnum:'',
        range:false,
        clientH:''
    }
  },
  components:{
    MHeader,
    Range,
    Group,
    GroupTitle,
    Cell,
    XButton
  },
  methods: {
    tolarge(){
      // alert(1)
      this.clientH=document.body.clientHeight;
      // alert(this.clientH)
      document.getElementById('rengoupageid').style.height=this.clientH+'px';
    },
    onChange (val) {
      console.log('change', val)
    },
    update () {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
      this.step = 1 + Math.floor(Math.random() * 10)
      // this.bybch=(buynum/500).toFixed(4);
    },
    duihuan:function(id) {
      // if(this.){
      //
      // }
      var yrg=document.getElementById('nyrg').innerHTML;
      if (parseInt(this.buynum)==0) {
        alert("认购数量不能为0,且应为整数");
        return false;
      }

      if((parseInt(yrg)+parseInt(this.buynum))>40000){
        alert("您已经超过单人限够数量");
        return false;
      }

      var bybch=(this.buynum/2500);
      var byeth=(this.buynum/1250);
      var params = new URLSearchParams();
      params.append('uid', localStorage.uid)
      if(id=='bch'){
        params.append('market_num',bybch)
        if(!document.getElementById('coinbch').innerHTML){
          alert('网络错误或重新登录')
        }
        if(document.getElementById('coinbch').innerHTML<bybch){
          alert("BCH余额不足！")
          return false
        }
      }
      if(id=='eth'){
        if(!document.getElementById('coineth').innerHTML){
          alert('网络错误或重新登录')
        }
        if(document.getElementById('coineth').innerHTML<byeth){
          alert("ETH余额不足！")
          return false;
        }
        params.append('market_num',byeth)
      }
      if (confirm("您确定要认购吗？")) {
        params.append('market_kind', id)
        params.append('buy_kind', 'tch')
        params.append('buy_num', this.buynum)
        var that=this;
        this.$http.post('user/buyCoin',params)
                      .then(function (response) {
                        if(response.data.err==-999){
                          that.$router.push('/login');
                        }
                        if(response.data.err==-600){
                          alert(response.data.msg);
                        }
                        // if(response.data.err=='-600'){
                        //     alert("请输入正确的认购数量！")
                        // }
                       if(response.data.err=='0'){
                          alert("认购成功！")
                        }

                      if(response.data.err=='-3'){
                        alert('扣币失败！')
                      }
                      if(response.data.err=='-4'){
                        alert('扣币失败！')
                      }
                      if(response.data.err=='-5'){
                        alert('添加认购记录失败！')
                      }
                      if(response.data.err=='-6'){
                        alert('认购失败')
                      }

                      })
                      .catch(function (error) {
                        console.log(error);
                        alert("认购失败！")
                      });
          this.$http.post('user/getProperty',params)
                      .then(function (response) {
                      that.cash=response.data.data;
                                      // console.log(response);
                      })
                      .catch(function (error) {
                                      // console.log(error);
                      });

                      // var params = new URLSearchParams();
                      // params.append('uid', localStorage.uid)
                      // var that=this;

                                    // for (var i = 1; i < 3; i++) {
                                    //   var canuse=document.getElementById("coin"+i).innerHTML;
                                    //   // console.log(canuse);
                                    //   if(parseInt(canuse)==0 || canuse==''){
                                    //     this.range=true;
                                    //   }
                                    // }
      }else {
        return false;
      }
    },
    jumptorecharge:function(kind){
      this.$router.push('/main/userInfo/recharge/'+kind);
    }
  },
  mounted: function(){
    // this.$router.push('/login')
    var params = new URLSearchParams();
    params.append('uid', localStorage.uid)
    var that=this;
    this.$http.post('user/getProperty',params)
                  .then(function (response) {
                    if(response.data.err=='-999'){
                        that.$router.push('/login')
                    }
                    that.cash=response.data.data;
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

  }

}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
  .rengoupage {
    position: absolute;
    .left(0);
    .top(0);
    background: #1D232E;
    height: 100%;
    width: 100%;
    color: @font-white;
    text-align: center;
    .buynum{
      width: 95%;
    }
    .recharge-firstline {
      .fs(18);
      .h(30);
      .padding(30);
      position: relative;
      .title {
        position: absolute;
        .top(5);
        .left(150)
      }
    }
    .total {
      .fs(12);
      .padding(30);
      p{
        .w(150);
        float:left;
      }
    }
    .coin {
      .fs(18);
      p{
          .padding(5);
      }

    }
    .userbuytcash{
      .w(320);
      .h(40);
      background: #272D3D;
      margin: 0 auto;
      .fs(15);
      input{
        .w(150);
        background:  #272D3D;
        color: #fff;
        .fs(15);
      }
      span{
        .l-h(40);
        color: #fff;
        .p-l(15);
        .p-r(15);

      }
    }
    .rengoudata {
      // .m-t(150);
      // .h(30);
      .w(350);
      .fs(15);
      margin: 0 auto;
      background: #272D3D;
      border-radius: 3px;
      .rengoudata-item {
        .w(175);
        float: left;
        .fs(12);
        font-weight: 450;
        background: #272D3D;
        .padding(10);
      }
    }
    .chargecoin_container{
      .h(120);
      overflow: scroll;
      .chargecoin {
        // .m-t(30);
        .w(350);
        .h(40);
        margin: 0 auto;
        .padding(10);
        .fs(14);
        .left{
          float: left;
          .padding(5);
        }
        .right{
          float: right;
          .padding(5);
          span {
            background: @bg-button;
            .w(50);
            .h(25);
            .l-h(25);
            border-radius: 3px;
            display: block;
          }
        }
      }
    }

    .btn {
      // span{
      //   display: inline-block;
      // }
      .bch{
        display: inline-block;
        .w(150);
        .h(45);
        .fs(20);
        margin: 0 auto;
        .l-h(45);
        // .m-t(90);
        border-radius: 3px;
        background: @bg-button;
        // position: absolute;
        // bottom: 0;
        // .left(25);
        // .bottom(20);
      }
      .eth{
        display: inline-block;
        .w(150);
        .h(45);
        .fs(20);
        margin: 0 auto;
        .l-h(45);
        border-radius: 3px;
        background: @bg-button;
        // position: absolute;
        // bottom: 0;
        // .right(25);
        // .bottom(20);
      }
    }
  }
</style>

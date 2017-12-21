<template lang="html">
  <div class="rengoupage">
    <m-header></m-header>
    <div class="shengou-firstline">
      <p>您已认购</p>
      <p style="color:#ff6000">{{tch}}/40000TCH</p>
    </div>
    <div class="dhicon">
      <img src="../common/image/a_03.png" alt="">
      <img class="arrowpng" src="../common/image/b_03.png" alt="">
      <img src="../common/image/c_03.png" alt="">
    </div>
    <div class="dhbl">
      <p>1&nbsp;&nbsp;TCH&nbsp;=&nbsp;0.00032&nbsp;BCH</p>
    </div>
    <div class="coincanbuy">
      <span class="canuse">可用&nbsp;&nbsp;{{bch.toFixed(8)}}&nbsp;BCH</span>
      <span class="cz" @click='jumptocz'>充值</span>
    </div>
    <div class="buynum">
      <span class="num">数量</span>
      <input type="number" name="" v-model="buynum" id="inputtext">
      <span class="tch">TCH</span>
    </div>
    <!-- {{mymax}} -->
    <div class="sliderbar">
      <range v-model="buynum" :per="buynum" :range-bar-height="4" :min='0' :max='mymax'></range>
    </div>
    <div class="marketcoinneed">
      总额 &nbsp;&nbsp;{{(buynum*0.00032).toFixed(8)}}&nbsp;&nbsp;BCH
    </div>
    <div class="statement">
      如果您已达到认购上限，想继续认购Tcash，可以通过我们的合作伙伴渠道进行认购
    </div>
    <div class="duihuan">
      <span @click="byeth">以BCH兑换</span>
    </div>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
import { XButton, Range } from 'vux'
export default {
  data(){
    return{
      buynum:0,
      cash:'',
      mymax:0,
      tch:0,
      bch:0,
      min:0,
      max:0,
    }
  },
  components:{
    MHeader,
    XButton,
    Range
  },
  computed:{
    // getall:function(){
    //   eth/0.008+tch<40000?eth/0.008:40000-tch
    //   return Number(this.eth/0.008+this.tch<40000?this.eth/0.008:40000-this.tch)
    // }
  },
  created:function(){
    // this.mymax=this.eth/0.008+this.tch<40000?this.eth/0.008:40000-this.tch
  },
  mounted: function(){
    // this.$router.push('/login')
    // this.update();
    // document.getElementById('inputtext').innerHTML=0;
    // this.buynum=0;
    var params = new URLSearchParams();
    params.append('uid', localStorage.uid)
    var that=this;
    this.$http.post('user/getProperty',params)
                  .then(function (response) {
                    if(response.data.err=='-999'){
                        that.$router.push('/login')
                    }
                    that.cash=response.data.data;
                    var a=that.cash;
                    var aa=that;
                    for (let i = 0; i < a.length; i++) {

                      if(a[i].kind=='bch'){
                        aa.bch=a[i].allNum;
                      }
                      if(a[i].kind=='tch'){
                        aa.tch=a[i].allNum;
                      }
                    }
                    // that.mymax=500;
                    that.mymax=Number(that.eth/0.008+that.tch<40000?that.eth/0.008:40000-that.tch)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
// this.mymax=500;

},
methods:{
  jumptocz:function(){
    this.$router.push('/main/userInfo/recharge/'+'bch')
  },
  byeth:function(){
    if(this.tch>40000){
      alert("您已经超出单人认购数量！")
      return false
    }
    if(this.buynum==0){
      alert("认购数量不能为0")
      return false
    }
    var r=confirm("您确定要认购吗？以"+this.buynum*0.00032+'BCH认购'+this.buynum+'Tcash')
    if(r){
      var params = new URLSearchParams();
      params.append('uid', localStorage.uid)
      params.append('market_num',this.buynum*0.08)
      params.append('market_kind', 'bch')
      params.append('buy_kind', 'tch')
      params.append('buy_num', this.buynum)
      var that=this;
      this.$http.post('user/buyCoin',params)
                    .then(function (response) {
                      if(response.data.err==-999){
                        that.$router.push('/login');
                        return false
                      }
                      if(response.data.err==-600){
                        alert(response.data.msg);
                        return false
                      }
                      if(response.data.err==-400){
                        alert(response.data.msg);
                        return false
                      }
                      // if(response.data.err=='-600'){
                      //     alert("请输入正确的认购数量！")
                      // }
                     if(response.data.err=='0'){
                        alert("认购成功！")
                        location.reload();
                        return false
                      }

                    if(response.data.err=='-3'){
                      alert('扣币失败！')
                      return false
                    }
                    if(response.data.err=='-4'){
                      alert('扣币失败！')
                      return false
                    }
                    if(response.data.err=='-5'){
                      alert('添加认购记录失败！')
                      return false
                    }
                    if(response.data.err=='-6'){
                      alert('认购失败')
                      return false
                    }

                    })
                    .catch(function (error) {
                      console.log(error);
                      alert("认购失败！")
                      return false
                    });
                  this.$http.post('user/getProperty',params)
                    .then(function (response) {
                    that.cash=response.data.data;
                    var a=that.cash;
                    var aa=that;
                    for (let i = 0; i < a.length; i++) {

                      if(a[i].kind=='eth'){
                        aa.eth=a[i].allNum;
                      }
                      if(a[i].kind=='tch'){
                        aa.tch=a[i].allNum;
                      }
                    }
                                    // console.log(response);
                    })
                    .catch(function (error) {
                                    // console.log(error);
                    });
    }
  }
}
}
</script>

<style lang="less">
@import '~common/less/variable.less';
.rengoupage{
  background:@bg-body;
  height: 100%;
}
.shengou-firstline {
  // .m-t(30);
  .fs(13);
  .h(68);
  background: #1A2231;
  color: #fff;
  text-align: center;
  p{
    .p-t(8);
  }
}
.dhicon{
  .w(105);
  .h(54);
  margin: 0 auto;
  img{
    display: inline-block;
    .w(27);
    .h(27);
  }
  .arrowpng{
    .h(11.5);
    .w(18);
    .m-b(8);
  }
}
.dhbl{
  .fs(13);
  text-align: center;
  color: #fff;
}
.coincanbuy{
  width: 88%;
  margin: 0 auto;
  .h(50);
  span{
    display: inline-block;
    .fs(13);
    color: #fff;
    .m-t(15);

  }
  .canuse{
    .w(200);
    float: left;
    .m-l(15);
    text-align: left;
  }
  .cz{
    .w(65);
    .h(22.5);
    .l-h(22.5);
    text-align: center;
    background: #FF6000;
    border-radius: 3px;
    float: right;
  }

}
.buynum{
  width: 88%;
  .h(32);
  border: 1px solid #fff;
  border-radius: 3px;
  margin: 0 auto;
  span{
    display: inline-block;
    .h(32);
    .l-h(32);
    .fs(12);
    color: #6f6f6f;
  }
  .num{
    float: left;
    .m-l(15)
;  }
  .tch{
    float: right;
    .m-r(15);
  }
  input{
    display: inline-block;
    float: left;
    .h(30);
    background: #1A2231;
    .fs(12);
    color: #6f6f6f;
    .m-l(10);
  }
}
.sliderbar{
  .h(35);
  .m-t(50);
}
.marketcoinneed{
  .fs(12);
  .h(20);
  width: 88%;
  margin: 0 auto;
  .l-h(20);
  color: #fff;
}
.statement{
  width: 88%;
  .fs(12);
  margin: 0 auto;
  .m-t(20);
  color: #fff;
  text-align: center;
}
.duihuan{
  .m-t(95);
  span{
    display: block;
    width: 88%;
    .h(35);
    .fs(13);
    color: #fff;
    .l-h(35);
    text-align: center;
    border-radius: 3px;
    background: #FF6000;
    margin: 0 auto;
  }
}
</style>

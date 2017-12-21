<template lang="html">
  <div class="main-money">
      <m-header></m-header>
      <!-- <div class="money-top">
        <moneymanage-top :total='total' :canuse='canuse' :cantuse='cantuse'></moneymanage-top>
      </div> -->
      <div class="money-detail" style="overflow:scroll">
        <moneymanage-item v-for="item in coin" :coin='item.kind' :allNum='(item.allNum).toFixed(8)' :frozen='item.frozen' :dis="item.kind=='tch'?1:0"></moneymanage-item>
        <!-- <moneymanage-item :coin='"tch"' :allNum='0.0000001' :frozen='0' :dis="1"></moneymanage-item> -->
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import MHeader from './m-header/m-header'
import MoneymanageItem from './m-left/moneymanage-item'
import MoneymanageTop from './m-left/moneymanage-top'
export default {
  data(){
    return {
      total:'0',
      canuse:'0',
      cantuse:'0',
      coin:''
    }
  },
  components: {
    MHeader,
    MoneymanageItem,
    MoneymanageTop
  },
  mounted: function(){
    // console.log(this.$store.state.userInfo.uId);
    //资产
    var params = new URLSearchParams();
    params.append('uid', localStorage.uid)
    // var url=this.global.api+'/user/getProperty'
    // params=JSON.stringify(params)
    var that=this;
    axios.post('user/getProperty',params)
                  .then(function (response) {
                    if(response.data.err=='-999'){
                      that.$router.push('/login');
                    }
                    that.total=response.data.msg;
                    that.coin=response.data.data;
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    // 资产管理数据
    // this.getInfobch();
    // this.getInfoeth();
  },
  methods:{
    getInfobch :function(){
      var params = new URLSearchParams();
      params.append('uid', localStorage.uid)
      params.append('kind','bch')
      // params=JSON.stringify(params)
      var that=this;
      // var url=this.global.api+'/user/getCoinAddress'
      axios.post('user/getCoinAddress',params)
                    .then(function (response) {
                      if(response.data.err=='-999'){
                        that.$router.push('/login');
                      }
                      // that.total=response.data.msg;
                      // console.log(this.total);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
    },
    getInfoeth :function(){
      var params = new URLSearchParams();
      params.append('uid', localStorage.uid)
      params.append('kind','eth')
      // params=JSON.stringify(params)
      var that=this;
      // var url=this.global.api+'/user/getCoinAddress'
      axios.post('user/getCoinAddress',params)
                    .then(function (response) {
                      if(response.data.err=='-999'){
                        that.$router.push('/login');
                      }
                      // that.total=response.data.msg;
                      // console.log(this.total);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.main-money {
  position: absolute;
  .left(0);
  .top(0);
  overflow: scroll;
  background: #17191b;
  height: 100%;
  width: 100%;
}
</style>

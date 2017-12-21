<template lang="html">
  <div class="ttip" id="ttip">
    <ttip v-for="(item,index) in txids"
    :status="item.confirmations>=6&&item.state==1?'完成':'充值中'" :index='index'
    :kind='item.cz_kind' :num='item.cz_num' :time='item.c_time'
    :confirmations='item.confirmations>6?6:item.confirmations' :txid='item.txid'>
    </ttip>
    <!-- <ttip
    :status="'完成'" :index='1'
    :kind='bb' :num='123' :time='12313'
    :confirmations='5' :txid='d'>
    </ttip> -->
  </div>
</template>

<script>
// import axios from 'axios'
import ttip from './ttipOrrecharge/ttip'
export default {
  components:{
    ttip
  },
  mounted: function(){
    // var params = new URLSearchParams();
    // params.append('uid', localStorage.uid)
    // // params.append('kind','')
    // // params=JSON.stringify(params)
    // var that=this;
    // // var url=this.global.api+'/user/getCzData'
    // this.$http.post('user/getCzData',params)
    //               .then(function (response) {
    //                 if(response.data.err=='-999'){
    //                   that.$router.push('/login');
    //                 }
    //                 // that.total=response.data.msg;
    //                 // console.log(this.total);
    //                 // console.log(response);
    //                 that.txids=response.data.data.reverse();
    //                 // console.log(that.txids);
    //               })
    //               .catch(function (error) {
    //                 console.log(error);
    //               });
  },
  data(){
    return {
      txids:[
        {
          confirmations:5,
          state:1,
          cz_kind:'bch',
          cz_num:500,
          c_time:15454545454,
          txid:'qweqweqweqwe'
        },
        {
          confirmations:5,
          state:1,
          cz_kind:'bch',
          cz_num:500,
          c_time:15454545454,
          txid:'wwwwwwwwwwwwww'
        },
        {
          confirmations:5,
          state:1,
          cz_kind:'bch',
          cz_num:500,
          c_time:15454545454,
          txid:'ttttttttttttt'
        }
      ],
      d:"",
      bb:'bch'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
.ttip{
  // .m-t(90);
  width: 100%;
  height:110%;
  background:  #1D232E;
  .kongbai{
    .h(90);
    width:100%;
  }
}
</style>

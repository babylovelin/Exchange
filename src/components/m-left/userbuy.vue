<template lang="html">
  <div class="userbuy">
    <!-- <div class="kongbai">

    </div> -->
    <div class="xs">
      <buy v-for="item in userbuy" :buy_kind='item.buy_kind' :market_kind='item.market_kind' :price="item.market_kind=='bch'?0.00032:0.0008" :buy_num='item.buy_num' :time='item.c_time' :dd="item._id"></buy>
      <!-- <buy></buy> -->
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import buy from './buyOrsell/buy'
export default {
  components: {
    buy
  },
  computed :{

  },
  methods:{
    reload(){
      // console.log(11);
      location.reload()
    }
  },
  data() {
    return {
      scrolled:'',
      userbuy:''
    }
  },
  mounted: function(){
    this.$router.push('/main/userInfo/history/userbuy');
    var params = new URLSearchParams();
    params.append('uid', localStorage.uid)
    // params=JSON.stringify(params)
    var that=this;
    // var url=this.global.api+'/user/getBuyRecord'
    this.$http.post('user/getBuyRecord',params)
                  .then(function (response) {
                    if(response.data.err=='-999'){
                      that.$router.push('/login');
                    }
                    that.userbuy=response.data.data.reverse();
                    // that.coin=response.data.data;
                    // console.log(response);
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
.userbuy{
  // overflow: scroll;
  // .m-t(90);
  width: 100%;
  height:100%;
  background:  #1D232E;
  .kongbai{
    .h(90);
    width:100%;
  }
  .xs{
  z-index: -100;
  }
}
</style>

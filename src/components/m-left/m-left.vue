<template lang="html">
  <div class="">
    <div class="layout-left-top">
        <div class="left-top"></div>
        <div class="left-top">
          <img src="../../common/image/icon_header.png" alt="">
        </div>
        <div class="left-top"  v-if="a">
          <p class="user-account">{{a | changename}}</p>
          <p class="user-verified">未实名认证</p>
          <p class="user-verified" v-if='star'>恭喜您是前3000名注册用户</p>
          <!-- <p class="user-verified" v-else>恭喜您成为活动期间注册用户</p> -->
          <p class="user-verified" v-if='star'>您将会获得个人已认购TCH总量10%额外赠送</p>
          <!-- <p class="user-verified" v-else>您将会获得个人已认购TCH总量5%额外赠送</p> -->
          <!-- <p class="user-verified">{{$store.state.userInfo.uId}}</p> -->
        </div>
        <div class="left-top" v-else >
          <span class="login left-top-btn" @click="jumptologin">登录</span>
          <span class="reg left-top-btn"  @click="jumptoregist">注册</span>
        </div>
    </div>
    <div class="layout-left-mid">
      <ul>
        <li @click="jumptocashmanage">
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_cash.png" alt="">
            <span>资金管理</span>
          </div>
        </li>
        <!-- <li>
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_pocket.png" alt=""><span>钱包地址管理</span>
          </div>
        </li> -->
        <li @click="jumptohistory">
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_history.png" alt=""><span>历史记录</span>
          </div>
        </li>
        <li>
          <div class="li-div" @click='jumptohelp'>
            <img class="img-size" src="../../common/image/icon_header.png" alt=""><span>客服帮助</span>
          </div>
        </li>
        <li  @click='jumptosetting'>
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_set.png" alt=""><span>设置</span>
          </div>
        </li>
        <li @click="logout">
          <div class="li-div" >
            <img class="img-size" src="../../common/image/icon_logout.png" alt=""><span>退出</span>
          </div>
        </li>
        <!-- <li>
          <div class="li-div" style="position:relative">
            <img class="img-size" src="../../common/image/icon_set.png" alt=""><span  @click="tuichu">退出</span>
            <div class="languages" style="position:absolute;left:80px;top:0px;">
              <ul>
                <li><x-icon class="languages-sel" type="ios-checkmark-outline" size="23"></x-icon>简体中文</li>
                <li><x-icon class="languages-sel" type="ios-checkmark-outline" size="23"></x-icon>繁体中文</li>
                <li><x-icon class="languages-sel" type="ios-checkmark-outline" size="23"></x-icon>English</li>
              </ul>
            </div>
          </div>
        </li> -->
      </ul>
    </div>
    <div class="layout-left-bot">

      <ul>
        <li>
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_trade.png" alt=""> <span>市场列表</span>
          </div>
        </li>
        <li>
          <div class="li-div">
            <img class="img-size" src="../../common/image/icon_jiaoyi.png" alt=""><span>交易中心</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  watch:{

    $route(){

      this.getname(),
      this.getstar()

    }

  },
  data() {
  return {
    a:'',
    star:false
  }
},
  mounted:function(){
  this.getname;
  this.getstar;
  // this.changename
  // var url=this.$route.path
  // console.log(url);

},
  methods: {
    logout : function() {
      // console.log(1);
    localStorage.removeItem('name');
    localStorage.removeItem('uid');
    localStorage.removeItem('star');
    this.$store.commit('closeDrawer');
    this.$http.post('logout',{})
                  .then(function (response) {
                    if(response.data.err==0){
                      alert("退出！")
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    this.$router.push('/login')
  },
    getname:function(){
    this.a=localStorage.name;
  },
  getstar:function(){
    if(localStorage.star==1){
        this.star=true;
    }

  },
  jumptosetting: function() {
    this.$router.push('/main/userInfo/setting')
    this.$store.commit('closeDrawer')
  },
  jumptohelp: function() {
      this.$router.push('/main/userInfo/help')
      this.$store.commit('closeDrawer')
    },
    jumptocashmanage: function() {
      this.$router.push('/main/userInfo/moneymanage')
      this.$store.commit('closeDrawer')
    },
    jumptohistory: function() {
    this.$router.push('/main/userInfo/history/userbuy')
    this.$store.commit('closeDrawer')
  },
    jumptologin: function() {
      this.$router.push('/login')
      this.$store.commit('closeDrawer')
    },
    jumptoregist: function() {
      this.$router.push('/reg')
      this.$store.commit('closeDrawer')
    },
    tuichu: function functionName() {
      this.$store.state.userInfo.uId = ''
    },
    changename(){
      this.a=localStorage.name.substring(0, 3) + '***' + phone.substring(7, 11)
    }
  },
  computed: {
    uId () {
      // alert(this.$store.state.userInfo.uId)
      var phone = localStorage.name
      var test = phone.substring(0, 3) + '***' + phone.substring(7, 10)
      return test
    }
  },
  filters: {
        changename(name) {
            // var date = new Date(time);
            // return formatDate(date, "yyyy-MM-dd hh:mm");
            return name.substring(0, 3) + '***' + name.substring(7, 11)
        }
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~common/less/variable.less';
@import '~vux/src/styles/1px.less';
.user-layout {
  background: #27303d;
}
.layout-left-top {
  background: #3B4759;
  color: @font-white;
  p{
    .padding(2);
    // .fs(12);
  }
  height: 25vh;
  .w(250);
  .fs(20);
  text-align: center;
  .user-account{
    /* border: 1px solid red; */
    .m-t(10);
    .fs(14);
  }
  .user-verified {
    .fs(8);
    color: @font-danger;
  }
  .left-top {
    .h(30);
    position: relative;
    .left-top-btn {
      display: inline-block;
      .fs(15);
      .w(80);
      .h(30);
      .m-t(30);
      .l-h(30);
      background-color: #46649B;
      border-radius: 2px;

    }
    .login {
      .m-r(20);
    }
    .reg {
      .m-l(20);
    }
  }
}
.layout-left-mid {
  background: #27303d;
  color: @font-white;
  text-align: center;
  height: 63vh;
  .fs(18);
  ul{
    .m-t(30);
  }
  li{
    display: block;
    .padding(7);
    text-align:left;
    .li-div {
      .w(180);
      margin: 0 auto;
      .img-size {
        .w(18);
        .h(18);
        display: inline-block;
      }
      span{
        display: inline-block;
        float: right;
        .w(130)
      }
      .languages {
        .fs(15);
        li{
          .padding(0)
        }
        .languages-sel {
          .l-h(23);
          vertical-align: middle;
        }
      }
    }
  }

}
.layout-left-bot {
  height: 12vh;
  background: #3D4859;
  color: #fff;
  text-align: center;
  .l-h(45);
  .fs(16);
  ul{
    li{
      display: block;
      float: left;
      width: 50%;
      .h(30);
      .li-div {
        margin: 0 auto;
        .img-size {
          .w(20);
          .h(20);
          display: inline-block;
          .m-r(8);
        }
        span{
          display: inline-block;
        }
      }
    }
  }
}

</style>

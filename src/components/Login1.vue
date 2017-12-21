<template lang="html">
  <div class="login_contain">
    <m-header></m-header>
    <div class="top">
     <!-- <p>sdfsf</p> -->
    </div>
    <div class="bottom">
      <div class="test">
        <div class="input_contain">
         <div class="input">
           <span >
             <img src="../common/image/phone.png" alt="">
           </span>
           <input type="text" v-model='loginInfo.mail'
           v-verify='loginInfo.mail'
           placeholder="手机号">
         </div>
        <div class="input">
           <span>
             <img src="../common/image/icon_pass.png" alt="">
           </span>
           <input type="password" v-model='loginInfo.pass'
           v-verify='loginInfo.pass'
           placeholder="密码">
        </div>
      </div>
<div class="link">
   <router-link to="/forgetpass">忘记密码</router-link>
   <router-link to="/reg">用户注册</router-link>
</div>
<div class="btn" v-on:click="login()">登录</div>
    </div>


</div>
    </div>
  </div>
</template>

<script>
import MHeader from './m-header/m-header'
export default {
  components:{
    MHeader
  },
  data() {
    return {
      loginInfo: {
        us: '',
        ps: ''
      }
    }
  },
  verify: {
    loginInfo: {
      mail: ['mobile', 'required'],
      pass: 'required'
    }
  },
  methods: {
    out:function(){
      alert('请联系客服进行修改')
    },
    login: function() {
      if (this.$verify.check()) {
        let that = this
        // 数据请求http://192.168.8.22:8083/index.php?s=Api/Login/index
        var params = new URLSearchParams()
        // params.append('language', '1')
        params.append('mobile', that.loginInfo.mail)
        params.append('pass', that.loginInfo.pass)
        this.$http.post('login', params).then((res) => {
          // console.log(res)
          if (res.data.err === 0) {
            localStorage.name=that.loginInfo.mail
            localStorage.star=res.data.active
            if(res.data.msg){
              localStorage.uid=res.data.msg
            }else {
              localStorage.uid='***'
            }

            alert('登录成功！');
            this.$router.push('main')
          } else if (res.data.err === -300) {
            alert('用户名密码错误，请重试')
          }
        }, (res) => {
          // console.log(res)
        })
        // this.$router.push('main')
      } else {
        alert('手机格式错误,请重新输入')
      }
    }
  }
}
</script>

<style lang="less">
@import '../common/less/variable.less';
*{
/* border: 1px solid red; */
}
.login_contain{
    display:flex;
    flex-direction: column;
    /* position: relative; */
    height: 100%;
    /* border: 1px solid red; */
    background:url('../common/image/bg_login.png') no-repeat ;
    background-size: 100%;
    border-top: 1px solid rgb(54,62,82);
    border-bottom: 1px solid rgb(54,62,82);
  .top{
    /* background: red; */
    .h(250);
    }
  .bottom{
    position: absolute;
    /* .top(250) */;
    .bottom(10);

    .test{
      .h(310);
      /* background: pink; */
      .w(375);
      position: relative;
    }
    .input_contain{
      .w(305);
      position: absolute;
      /*   background: red; */
      .left(35);
      .h(150);
      .input{
        width: 100%;
        .h(45);
        .m-b(45);
        .l-h(45);
        background: @bg-input;
        border-radius: 7px;
        span{
          display: inline-block;

          .w(45);
          .h(45);
          background:rgba(0,0,0,0);
          .fs(11);
          float: left;
          text-align: center;

          img{
            .m-t(10);
            .w(18);
            .h(25);
          }
        };
        input{
          float: left;
          border:0;
          outline:none;
          background:rgba(0,0,0,0);
          display:block;
          color: #fff;
          .w(240);
          .h(45);

        }
        input::-webkit-input-placeholder {
            color:#fff;
        }
      }
    }
    .link{
      .w(305);
      .h(45);
      .fs(16);
      position: absolute;
      .top(150);
      .left(35);
      text-align: center;
      .l-h(45);
      :nth-child(1){
        float: left;
      }
      :nth-child(2){
        float: right;
      }
      :link,:visited{
        color: @font-login;
      }
      :active{
        color: #fff;
      }
    }
    .btn{
      .h(51);
      position: absolute;
      .top(250);
      .left(35);
      .w(305);
      text-align: center;
      background: @btn-login;
      border-radius: 5px;
      .l-h(51);
      .fs(28);
      color: #fff;
      font-weight:200;

    }
  }


/* .link{
  .w(305);
  .h(45);
  .fs(16);
  position: absolute;
  .top(451);
  .left(35);
  text-align: center;
  .l-h(45);
  :nth-child(1){
    float: left;
  }
  :nth-child(2){
    float: right;
  }
  :link,:visited{
    color: @font-login;
  }
  :active{
    color: #fff;
  }
} */
/*   .btn{
  .h(51);
  position: absolute;
  .top(491);
  .left(35);
  .w(305);
  text-align: center;
  background: @btn-login;
  border-radius: 5px;
  .l-h(51);
  .fs(28);
  color: #fff;
  font-weight:200;

} */
}
</style>

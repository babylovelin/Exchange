<template lang="html">
  <div class="reg_contain">
      <m-header>  </m-header>
      <div class="input_contain">
        <p>密码找回</p>
        <div class="input inputphone">
          <select class="" v-model='regInfo.prefix'>
             <option  v-bind:value='item.prefix' v-for='item in prefixdatas' >{{item.name}}</option>
          </select>
          <input type="text" v-model='regInfo.phone'
          v-verify='regInfo.phone'
          placeholder="输入手机号" autofocus>
        </div>
        <div class='input'>
          <span>图片验证码</span>
          <input id='inputimg' type='text'  v-model='regInfo.imgcode'

          placeholder='输入图片验证码'>
          <div id='regimg' @click='getimgcode' class="regimgc">

          </div>
        </div>
        <div class="input">
          <span>手机验证码</span>
          <input type="text" v-model='regInfo.phonecode'
          v-verify='regInfo.phonecode'
          placeholder="输入验证码">
          <button class="get" v-on:click='getPhoneCode()'v-bind:class="phoneDisable?'gray':'blue'" v-bind:disabled="phoneDisable">
            {{phonetime}}
          </button>
        </div>
        <div class="input">
          <span>输入密码</span>
          <input type="password" v-model='regInfo.pass'
          v-verify='regInfo.pass'
          placeholder="输入密码">
        </div>
        <div class="input">
          <span>重复密码</span>
          <input type="password" v-model='regInfo.zpass'
          v-verify='regInfo.wx'
          placeholder="再次输入密码">
        </div>
        <div class="desc">
          密码必须由8~20个字符组成，必须包含数字，大写字母，和小写字母，
          不能包含特殊字符和空格
        </div>
        <div class="btn" v-on:click="update()">
          完成
        </div>
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
      phonetime: '点击获取',
      mailtime: '点击获取',
      phoneDisable: false,
      mailDisable: false,
      prefixdatas: [{
        'name': '中国',
        'prefix': '86'
      }, {
        'name': '扎伊尔',
        'prefix': '243'
      }],
      regInfo: {
        mail: '',
        mailcode: '',
        phone: '',
        phonecode: '',
        wx: '',
        pass: '',
        recommend: '',
        prefix: '86'
      }
    }
  },
  verify: {
    regInfo: {
      phone: ['mobile', 'required'],
      phonecode: 'required',
      pass: 'required'
    }
  },
  mounted:function(){
    this.$http.get('getCap', {}).then((res) => {
        if(res.data!=''){
          document.getElementById('regimg').innerHTML=res.data
        }else {
          document.getElementById('regimg').innerHTML='网络错误'
        }
    }, (res) => {

    })
  },
  methods: {
    getimgcode(){
      this.$http.get('getCap', {}).then((res) => {
          if(res.data!=''){
            document.getElementById('regimg').innerHTML=res.data
          }else {
            document.getElementById('regimg').innerHTML='网络错误'
          }
      }, (res) => {

      })
    },
    getPhoneCode: function() {
      if (this.$verify.$errors.regInfo.phone.length > 0) {
        alert('请输入正确手机号码')
      }else if (document.getElementById("inputimg").value=='') {
        alert('请输入正确图片验证码')
      }
      else {
        let time = 60
        var that = this
        this.phoneDisable = true
        var test = setInterval(function() {
          time--
          if (time > 0) {
            that.phonetime = time + 's'
          } else {
            that.phoneDisable = false
            that.phonetime = '点击获取'
            clearInterval(test)
          }
        }, 1000)

        var params = new URLSearchParams()
        // params.append('language', this.$store.state.language)
        params.append('mobile', this.regInfo.phone)
        params.append('prefix', this.regInfo.prefix)
        params.append('cap', document.getElementById("inputimg").value)
        // var params = {
        //   mobile: this.regInfo.phone,
        //   prefix: this.regInfo.prefix
        // }JSON.stringify(params)
        this.$http.post('getcode', params).then((res) => {
          if (res.data.err === 0) {
            alert('发送成功')
          }
          if(res.data.err== -400){
              alert('短信验证码错误')
          }
          if(res.data.err== -3){
            alert("请勿发送过于频繁")
          }
          if(res.data.err==-2){
            alert('图片验证码错误')
            that.$http.get('getCap', {}).then((res) => {
                if(res.data!=''){
                  document.getElementById('regimg').innerHTML=res.data
                }else {
                  document.getElementById('regimg').innerHTML='网络错误'
                }
            }, (res) => {

            })
          }
        }, (res) => {
          alert('发送失败,请检查是否正确')
        })
      }
    },
    update:function(){
      if (this.$verify.$errors.regInfo.phone.length > 0) {
        alert('请输入正确手机号码')
      }else if (!document.getElementById('inputimg').value) {
        alert('请输入正确图片验证码')
      }
      if(this.$verify.check()){
        if (this.regInfo.pass !== this.regInfo.zpass) {
          alert('两次输入密码不一致')
          return false
        }
        var that = this
        var params = new URLSearchParams()
        // params.append('language', this.$store.state.language)
        params.append('mobile', this.regInfo.phone)
        // params.append('wechat', this.regInfo.wx)
        params.append('pass', this.regInfo.pass)
        params.append('code', this.regInfo.phonecode)
        // params.append('recommender', this.regInfo.recommend)
        this.$http.post('updatepass', params).then((res) => {
          // console.log(res)
          if (res.data.err === 0) {
            alert('修改成功');
            that.$router.push('/login');
          }
          else if (res.data.err === -400) {
              alert('验证码错误')
          }else if (res.data.err == -1000) {
            alert('没有该用户')
          }
          else {
            alert("未知错误")
          }
        }, (res) => {

        })
      }
    }
  }
}
</script>

<style lang="less">
@import '../common/less/variable.less';
.reg_contain{
  position: relative;
  background: @bg-body;
  .w(375);
  height: 100%;
  display: flex;
  flex-direction: column;
  .input_contain{
    overflow: scroll;
    flex-flow: 1;
    .w(355);
    margin:  0px auto;
    p{
      .h(65);
      color: #fff;
      text-align: center;
      .l-h(65);
      .fs(22);
      font-weight: 200;

    }
    .input{
      /* .border(red) */;
      position: relative;
      .m-b(10);
      .h(45);
      .fs(16);
      border-radius: 5px;
      background: #fff;
      /* border: 1px solid red; */
      span{
        .w(75);
        display: block;
        float: left;
        .h(45);
        text-align: left;
        .l-h(45);
        .fs(12);
        .p-l(5);
      }

      input{
        color: gray;
        .fs(12);
        display: block;
        height: 100%;
        float: left;
        border: 0;
        outline: 0;
      }
      input::-webkit-input-placeholder {
          color:rgb(224,224,224);
      }
      .get{
        .w(70);
        .h(35);
        position: absolute;
        border-radius:5px;
        background: #c2c5c9;
        color: #fff;
        .fs(12);
        font-weight: 100;
        text-align: center;
        .l-h(35);
        .top(5);
        .right(10);
        border: 0;
        outline: 0;
      }
      .gray{
        background: #c2c5c9;
      }
      .blue{
        background: @btn-login;
      }
      .regimgc {
        .w(90);
        .h(35);
        // background: red;
        float: right;
        .m-r(10);
        .m-t(5);
        img{
          .w(90);
          .h(35);
        }
      }
    }
    .inputphone{
      .w(355);
      background: rgba(255,255,255,0);
      select{
        background: #fff;
        /* .w(45); */
        .h(45);
        .border(green);
        text-align: center;
        outline: 0;
        border: 0;
        position: absolute;
        border-radius:5px;
        .top(0);
        .left(0);
      }
      input{
        .w(295);
        .p-l(15);
        border-radius:5px;
        position: absolute;
        .top(0);
        .right(0);
      }
    }
    .desc{
      .p-l(10);
      .p-t(20);
      .fs(14);
      color:@font-gray;
      font-weight: 100;
      .l-h(19);
      span{
        color: rgb(61,103,145);
      }
    }
    .btn{
      .w(355);
      text-align: center;
      color: #fff;
      background:@btn-login;
      .h(54);
      .l-h(54);
      font-weight: 200;
      .fs(26);
      border-radius:5px;
      .m-t(15);
    }
  }
}
</style>

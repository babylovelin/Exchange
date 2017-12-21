<template lang='html'>
  <div class='reg_contain'>
      <m-header>  </m-header>
      <div class='input_contain'>
        <p>注册</p>
        <div class='input inputphone'>
          <select class='' v-model='regInfo.prefix'>
             <option  v-bind:value='item.prefix' v-for='item in prefixdatas' >{{item.name}}</option>
          </select>
          <input type='text' v-model='regInfo.phone'
          v-verify='regInfo.phone'
          placeholder='输入手机号' autofocus>
        </div>
        <div class='input'>
          <span>图片验证码</span>
          <input id='inputimg' type='text'  v-model='regInfo.imgcode'

          placeholder='输入图片验证码'>
          <div id='regimg' class="regimgc" @click="getimgcode">

          </div>

        </div>
        <div class='input'>
          <span>手机验证码</span>
          <input type='text' v-model='regInfo.phonecode'
          v-verify='regInfo.phonecode'
          placeholder='输入验证码'>
          <button class='get' v-on:click='getPhoneCode()'
          v-bind:class="phoneDisable?'gray':'blue'"
          v-bind:disabled='phoneDisable'>
            {{phonetime}}
          </button>
        </div>
        <div class='input'>
          <span>密码</span>
          <input type='password' v-model='regInfo.pass'
          v-verify='regInfo.pass'
          placeholder='输入密码'>
        </div>
        <div class='input'>
          <span>重复密码</span>
          <input type='password' v-model='regInfo.zpass'
          v-verify='regInfo.pass'
          placeholder='输入在此密码'>
        </div>
        <div class='input'>
          <span>微信(可选)</span>
          <input type='text' v-model='regInfo.wx'
          v-verify='regInfo.wx'
          placeholder='输入微信号'>
        </div>
        <div class='input'>
          <span>推荐人(可选)</span>
          <input type='text' v-model='regInfo.recommend'
          v-verify='regInfo.recommend'
          placeholder='输入推荐人手机号码'
          >
        </div>
        <div class='desc'>
          密码必须由8~20个字符组成，必须包含数字，大写字母，和小写字母，
          不能包含特殊字符和空格
          <br>
          <br>
          注册即视为同意 <span>&nbsp;&nbsp;用户协议</span>
        </div>
        <div class='btn' v-on:click='reg()'>
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
      imgcode:'',
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
      },
      {
        'name': '香港',
        'prefix': '852'
      },
      {
        'name': '澳门',
        'prefix': '853'
      },
      {
        'name': '台湾',
        'prefix': '886'
      },
      {
        'name': '菲律宾',
        'prefix': '63'
      },
      {
        'name': '新加坡',
        'prefix': '65'
      },
      {
        'name': '泰国',
        'prefix': '66'
      },
      {
        'name': '日本',
        'prefix': '81'
      },
      {
        'name': '韩国',
        'prefix': '82'
      },
      {
        'name': '越南',
        'prefix': '84'
      },
      {
        'name': '土耳其',
        'prefix': '90'
      },
      {
        'name': '印度',
        'prefix': '91'
      },
      {
        'name': '巴基斯坦',
        'prefix': '92'
      },
      {
        'name': '阿富汗',
        'prefix': '93'
      },
      {
        'name': '斯里兰卡',
        'prefix': '94'
      },
      {
        'name': '缅甸',
        'prefix': '95'
      },
      {
        'name': '伊朗',
        'prefix': '98'
      },
      {
        'name': '亚美尼亚',
        'prefix': '374'
      },
      {
        'name': '东帝汶',
        'prefix': '670'
      },
      {
        'name': '文莱',
        'prefix': '673'
      },
      {
        'name': '朝鲜',
        'prefix': '850'
      },
      {
        'name': '柬埔寨',
        'prefix': '855'
      },
      {
        'name': '老挝',
        'prefix': '856'
      },
      {
        'name': '黎巴嫩',
        'prefix': '961'
      },
      {
        'name': '约旦',
        'prefix': '962'
      },
      {
        'name': '叙利亚',
        'prefix': '963'
      },
      {
        'name': '伊拉克',
        'prefix': '964'
      },
      {
        'name': '科威特',
        'prefix': '965'
      },
      {
        'name': '也门',
        'prefix': '967'
      },
      {
        'name': '阿曼',
        'prefix': '968'
      },
      {
        'name': '阿联酋',
        'prefix': '971'
      },
      {
        'name': '以色列',
        'prefix': '972'
      },
      {
        'name': '巴林',
        'prefix': '973'
      },
      {
        'name': '卡塔尔',
        'prefix': '974'
      },
      {
        'name': '不丹',
        'prefix': '975'
      },
      {
        'name': '蒙古',
        'prefix': '976'
      },
      {
        'name': '尼泊尔',
        'prefix': '977'
      },
      {
        'name': '阿塞拜疆',
        'prefix': '994'
      },
      {
        'name': '乔治亚',
        'prefix': '995'
      },
      {
        'name': '英国',
        'prefix': '44'
      },
      {
        'name': '德国',
        'prefix': '49'
      },
      {
        'name': '意大利',
        'prefix': '39'
      },
      {
        'name': '法国',
        'prefix': '33'
      },
      {
        'name': '俄罗斯',
        'prefix': '7'
      },
      {
        'name': '希腊',
        'prefix': '30'
      },
      {
        'name': '荷兰',
        'prefix': '31'
      },
      {
        'name': '比利时',
        'prefix': '32'
      },
      {
        'name': '西班牙',
        'prefix': '34'
      },
      {
        'name': '匈牙利',
        'prefix': '36'
      },
      {
        'name': '瑞士',
        'prefix': '41'
      },
      {
        'name': '奥地利',
        'prefix': '43'
      },
      {
        'name': '丹麦',
        'prefix': '45'
      },
      {
        'name': '瑞典',
        'prefix': '46'
      },
      {
        'name': '牙买加',
        'prefix': '1876'
      },
      {
        'name': '南极洲',
        'prefix': '64672'
      }
      ],
      regInfo: {
        mail: '',
        mailcode: '',
        phone: '',
        phonecode: '',
        wx: '',
        pass: '',
        zpass: '',
        recommend: '',
        prefix: '86',
        imgcode:''

      }
    }
  },
  verify: {
    regInfo: {
      // mail: ['email', 'required'],
      // mailcode: 'required',
      phone: ['mobile', 'required'],
      phonecode: ['required'],
      zpass: [ 'required',
        'pass',
        {
          minLength: 8,
          message: '姓名不得小于8位'
        },
        {
          maxLength: 20,
          message: '姓名不得大于20位'
        }
      ],
      pass: [ 'required',
        'pass',
        {
          minLength: 8,
          message: '姓名不得小于8位'
        },
        {
          maxLength: 20,
          message: '姓名不得大于20位'
        }
      ]
    }
  },
  mounted:function(){
    // var urlgetimgcode=this.global.api+'getCap'
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
      // console.log(this.imgcode+'000');
      if (this.$verify.$errors.regInfo.phone.length > 0) {

        alert('请输入正确手机号码')
      }
      else if (this.regInfo.imgcode=='') {
        alert('请输入正确图片验证码')
        // this.$http.get('getCap', {}).then((res) => {
        //     if(res.data!=''){
        //       document.getElementById('regimg').innerHTML=res.data
        //     }else {
        //       document.getElementById('regimg').innerHTML='网络错误'
        //     }
        // }, (res) => {
        //
        // })
      }
      // alert("发送短信")
      else {
        let time = 60
        var that = this
        this.phoneDisable = true
        var test = setInterval(function() {
          time--
          if (time > 0) {
            that.phonetime = time + 's'
          } else {
            that.phonetime = '点击获取'
            that.phoneDisable = false
            clearInterval(test)
          }
        }, 1000)
        // var url=this.global.api+'getcode'
        var params = new URLSearchParams()
        params.append('mobile', this.regInfo.phone)
        params.append('prefix', this.regInfo.prefix)
        params.append('cap', document.getElementById("inputimg").value)
        var that=this
        this.$http.post('getcode', params).then((res) => {
          // console.log(res)
          if (res.data.err === 0) {
            alert('发送成功')
          }
          if(res.data.err== -3){
            alert("请勿发送过于频繁")
          }
          if(res.data.err== -400){
              alert('短信验证码错误')
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
          alert('验证码发送失败，请检查网络')
        })
      }
    },
    reg: function() {
      // var that = this
      if (this.$verify.check()) {
        if (this.regInfo.pass !== this.regInfo.zpass) {
          alert('两次输入密码不一致')
          return false
        }
        // 注册请求
        var that = this
        var params = new URLSearchParams()
        // params.append('language', this.$store.state.language)
        params.append('mobile', this.regInfo.phone)
        params.append('wechat', this.regInfo.wx)
        params.append('pass', this.regInfo.pass)
        params.append('code', this.regInfo.phonecode)
        params.append('recommender', this.regInfo.recommend)
        this.$http.post('newuser ', params).then((res) => {
          console.log(res)
          if (res.data.err === 0) {
            // 设置uid 票据
            that.$store.state.userInfo.uId = that.regInfo.phone
             // that.$store.state.userInfo.token = res.data.token
            // 成功跳转
            this.$router.push('/RegOk')
          } else {
            if (res.data.err === -1000) {
              alert('用户已注册')
            } else if (res.data.err === -400) {
              alert('验证码错误')
            }
          }
        }, (res) => {

        })
        console.log(this.regInfo)
      } else {
        alert('格式错误,请重新输入')
      }
    }
  }
}
</script>

<style lang='less'>
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
      /* background: red; */
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
        /* .border(green); */
        .w(290);
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
      color:#fff;
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

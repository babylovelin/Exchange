<template>
  <div style="height:100%;" class="h">
        <m-header  >
        </m-header>
        <m-tab :tabdata='tabs'>
        </m-tab>
        <div class="main_banner">
          <swiper :list="baseList" auto loop :show-dots='false' :aspect-ratio='120/375'></swiper>
        </div>

        <div class="fixed_contain" style="width:100%">
        <!--   <m-list></m-list> -->
        <div class="rengou">
          <div class="topword">
            <span>距离活动结束</span>
          </div>
          <div class="time">
            <!-- <span>截止日期:</span>  <span>2017年12月31日</span> -->
            <!-- <count-down endTime="1490761620" :callback="callback" endText="已经结束了"></count-down> -->
            <!-- 倒计时：<count-down :endTime="1514735999"   :endText="已经结束了"></count-down> -->
            <div id="countdown"></div>
          </div>
          <div class="botword">
            <span class="day">day</span>
            <span class="hour">hour</span>
            <span class="minute">min</span>
            <span class="second">sec</span>
          </div>
          <div class="process">
            <div class="probg">
              <span class="tchrg">TCH认购</span>
              <span class="tchzl">30000000TCH总量</span>
              <span class="tchsy" id="tchsyid"><span class="tchsydiv">
                <div class="tchsyarrow"></div>
              {{30000000-tcash}}TCH</span> </span>
              <div class="prodata" id='midprocessdt'>

              </div>
            </div>
          </div>
          <div class="botbtn">
            <div class="botbtn-item">
              <div class="wtop marketcoin">
                <img src="../common/image/d_03.png" alt="">
                <img class="arrowpng" src="../common/image/b_03.png" alt="">
                <img src="../common/image/c_03.png" alt="">
              </div>
              <div class="wbottom" @click="jumptoeth">
                <span>以ETH兑换</span>
              </div>
            </div>
            <div class="botbtn-item">
              <div class="wtop marketcoin">
                <img src="../common/image/a_03.png" alt="">
                <img class="arrowpng" src="../common/image/b_03.png" alt="">
                <img src="../common/image/c_03.png" alt="">
              </div>
              <div class="wbottom" @click="jumptobch">
                <span>以BCH兑换</span>
              </div>
            </div>
          </div>
      </div>
        <img src="../common/image/00000.png" alt="">
        </div>
    <!--      <m-bottom class="bottom"></m-bottom> -->
  </div>

</template>

<script>

import CountDown from './main/time'
import {Drawer, ViewBox, Swiper, Tabbar} from 'vux'
import MHeader from './m-header/m-header'
import MTab from './m-tab/m-tab'
import MList from './m-list/m-list'
import MBottom from './m-bottom/m-bottom'
const baseList = [{
  url: 'http://t.cn/RTteyRW',
  img: 'http://www.h5edu.cn/banner.png'
},
{
  url: 'http://t.cn/RTcvmZ3',
  img: 'http://www.h5edu.cn/banner1.png'
},
{
  url: 'http://t.cn/RTatixN',
  img: 'http://www.h5edu.cn/banner2.png'
}]
export default {
  data() {
    return {
      baseList: baseList,
      tabs: [{tag: 'BTC', link: '/main'},
             {tag: 'ETH', link: '/main'},
             {tag: 'TCH', link: '/main'},
             {tag: 'USDT', link: '/main'}
      ],
      tcash:0,
      url:'',
      intervalid1:''
    }
  },
  methods: {
    jumptoeth: function() {
      if(localStorage.name){
        this.$router.push('/main/shengou/eth');
      }else {
        this.$router.push('/login');
      }
    },
    jumptobch: function() {
      if(localStorage.name){
        this.$router.push('/main/shengou/bch');
      }else {
        this.$router.push('/login');
      }
  }
},
  created(){
    // var url=this.global.api+'user/getAllTch';
    // var that=this;
    // this.$http.post('getAllTch',{}).then(function(response){
    //   that.tcash=response.data.data;
      // document.getElementById('midprocessdt').style.width=(30000000-that.tcash)/300000+'%';
      // document.getElementById('tchsyid').style.left=(30000000-that.tcash)/300000-12+'%';
    // })
    var that=this;
      this.intervalid1 = setInterval(() => {
        this.$http.post('getAllTch',{}).then(function(response){
          that.tcash=response.data.data;
          // console.log(that.tcash);
          document.getElementById('midprocessdt').style.width=(30000000-that.tcash)/300000+'%';
          document.getElementById('tchsyid').style.left=(30000000-that.tcash)/300000-12+'%';

        })
      }, 5000)
  },
  beforeDestroy () {
      clearInterval(this.intervalid1)
    },
  mounted:function(){
    document.getElementById('midprocessdt').style.width=(30000000-this.tcash)/300000+'%';
    document.getElementById('tchsyid').style.left=(30000000-this.tcash)/300000-12+'%';
    (function($){

    	// Number of seconds in every time division
    	var days	= 24*60*60,
    		hours	= 60*60,
    		minutes	= 60;

    	// Creating the plugin
    	$.fn.countdown = function(prop){

    		var options = $.extend({
    			callback	: function(){},
    			timestamp	: 0
    		},prop);

    		var left, d, h, m, s, positions;

    		// Initialize the plugin
    		init(this, options);

    		positions = this.find('.position');

    		(function tick(){

    			// Time left
    			left = Math.floor((options.timestamp - (new Date())) / 1000);

    			if(left < 0){
    				left = 0;
    			}

    			// Number of days left
    			d = Math.floor(left / days);
    			updateDuo(0, 1, d);
    			left -= d*days;

    			// Number of hours left
    			h = Math.floor(left / hours);
    			updateDuo(2, 3, h);
    			left -= h*hours;

    			// Number of minutes left
    			m = Math.floor(left / minutes);
    			updateDuo(4, 5, m);
    			left -= m*minutes;

    			// Number of seconds left
    			s = left;
    			updateDuo(6, 7, s);

    			// Calling an optional user supplied callback
    			options.callback(d, h, m, s);

    			// Scheduling another call of this function in 1s
    			setTimeout(tick, 1000);
    		})();

    		// This function updates two digit positions at once
    		function updateDuo(minor,major,value){
    			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
    			switchDigit(positions.eq(major),value%10);
    		}

    		return this;
    	};


    	function init(elem, options){
    		elem.addClass('countdownHolder');

    		// Creating the markup inside the container
    		$.each(['Days','Hours','Minutes','Seconds'],function(i){
    			$('<span class="count'+this+'">').html(
    				'<span class="position">\
    					<span class="digit static">0</span>\
    				</span>\
    				<span class="position">\
    					<span class="digit static">0</span>\
    				</span>'
    			).appendTo(elem);

    			if(this!="Seconds"){
    				elem.append('<span class="countDiv countDiv'+i+'"></span>');
    			}
    		});

    	}

    	// Creates an animated transition between the two numbers
    	function switchDigit(position,number){

    		var digit = position.find('.digit')

    		if(digit.is(':animated')){
    			return false;
    		}

    		if(position.data('digit') == number){
    			// We are already showing this number
    			return false;
    		}

    		position.data('digit', number);

    		var replacement = $('<span>',{
    			'class':'digit',
    			css:{
    				top:'-2.1em',
    				opacity:0
    			},
    			html:number
    		});

    		// The .static class is added when the animation
    		// completes. This makes it run smoother.

    		digit
    			.before(replacement)
    			.removeClass('static')
    			.animate({top:'2.5em',opacity:0},'fast',function(){
    				digit.remove();
    			})

    		replacement
    			.delay(100)
    			.animate({top:0,opacity:1},'fast',function(){
    				replacement.addClass('static');
    			});
    	}
    })(jQuery);

    $(function(){

    	var note = $('#note'),
    		ts = new Date(2012, 0, 1),
    		newYear = true;

    	if((new Date()) > ts){
    		// The new year is here! Count towards something else.
    		// Notice the *1000 at the end - time must be in milliseconds
    		// ts = (new Date()).getTime() + 10*24*60*60*1000;
    		 ts =  1514692800000+12*60*60*1000;
    		newYear = false;
    	}

    	$('#countdown').countdown({
    		timestamp	: ts,
    		callback	: function(days, hours, minutes, seconds){

    			var message = "";

    			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

    			if(newYear){
    				message += "left until the new year!";
    			}
    			else {
    				message += "left to 10 days from now!";
    			}

    			note.html(message);
    		}
    	});

    });

  },
  components: {
    Drawer,
    ViewBox,
    MHeader,
    MBottom,
    MTab,
    Swiper,
    MList,
    Tabbar,
    CountDown
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
 @import '~common/less/variable.less';
 // *{
 //   border: 1px solid red;
 // }
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background:@bg-body;

}
.countdownHolder{
	margin:0 auto;
	// font: 40px/1.5 'Open Sans Condensed',sans-serif;
	.fs(20);
	text-align:center;
	letter-spacing:-3px;
}

.position{
	display: inline-block;
	height: 1.6em;
	overflow: hidden;
	position: relative;
	width: 1.05em;
}

.digit{
	position:absolute;
	display:block;
	.w(18);
	background-color:#444;
	border-radius:3px;
	text-align:center;
	color:#fff;
	letter-spacing:-1px;
}

.digit.static{
	box-shadow:1px 1px 1px rgba(4, 4, 4, 0.35);

	background-image: linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
	background-image: -o-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
	background-image: -moz-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
	background-image: -webkit-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
	background-image: -ms-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);

	background-image: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(0.5, #3A3A3A),
		color-stop(0.5, #444444)
	);
}

.countDays{ /* display:none !important;*/ }
.countDiv0{ /* display:none !important;*/ }
.countHours{}
.countDiv1{}
.countMinutes{}
.countDiv2{}
.countSeconds{}


.countDiv{
	display:inline-block;
	width:16px;
	height:1.6em;
	position:relative;
}

.countDiv:before,
.countDiv:after{
	position:absolute;
	width:5px;
	height:5px;
	background-color:#444;
	border-radius:50%;
	left:50%;
	margin-left:-3px;
	top:0.5em;
	box-shadow:1px 1px 1px rgba(4, 4, 4, 0.5);
	content:'';
}

.countDiv:after{
	top:0.9em;
}
.fixed_contain{
   border: 1px solid transparent;
  position: absolute;
  .top(210);
  .bottom(10);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  img{
    width: 98%;
    margin: 0 auto;
  }
}
.bottom{
  position: fixed;
  bottom: 0px;
  z-index: 101;
}
.rengou {
  .h(226);
  margin: 0 auto;
  color:#ff6000;
  .topword{
    .h(40);
    .fs(13);
    .l-h(40);
    span{
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }
  .botword{
    position: relative;
    color: #4c4c4c;
    width: 100%;
    .h(20);
    // background: #fff;
    .fs(11);
    .day{
      position: absolute;
      .left(88);
      .top(0);
    }
    .hour{
      position: absolute;
      .left(145);
      .top(0);
    }
    .minute{
      position: absolute;
      .left(202);
      .top(0);
    }
    .second{
      position: absolute;
      .left(259);
      .top(0);
    }
  }
  .time{
    // .m-t(20);
    // .h(150)
  }
  .process{
    width: 83%;
    margin: 0 auto;
    // .m-t(10);
    // .h(30);
    // background: #fff;
    .probg{
      .h(8);
      position: relative;
      width: 100%;
      background: @font-gray;
      border-radius: 10px;
      .m-t(40);
      .prodata{
        position: absolute;
        width: 0%;
        .h(8);
        background: #fff;
        border-radius: 10px;
        .left(0);
      }
      .tchrg{
        position: absolute;
        .fs(12);
        .left(0);
        .top(-23);
        color: #fff;
      }
      .tchzl{
        position: absolute;
        .fs(12);
        .right(0);
        .top(-23);
        color: #fff;
      }
      .tchsy{
        position: absolute;
        border: 1px solid #fff;
        border-radius: 30px;
        color: #ff6000;
        text-align: center;
        .fs(8);
        .padding(3);
        // .right(0);
        .w(68);
        // right: 10%;
        .top(15);
        .tchsydiv{
          position: relative;
          z-index: 10;
          .w(60);
          display: block;
          text-align: center;
          .tchsyarrow{
            .w(0);
            .h(0);
            // background: #fff;
            position: absolute;
            border-left: 2px solid transparent;
            border-right: 2px solid transparent;
            border-bottom: 4px solid #fff;
            .top(-8);
            .left(27);

          }

        }
        // color: #fff;
      }
    }

  }
  .botbtn {
    .m-t(40);
    .h(100);
    width: 100%;
    // background: #fff;
    .botbtn-item{
      img{
          display: inline-block;
          .w(27);
          .h(27);
          .m-l(0)
      }
      width: 50%;
      .h(100);
      float: left;
      .wtop{
        .h(35);
        // width: 100%;
        .w(105);
        .m-l(48);
        .arrowpng{
          .h(11.5);
          .w(18);
          .m-b(8);
        }
        .marketcoin{
          .m-l(15);
        }
      }
      .wbottom{
        .h(50);
        width: 100%;
        // .fs(20);
        span{
          display: block;
          .fs(12);
          .w(151);
          .h(35);
          color: #fff;
          text-align: center;
          .l-h(35);
          .m-l(20);
          .m-t(15);
          border-radius: 3px;
          background:#ff6000;
        }
      }
    }
  }
}
</style>

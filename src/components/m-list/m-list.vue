<template lang="html">
  <div class="list-contain">
    <ul>
      <li v-for='(item, index) in tabs'>
        <!-- <div class="item"> -->
          <router-link to="trad/buy" tag='div' class="item">
            <div class="left">
                <p>TLC/BTC</p>
                <p>24小时成交额&nbsp;420323232</p>
            </div>
            <div class="center">
                <p :class='index % 2 == 0 ? "red" : "green" '>0.15645645</p>
                <p>$100</p>
            </div>
            <div class="right">
              <span :class='index % 2 == 0 ? "red" : "green" '>0.015%</span>
            </div>
          </router-link>
        <!-- </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="less">
@import '~common/less/variable.less';
.list-contain{
  /* border: 1px solid red; */
  ul{
    li{
    .h(80);
    .w(375);
    padding: 0px;
    margin: 0px;
    border-top: 1px solid @bg-body;
    border-bottom: 1px solid @font-gray;
    .item{
      .h(60);
      .padding(15);
      display: flex;
      .left{
        width: 45%;
        :nth-child(1){
          color: #fff;
          .fs(18);
        }
        :nth-child(2){
          color: @font-gray;
          .fs(12)
        }
      }
      .center{
        width: 30%;
        :nth-child(1){
          .fs(17);
        }
        :nth-child(2){
          color: @font-gray;
          .fs(12)
        }
        .red{
          color: @font-red;
        }
        .green{
          color: @font-green;
        }
      }
      .right{
        /* border: 1px solid red; */
        width: 25%;
        .fs(15);
        color: #fff;
        span{
          text-align: center;
          display: inline-block;
          width: 98%;
          .h(30);
          .l-h(30);
          font-weight: 200;
          border-radius: 5px;
          .m-t(10);
        }
        .red{
          background: @btn-red;
        }
        .green{
          background: @btn-green;
        }
      }
      }
    }
  }
}
</style>

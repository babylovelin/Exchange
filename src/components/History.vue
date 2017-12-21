<template lang="html">
  <div class="history">
    <div>
      <m-header  >
      </m-header>
      <m-tab :tabdata='tabs'>
      </m-tab>
    </div>
    <div class="" style="height:90%;overflow:scroll">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MTab from './m-tab/m-tab'
import MHeader from './m-header/m-header'
import UserSell from './m-left/usersell'
import {Drawer, ViewBox, Swiper, Tabbar} from 'vux'
export default {
  components:{
    MTab,
    MHeader,
    UserSell
  },
  data() {
    return {
      tabs: [{tag: '买入记录', link: 'userbuy'},
             {tag: '卖出记录', link: 'usersell'},
             {tag: '提币记录', link: 'userttip'},
             {tag: '充币记录', link: 'userrecharge'}
      ]
    }
  }
}
</script>

<style lang="css">
.history{
  height:100%;
  background: #222831;
}
</style>

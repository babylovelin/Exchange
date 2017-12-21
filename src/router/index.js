import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login1'
import ForgetPass from '@/components/Forgetpass'
import Reg from '@/components/Reg'
import Main from '@/components/Main'
import Shengou from '@/components/Shengou'
import MoneyManage from '@/components/MoneyMange'
import Recharge from '@/components/Recharge'
import History from '@/components/History'
import Help from '@/components/help'
import Userbuy from '@/components/m-left/userbuy'
import Usersell from '@/components/m-left/usersell'
import Userttip from '@/components/m-left/userttip'
import Userrecharge from '@/components/m-left/userrecharge'
import Setting from '@/components/Setting'
import Forgetpass from '@/components/Forgetpass'
import Eth from '@/components/EthSubscription'
import Bch from '@/components/BchSubscription'


import Trad from '@/components/Trading'
import RegActive from '@/components/Regactive'
import RegOk from '@/components/RegOk'
import TradBuy from '@/components/trading/buy'
import TradSale from '@/components/trading/sale'
import TradEntrust from '@/components/trading/entrust'
import TradMarket from '@/components/trading/market'

// 引入路径
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/main',
      component: Main
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forgetpass',
      component: ForgetPass
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/regok',
      component: RegOk
    },
    {
      path: '/regactive',
      component: RegActive
    },
    {
      path: '/trad',
      component: Trad,
      children: [{
          path: '/trad/buy',
          component: TradBuy
        },
        {
          path: '/trad/sale',
          component: TradSale
        },
        {
          path: '/trad/entrust',
          component: TradEntrust
        },
        {
          path: '/trad/market',
          component: TradMarket
        }
      ]
    },
    {
      path: '/main/shengou',
      component: Shengou
    },
    {
      path: '/main/shengou/eth',
      component: Eth
    },
    {
      path: '/main/shengou/bch',
      component: Bch
    },
    {
      path: '/main/userInfo/moneymanage',
      component: MoneyManage
    },
    {
      path: '/main/userInfo/recharge/:coinkind',
      component: Recharge
    },
    {
      path: '/main/userInfo/history',
      children: [{
          path: 'userbuy',
          component: Userbuy
        },
        {
          path: 'usersell',
          component: Usersell
        },
        {
          path: 'userttip',
          component: Userttip
        },
        {
          path: 'userrecharge',
          component: Userrecharge
        }
      ],
      component: History
    },
    {
      path: '/main/userInfo/help',
      component: Help
    },
    {
      path: '/main/userInfo/setting',
      component: Setting
    },
    {
      path: '/main/userInfo/forgetpass',
      component: Forgetpass
    }
  ]
})
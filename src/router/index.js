import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start'
import Login from '@/components/login'
import Home from '@/components/home'
import Forget from '@/components/login/forget'
import Setpwd from '@/components/login/setpwd'
import Register from '@/components/register/register'
import Positive from '@/components/register/positive'
import Positive1 from '@/components/register/positive1'
import Positive11 from '@/components/register/positive.1'
import Positive2 from '@/components/register/positive2'
import User from '@/components/info/user'
import Apply from '@/components/info/apply'
import UserInfo from '@/components/info/UserInfo'
import Harvestaddress from '@/components/info/harvestaddress'
import Newaddress from '@/components/info/newaddress'
import Editaddress from '@/components/info/editAddress'
import Modify from '@/components/info/modify'
import Order from '@/components/order/order'
import OilByCompany from '@/components/order/oilByCompany'
import OilAddress from '@/components/order/oilAddress'
import OrderList from '@/components/order/OrderList'
import SearchOrder from '@/components/order/searchOrder'
import OrderDtails from '@/components/order/orderDtails'
import Invoice from '@/components/order/invoice'
import SearchDateList from '@/components/order/searchDateList'
import ReserveOil from '@/components/reserveOil/reserveOil'
import ReserveOilList from '@/components/reserveOil/reserveOilList'
import Confirmed from '@/components/reserveOil/confirmed'
import OrderNumber from '@/components/reserveOil/orderNumber'
import Complete from '@/components/reserveOil/complete'
import OilCode from '@/components/reserveOil/oilCode'
import SearchOil from '@/components/reserveOil/searchOil'
import SearchOilDate from '@/components/reserveOil/searchOilDate'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
   

    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      //忘记密码
      path:'/forget',
      name:'Forget',
      component:Forget
    },
    {
      //设置密码
      path:'/setpwd',
      name:'Setpwd',
      component:Setpwd
    },
    {
      //注册
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      //购油/提油授权资料
      path:'/positive',
      name:'Positive',
      component:Positive
    },
    {
      //购油/提油授权资料
      path:'/positive1',
      name:'Positive1',
      component:Positive1
    },
    {
      //购油/提油授权资料
      path:'/positive.1',
      name:'Positive11',
      component:Positive11
    },
    {
      //购油/提油授权资料
      path:'/positive2',
      name:'Positive2',
      component:Positive2
    },
    {
      //个人信息
      path:'/user',
      name:'User',
      component:User
    },
    {
      //权限
      path:'/apply',
      name:'Apply',
      component:Apply
    },
    {
      //编辑信息
      path:'/userInfo',
      name:'UserInfo',
      component:UserInfo
    },
    {
      //修改密码
      path:'/modify',
      name:'Modify',
      component:Modify
    },
    {
      //收货地址
      path:'/harvestaddress',
      name:'Harvestaddress',
      component:Harvestaddress
    },
    {
      //新增地址
      path:'/newaddress',
      name:'Newaddress',
      component:Newaddress
    },
    {
      //修改地址
      path:'/editAddress',
      name:'Editaddress',
      component:Editaddress
    },
    {
       //下单购油
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      //购油单位
      path:'/oilByCompany',
      name:'OilByCompany',
      component:OilByCompany
    },
    {
      //收货地址
      path:'/oilAddress',
      name:'OilAddress',
      component:OilAddress
    },
    {
      //订单查询
      path:'/orderList',
      name:'OrderList',
      component:OrderList
    },
    {
      //搜索订单
      path:'/searchOrder',
      name:'SearchOrder',
      component:SearchOrder
    },
    {
      //订单详情
      path:'/orderDtails',
      name:'OrderDtails',
      component:OrderDtails
    },
    {
      //开发票
      path:'/invoice',
      name:'Invoice',
      component:Invoice
    },
    {
      //查询
      path:'/searchDateList',
      name:'SearchDateList',
      component:SearchDateList
    },
    {
      //预约提油
      path:'/reserveOil',
      name:'ReserveOil',
      component:ReserveOil
    },
    {
      //提油记录
      path:'/reserveOilList',
      name:'ReserveOilList',
      component:ReserveOilList
    },
    {
      //预约详情
      path:'/confirmed',
      name:'Confirmed',
      component:Confirmed
    },
    {
      //选择单号
      path:'/orderNumber',
      name:'OrderNumber',
      component:OrderNumber
    },
    {
      //完成
      path:'/complete',
      name:'Complete',
      component:Complete
    },
    {
      //提油码
      path:'/oilCode',
      name:'OilCode',
      component:OilCode
    },
    {
      //预约油搜索
      path:'/searchOil',
      name:'SearchOil',
      component:SearchOil
    },
    {
      //预约油索索列表
      path:'/searchOilDate',
      name:'SearchOilDate',
      component:SearchOilDate
    },
  ]
})
export default router
<template>
  <div class="box">
    <div class="titleAll">
      <div>首页</div>
    </div>
    <div class="mhome">
      <!-- 轮播图 -->
      <div class="banner">
        <mt-swipe :auto="2000">
          <mt-swipe-item>
            <img src="@/assets/img/banner (1).png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/assets/img/banner (1).png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/assets/img/banner (1).png" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul class="navbar">
          <li >
            <router-link to="/order">
              <img src="@/assets/img/buy.png" alt>
              <p>下单购油</p>
            </router-link>
          </li>
          <li >
            <router-link to="/orderList">
              <img src="@/assets/img/query.png" alt>
              <p>订单查询</p>
            </router-link>
          </li>
          <li >
            <router-link to="/reserveOil">
              <img src="@/assets/img/appointment.png" alt>
              <p>预约提油</p>
            </router-link>
          </li>
          <li >
            <router-link to="/reserveOilList">
              <img src="@/assets/img/record.png" alt>
              <p>提油记录</p>
            </router-link>
          </li>
          <li>
            <a href="javascript:;">
              <img src="@/assets/img/integral.png" alt>
              <p>积分商城</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="myManager">
          <span class="line"></span>
          <p class="title-p">我的客户经理</p>
          <div class="managerNum">
            <p>李勇</p>
            <p>
              {{ tel}}
              <a class="numberBtn" @click="callPhone(tel)">通话</a>
            </p>
          </div>
        </div>
      </div>
      <div class="oilPrices">
        <span class="line"></span>
        <p class="title-p">当前油品批发价</p>
        <ul v-for="item in datas" :key="item.id">
          <li>
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
          </li>
          <!-- <li>
            <span>92#</span>
            <span>$6000/吨</span>
          </li>
          <li>
            <span>92#</span>
            <span>$6000/吨</span>
          </li>-->
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footerActive">
        <img src="@/assets/img/home1.png" alt>
        <p>首页</p>
      </div>
      <div @click="checkMe">
        <img src="@/assets/img/mine1.png" alt>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      myManager:'',
      tel: 13544664466,
      datas: [
        { id: 1, name: "#92", price: "$6000/吨" },
        { id: 2, name: "#92", price: "$6000/吨" },
        { id: 3, name: "#92", price: "$6000/吨" },
        { id: 4, name: "#92", price: "$6000/吨" },
        { id: 5, name: "#92", price: "$6000/吨" },
        { id: 6, name: "#92", price: "$6000/吨" },
        { id: 7, name: "#92", price: "$6000/吨" }
      ],
       userinfo:{},
    };
  },
  created(){
    this.getRouterData()
  },
  methods: {
    getRouterData(){
     this.userinfo = this.$route.query.data;
    //  console.log(this.userinfo.username)
     this.myManager = this.userinfo.manager;
         },
    checkMe() {
      this.$router.push("/user");
    },
    // GoOrder() {
    //   this.$router.push("/order");
    // },
    // GoOrderList(){
    //   this.$router.push("/orderList");
    // },
    callPhone(phoneNumber) {
       console.log(this);
      MessageBox({
        title:'',
        message:'呼叫客户经理-'+this.myManager,
        cancelButtonText:'取消',
        confirmButtonText:'呼叫',
        showCancelButton:true
      })
        .then(action => {
          console.log(action); 
          window.location.href = "tel:" + this.tel;
        })
        .catch(err => {
          console.log(err);
        });
     
    },
    // reserveOil(){
    //   this.$router.push('/reserveOil')
    // },
    // reserveOilList(){
    //   this.$router.push('/reserveOilList')
    // }
  },
  components: {}
};
</script scope>


<style lang="css" scope>
.box{
  margin-bottom: 56px;
}
.titleAll div {
  line-height: 44px;
}
</style>
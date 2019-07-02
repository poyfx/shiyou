<template>
  <div>
    <mt-header class="titleAll" title="提油记录">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
     <router-link to="/searchOil" slot="right">
        <mt-button style="margin-right:10%;">搜索</mt-button>
      </router-link>
    </mt-header>
    <!-- <div class="titleAll">
      <div>
        <a>返回</a>订单列表
        <span class="search">搜索</span>
      </div>
    </div>-->
    <div class="mhome">
      <el-select v-model="value" size="mini" style="width:120px;left:66%" >
        <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :key="item.value"
        ></el-option>
      </el-select>
      <div class="fget-num orderList"  @click="reserveList">
        <div class="stateBox">
          <div>
            <span class="orderListState state ">等待预约确认</span>
            <span class="orderListState stay "></span>
             
          </div>

          <p>
            订单编号：
            <span>2817273654213</span>
          </p>
          <p>
            预约时间：
            <span>2019-12-12 20:20</span>
          </p>
          <p>
            提油类型：
            <span>92#乙醇汽油</span>
          </p>
          <p>
            购油数量：
            <span>90.00000吨</span>
          </p>
          <p>
            提油方式：
            <span>配送</span>
          </p>
        </div>
      </div>
      <div class="fget-num orderList" @click="complete">
        <div class="stateBox">
          <div>
            <span class="orderListState state oc">已拒绝</span>
          </div>
          <p>
            订单编号：
            <span>2817273654213</span>
          </p>
          <p>
            预约时间：
            <span>2019-12-12 20:20</span>
          </p>
          <p>
            油品类型：
            <span>92#乙醇汽油</span>
          </p>
          <p>
            提油数量：
            <span>90.00000吨</span>
          </p>
          <p>
            提油方式：
            <span>配送</span>
          </p>
           <p>
            原因
            <span>油库没油了</span>
          </p>
        </div>
      </div>
       <div class="fget-num orderList">
        <div class="stateBox">
          <div>
            <span class="orderListState state">待付款</span>
             <span class="orderListState unit">单价:</span>
            <span class="orderListState price">￥7900/吨</span>
          </div>
          <p>
            订单编号：
            <span>2817273654213</span>
          </p>
          <p>
            下单时间：
            <span>2019-12-12 20:20</span>
          </p>
          <p>
            油品类型：
            <span>92#乙醇汽油</span>
          </p>
          <p>
            购油数量：
            <span>90.00000吨</span>
          </p>
          <!-- <p>
            提油方式：
            <span>配送</span>
          </p> -->
        </div>
      </div>
       <div class="fget-num orderList">
        <div class="stateBox">
          <div>
            <span class="orderListState state">待付款</span>
             <span class="orderListState unit">单价:</span>
            <span class="orderListState price">￥7900/吨</span>
          </div>
          <p>
            订单编号：
            <span>2817273654213</span>
          </p>
          <p>
            下单时间：
            <span>2019-12-12 20:20</span>
          </p>
          <p>
            油品类型：
            <span>92#乙醇汽油</span>
          </p>
          <p>
            购油数量：
            <span>90.00000吨</span>
          </p>
          <!-- <p>
            提油方式：
            <span>配送</span>
          </p> -->
        </div>
      </div>
      
    </div>
    <div class="loading">
      <p>
        <img src="@/assets/img/loading.png" alt> &nbsp; 点击加载更多...
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "预约单状态",
      options: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "已拒绝"
        },
        {
          value: 3,
          label: "已发油"
        },
        {
          value: 4,
          label: "已完成"
        },
        {
          value: 5,
          label: "预约已确定"
        },
         {
          value: 6,
          label: "等待预约确定"
        }
      ]
    }
  },
 
  methods:{
    orderDtails(){
        this.$router.push('/orderDtails');
    },
    reserveList(){
        this.$router.push('/confirmed');
    },
    complete(){
      this.$router.push('/complete');
    }
  },
};
</script>
<style lang="" scope>

</style>
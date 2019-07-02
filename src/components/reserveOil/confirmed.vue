<template>
  <div>
    <headers :title="title" :right="sure">
          <router-link to slot="right" >
        <mt-button >提油码</mt-button>
      </router-link>
    </headers>
    <div class="step-box">
      <span class="step-active">待确认</span>
      <span class>待发油</span>
      <span class>待收油</span>
    </div>
    <div class="home">
      <div class="fget-num">
        <mt-field label="预约单号" readonly disableClear v-model="number"></mt-field>

        <mt-field label="预约时间" readonly disableClear v-model="time"></mt-field>

        <mt-field label="提油单位" readonly disableClear v-model="company"></mt-field>
        <mt-field label="油品类型"  readonly disableClear v-model="oil"></mt-field>
        <mt-field label="提油数量(吨)" readonly v-model="much"></mt-field>
            <mt-field label="提油方式" readonly v-model="main"></mt-field>
        
        <div class="fget-eara addressimg" >
          <p class="first-li">送油地址：</p>

          <p>{{address}}</p>
        </div>
      </div>
      <div class="nextBox">
        <mt-button class="btn" type="primary" size="large" >关闭</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";
export default {
  name: "Confired",

  data() {
    return {
      title: "预约详情",
      address:'aaaaaaaaaaaaaaa',
      number:'2817273654213',
      time:'2019-12-12 20:20',
      company:'凶獒',
      oil:'92#',
      much:'90',
      main:'自提',
      right:true
    };
  },
  components: {
    headers
  }
};
</script>

<style scope>
.step-box .step-active {
  background-color: #00a8ff;
}
.step-box .step-ago {
  background: #7eeab8;
}
</style>
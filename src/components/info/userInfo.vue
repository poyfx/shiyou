<template>
  <div>
    <headers :title="title" :home="home">
    </headers>
    <div class="home">
      <div class="fget-num">
        <mt-field label="手机号" placeholder="请填写手机号" type="tel" v-model="newphone"></mt-field>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click.native="goUrl">保存</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";
export default {
  name: "UserInfo",
  data() {
    return {
      title: "编辑信息",
      home:1,
      newphone:''
    };
  },
  methods:{
    goUrl(data){
      this.$router.push({path:'/user',query:{
        phone:this.newphone
      }})
    }
  },
  components: {
    headers
  }
};
</script>
<style lang="">
    .mint-cell-wrapper{
        border-bottom: 1px solid #e5e5e5
    }
</style>
<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field label="收货人" placeholder="收货人姓名" type="text"></mt-field>
        <mt-field label="手机号" placeholder="输入手机号" type="text"></mt-field>
               <mt-field label="邮政编码" placeholder="邮政编码" type="text"></mt-field>

       <div class="fget-eara">
          <p class="first-li">详细地址</p>
          <p class="secend-in">
            <textarea type="text" cols="38" rows="3" autofocus placeholder="填写详细地址"></textarea>
            <b></b>
          </p>
        </div>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn">保存</mt-button>
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
      title: "编辑地址"
    };
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
<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field label="开票公司" placeholder="XXXXXXXXXX公司" v-model="company"></mt-field>
        <mt-field label="开票金额" placeholder="￥540000.00" v-model="money"></mt-field>
        <mt-field label="发票拆分" readonly>
          <mt-switch v-model="value" @change="showIncoice()"></mt-switch>
        </mt-field>
      </div>
      <div class="fget-num" style="margin-top: 10px" v-show="show">
        <mt-field label="拆分方式" placeholder="按数量"></mt-field>
        <mt-field label="当前购油数量" :value="all"></mt-field>
        <div class="splitCase underline">
          <p class="first-li">拆分方案(单位:吨)</p>
          <div class="splitNum">
            <tr>
              <td>
                <input type="text" v-model="num" placeholder="0">
                <img src="@/assets/img/add.png" @click="add" alt>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" v-model="num1" placeholder="0">
                <img src="@/assets/img/move.png" alt>
              </td>
            </tr>
            <p v-show="move"></p>
          </div>
        </div>
        <mt-field label="剩余未拆分数量" placeholder="90.00000吨" v-model="surplus"></mt-field>
      </div>
      <div class="orderBtn">
        <button @click="goDtails">无需发票</button>
        <button class="blue" @click="invoiceSure">确 &nbsp; &nbsp; 认</button>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";
export default {
  data() {
    return {
        company:'',
        money:'',
       
      show: false,
      value: false,
        all:'90',
      num:'23.256',
      num1:'28.3369',
      move: false,
      title: "开具发票"
    };
  },
  methods: {
    showIncoice() {
      this.show = this.value;
    },
    goDtails(){
      this.$router.push('/orderDtails')
    },
    invoiceSure(){
       this.$router.push('/orderDtails')
    },
    add() {}
  },
  components: {
    headers
  },
 computed:{
     surplus(){
         return this.all -this.num-this.num1
     }
 }
};
</script>
<style lang="">
.splitCase {
  padding: 12px 0 15px 11px;
}
.splitNum {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  align-self: center;
}
.splitNum img {
  vertical-align: middle;
}
.splitNum input {
  width: 162px;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 12px 0 12px 15px;
  margin: 5px;
}
</style>
<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field
          label="订单编号"
          @click.native="goOrderNumber"
          readonly
          disableClear
          v-model="orderNumber"
        >
          <img src="@/assets/img/right.png" alt>
        </mt-field>

          <mt-field
          label="提油时间"
          @click.native="selectData"
          placeholder="请选择提油时间"
          readonly
          disableClear
          v-model="day"
        >
          <img src="@/assets/img/right.png" alt>
        </mt-field>

        <mt-field
          label="提油油品"
          readonly
          disableClear
          v-model="productOil"
        >
        
        </mt-field>
      
        <mt-field label="提油数量(吨)"  type="number" readonly v-model="muchOil"><div style="border-left:1px solid #e5e5e5;line-height:48px;padding:0px  0 0 10px ;color:#00A8FF">全体</div></mt-field>

          <mt-field
          label="提油方式"
          readonly
          disableClear
          v-model="modeOil"
        >
        </mt-field>
        <div class="fget-eara addressimg" @click="chooseAddress">
          <p class="first-li">配送地址：</p>
          
        <p>{{address}}</p>
          <img src="@/assets/img/right.png" alt>
        </div>
        <div class="fget-eara">
          <p class="first-li">备注：</p>
          <p class="secend-in ml">
            <textarea type="text" cols="38" placeholder="如：XXXXXXXXXXXXXXXXXX"></textarea>
            <b></b>
          </p>
        </div>
      </div>
      <div class="nextBox">
        <mt-button class="btn" type="primary" size="large" @click.native="commit">提交</mt-button>
      </div>
    </div>
    <mt-datetime-picker
      ref="datePicker"
      v-model="pickerVisible"
      type="datetime"
      :startDate="startDate"
      year-format="{value} "
      month-format="{value} "
      date-format="{value} "
       hour-format="{value}"
      minute-format="{value}"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
  </div>
</template>
<script>
import headers from "../component/header";
import { DatetimePicker } from "mint-ui";
import { formatDate,formatDateMin } from "../component/date";
export default {
  name: "Order",
  data() {
    return {
      title: "预约提油",
      orderNumber:'',
      productOil: "",
      modeOil: "",
      muchOil: "",
      address: "请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式",
      show: false,
      mode: false,
      day:formatDateMin(new Date()),
      startDate:new Date(),
      pickerVisible:'',
    };
  },
  methods: {
    GoOilByCompany() {
      this.$router.push("/oilByCompany");
    },
    chooseOilShow() {
      this.show = !this.show;
    },
    chooseOilLeave() {
      this.mode = !this.mode;
    },
    chooseOne(val) {
      this.show = !this.show;
      this.productOil = val.target.innerHTML;
    //  this.$refs.chooseOne.className="modelmainActive"
    },
    modeShow() {
      this.mode = !this.mode;
    },
    chooseTwo(val) {
      console.log(val);
      this.mode = !this.mode;
      this.modeOil = val.target.innerHTML;
    },
    chooseAddress(){
      this.$router.push({path:'/oilAddress',query:{
          name:"reserveOil"
      }})
    },
    // 获取时间
      selectData() {
      if (this.selectdValue) {
        this.pickerVisible = this.selectedValue;
      } else {
        this.pickerVisible = this.day;
      }
      this.$refs.datePicker.open();
    },
      handleConfirm() {
      this.day = formatDateMin(this.pickerVisible);
    },
    commit(){
      this.$router.push('/reserveOilList')
    },
    goOrderNumber(){
        this.$router.push('/orderNumber')
    }
  },
  components: {
    headers
  }
};
</script>
<style lang="">
.myanimate-enter-active {
  animation: show1 0.3s;
}
  .myanimate-leave-active {
  animation: leave 0.3s;
}

.addressimg img {
  position: absolute;
  right: 10px;
}

.footmodel {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0px;
  left: 0;
}
.footmodel .modelmain div {
  background-color: #fff;
  padding: 13px;
  text-align: center;
  border-bottom: 1px solid #e5e5ee;
  font-size: 18px;
  color: #666;
}
.footmodel .modelmain span {
  display: block;
  background-color: #fff;
  padding: 13px;
  text-align: center;
  border-bottom: 1px solid #e5e5ee;
  font-size: 18px;
  color: #666;
}
.footermain {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: show1 0.3s;
  border-radius: 8px 8px 0 0;
}
.modelfooter {
  width: 100%;
  display: flex;
  margin-top: 6px;
  background-color: #fff;

  line-height: 50px;
}
.modelfooter div {
  width: 100%;
  text-align: center;
}

.footmodel .modelmain div:hover{
  background-color: #e5e5e5;;
}
@keyframes show1 {
  0% {
    bottom: -241px;
  }

  100% {
    bottom: 0px;
  }
}

@keyframes leave {
  100% {
    bottom: 0px;
  }

  0% {
    bottom: -362px;
  }
}
</style>
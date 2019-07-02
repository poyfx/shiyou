<template>
  <div>
    <mt-header class="titleAll" title="提油记录">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="oilCode">
      <div class="oilCodeBox">
        <img src="@/assets/img/code.png" alt />
      </div>
    </div>
    <div class="mhome bgcf otherOilCode">
      <p>提油码发送他人代提</p>
      <mt-field placeholder="代提人手机号"></mt-field>

      <input type="checkbox" class="check" value="已阅读" @click="check" :checked="checked" />
      <span>已阅读</span>

      <a href="javascript:;">免责条款</a>
      <div class="nextBox">
        <mt-button
          type="default"
          size="large"
          class="btn"
          @click="send"
          v-show="checkes"
          style="background:rgba(0,0,0,0.2)"
        >发送</mt-button>
        <mt-button type="primary" size="large" class="btn" @click="send" v-show="!checkes">发送</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, MessageBox, DatetimePicker } from "mint-ui";
export default {
  data() {
    return {
      value: false,
      options: [
        {
          value: 1,
          label: "我同意"
        }
      ],
      checkes: true,
      checked: false
    };
  },
  methods: {
    check() {
      this.checkes = !this.checkes;
    },
    send() {
      if (this.checkes == true) {
        Toast("请阅读免责条款,勾选后方可发送");
      }
      if (this.checkes == false) {
        Toast("发送成功");
      }
    }
  }
};
</script>
<style lang="">
.oilCode {
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  border-radius: 4px;
}
.oilCodeBox {
  width: 275px;
  height: 275px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
}
.oilCodeBox > img {
  width: 245px;
  height: 245px;
}
.mint-cell-wrapper {
  border: 1px solid #e5e5e5;
}
.otherOilCode{
  padding-bottom:29% 
}
.otherOilCode p {
  font-size: 17px;
  color: #666;
}
.otherOilCode .mint-cell {
  margin: 15px 0 10px 0;
}
.otherOilCode .check {
  width: 15px;
  height: 15px;
  margin: 0 10px;
  -webkit-appearance: radio;
  appearance: radio;
  vertical-align: middle;
  background: #26a2ff;
}

.otherOilCode span,
a {
  font-size: 12px;
}
.otherOilCode span {
  color: #666;
}
</style>
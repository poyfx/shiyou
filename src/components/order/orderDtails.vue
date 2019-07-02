<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num detailsState">
        <div class="timeOut">
          <timer  endTime="1728000000" :callback="callback" endText="已经结束了"></timer>
          <!-- <span class="time">00:00:00</span>1562126113.395 -->
          <span class="timeOver">订单自动取消</span>
        </div>
        <div class="stateBox">
          <p class="state1">
            订单状态：
            <span>待付款</span>
          </p>
          <p class="state2">
            当前价格：
            <span>￥6300</span>/吨
          </p>
          <p class="state2">
            市场定价：
            <span>￥6300</span>/吨
          </p>
        </div>
        <div class="discount">
          <p>已优惠</p>
          <span>10%</span>
        </div>
      </div>
      <div class="fget-num">
        <div class="orderDetails">
          <p>
            订单编号：
            <span>2817273654213</span>
          </p>
          <p>
            下单时间：
            <span>2019-12-12 20:20</span>
          </p>
          <p>
            购油单位：
            <span>XXXXX公司</span>
          </p>
          <p>
            油品类型：
            <span>92#乙醇汽油</span>
          </p>
          <p>
            购油数量：
            <span>90.00000</span>吨
          </p>
          <p>
            提油方式：
            <span>配送</span>
          </p>
          <p>
            <span>送油地址：</span>

            <textarea name id cols="28" readonly rows="3">广东省深圳市龙华区某某大厦1503广东省深圳市龙华区某某大厦1503广东省深圳市龙华区某某大厦1503</textarea>
          </p>
        </div>
      </div>
      <div class="pay">
        <p>
          配送金额：
          <span style="margin-left: 16px;">￥100.00</span>
        </p>
        <p>
          油品总金额：
          <span>￥540000.00</span>
        </p>
        <p>
          订单总金额：
          <span>￥540100.00</span>
        </p>
      </div>
      <div class="orderBtn">
        <button @click="cancelOrder">取消订单</button>
        <button class="blue" @click="sureBuy">确认购买</button>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click.native="tell">提醒财务确认收款</mt-button>
      </div>
    </div>
  </div>
</template>>
<script>
import headers from "../component/header";
import timer from "../component/timer"
import { MessageBox,Toast } from "mint-ui";
export default {
  data() {
    return {
      title: "订单详情"
    };
  },
  methods: {
    sureBuy() {
      this.$router.push("/invoice");
    },
    cancelOrder() {
      MessageBox.confirm("确定取消订单?")
        .then(action => {
          console.log(action);
        })
        .catch(cancel => {
          console.log(cancel);
        });
    },
    tell(){
     Toast('已提醒财务确认,请耐心等待')
    },
    callback(){
     
    }
  },
  components: {
    headers,
    timer
  }
};
</script>
<style lang="">
</style>
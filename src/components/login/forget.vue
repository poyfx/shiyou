<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNum">
          <button class="getCode"  @click="getCode" v-show="show" href="javascript:;">获取验证码</button>
           <button class="getCode1" @click="getCode" v-show="!show" :disabled="disabled" >重新获取({{count}}s)</button>
        </mt-field>

        <mt-field label="验证码" placeholder="请输入验证码" type="text" v-model="number"></mt-field>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click="nextTep">下一步</mt-button>
      </div>
    </div>
  </div>
</template>>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
import headers from "../component/header";
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: "forget",
  data() {
    return {
      title: "忘记密码",
      phoneNum: "",
      number: "",
      code: "",
      count:60,
      show:true,
      disabled:true,
      Toastcount:''
    };
  },
  methods: {
    getCode() {
      const that = this;
      if (this.phoneNum != "" && this.phoneNum != null) {
        console.log(this.phoneNum);
        if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
          return Toast({
            message: "请填写正确的手机号码",
            duration: 2000
          });
        } else {
          that.timeDown(60);
          that.show = false;
          axios
            .get("static/json/phone.json")
            .then(res => {
              res.data.data.forEach(el => {
                Toast({
                  message: "请输入验证码" + el.number,
                  duration: 2000
                });
                that.code = el.number;
              });
            })
            .catch(err => {
              return Toast({
                message: "获取验证码失败",
                duration: 2000
              });
            });
        }
      } else if (this.phoneNum == "" || this.phoneNum == null) {
        return Toast({
          message: "手机号码不能为空",
          duration: 2000
        });
      }
    },
    timeDown(time){
      if(time == 0){
        this.show = true;
        this.disabled  = false;
        clearTimeout;
        return;
      }else{
        this.disabled  = true;
       this.count = time--;
      }
      const that = this;
      setTimeout(() => {
         that.timeDown(time)
      },1000)
    },
    nextTep() {
      const that =this;
      if (this.phoneNum != "" && this.phoneNum != null) {
        if (this.number != "" && this.number != null) {
          if (this.code == this.number) {

            Toast({
              message: "验证成功",
              duration: 1000
            });
            setTimeout(function(){
              that.$router.push("/setpwd");
            },1200)
            
          } else {
            Toast({
              message: "验证码错误",
              duration: 2000
            });
          }
        } else if (this.number == "" || this.number == null) {
          return Toast({
            message: "验证码不能为空",
            duration: 2000,
          });
        }
      } else if (this.phoneNum == "" || this.phoneNum == null) {
        return Toast({
          message: "手机号码不能为空",
          duration: 2000
        });
      }
    }
  },
  components: {
    headers
  }
};
</script>
<style>
  .getCode{
    background-color: #fff;
    color:#009DFF
  }
  .getCode1{
    background-color: #fff;
  }
</style>
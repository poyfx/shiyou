<template>
  <div>
    <headers :title="title" :home="home"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field
          label="新密码"
          placeholder="输入新密码"
          :type="inputype1"
          @blur.native.capture="blur"
          v-model="password1"
        >
          <img @click="showname1" v-if="show1" src="@/assets/img/nopwd.png" alt>
          <img @click="showname1" v-if="!show1" src="@/assets/img/showpwd.png" alt>
        </mt-field>
        <mt-field label="密码" placeholder="再次输入密码" :type="inputype2" v-model="password2">
          <img @click="showname2" v-if="show2" src="@/assets/img/nopwd.png" alt>
          <img @click="showname2" v-if="!show2" src="@/assets/img/showpwd.png" alt>
        </mt-field>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click="setNext">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "../component/header";
import { Toast } from "mint-ui";
export default {
  name: "Setpwd",
  data() {
    return {
      title: "设置密码",
      password1: "",
      password2: "",
      show1: true,
      show2: true,
      inputype1: "password",
      inputype2: "password",
      leng: "",
      home:2
    };
  },
  methods: {
    showname1() {
      var me = this;
      if (this.show1 == false) {
        me.show1 = true;
        me.inputype1 = "password";
      } else {
        me.show1 = false;
        me.inputype1 = "text";
      }
    },
    showname2() {
      var me = this;
      if (this.show2 == false) {
        me.show2 = true;
        me.inputype2 = "password";
      } else {
        me.show2 = false;
        me.inputype2 = "text";
      }
    },
    blur() {
      this.leng = this.password1.split("");
      if (this.leng.length < 6) {
        Toast({
          message: "密码最少6位",
          duration: 2000
        });
      }
    },
    setNext() {
      const that = this;
      if (this.password1 != "" && this.password1 != null) {
        if (this.leng.length < 6) {
         return Toast({
            message: "密码最少6位",
            duration: 2000
          });
        } else {
          if (this.password1 != this.password2) {
           return Toast({
              message: "两次输入密码不一样，请重新输入",
              duration: 2000
            });
          } else {
            Toast({
              message: "修改密码成功",
              duration: 1500
            });
            setTimeout(function() {
              that.$router.push("/login");
            }, 2000);
          }
        }
      } else {
      return  Toast({
          message: "请输入密码",
          duration: 1000
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
</style>

<template>
  <div class="background">
    <div class="mhome">
      <div class="mt81">
        <p class="p-img">
          <img class="loginimg" src="@/assets/img/logo.png" alt />
        </p>
        <p class="p-font">
          <span>欢迎来到安徽石油商户中心</span>
        </p>
      </div>
      <div class="input-box">
        <form action>
          <mt-field placeholder="用户名/手机号" class="username" disableClear v-model="username"></mt-field>
          <mt-field
            placeholder="密码"
            v-model="password"
            disableClear
            class="password"
            :type="inputype"
          >
            <img @click="showname" v-if="show" src="@/assets/img/nopwd.png" alt />
            <img @click="showname" v-if="!show" src="@/assets/img/showpwd.png" alt />
          </mt-field>
          <!-- <p>
            <input type="text" class="dbn in-first" v-model="username" placeholder="用户名/手机号">
          </p>
          <p class="p-psw">
            <input :type="inputype" class="dbn in-secend" v-model="password" placeholder="密码">
            <img @click="showname" v-if="show" src="@/assets/img/nopwd.png" alt>
            <img @click="showname" v-if="!show" src="@/assets/img/showpwd.png" alt>
          </p>-->
          <p class="info">
            <span class="forgetPwd">
              <router-link to="/forget">忘记密码</router-link>
            </span>
            <span class="reginsterNew">
              没有账号？
              <router-link to="/register">马上注册</router-link>
            </span>
          </p>
          <mt-button type="primary" size="large" class value="登录" @click="login">登录</mt-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { Login } from "./api/login";
import { Toast } from "mint-ui";
import "@/assets/css/login.css";
import crypto from "crypto";
export default {
  name: "login",
  data() {
    return {
      password: "",
      username: "",
      inputype: "password",
      show: true
    };
  },
  //   beforeCreate () {

  //   document.querySelector('html').setAttribute('style', 'background-color:#fff')

  // },
  methods: {
    showname() {
      var me = this;
      if (this.show == false) {
        me.show = true;
        me.inputype = "password";
      } else {
        me.show = false;
        me.inputype = "text";
      }
    },
    login() {
      if (this.username != "" && this.username != null) {
        if (this.password != "" && this.password != null) {
            var md5 = crypto.createHash("md5");
                  md5.update(this.password); //需要加密的密码
                  var password = md5.digest("hex"); //password 加密完的密码
                  console.log(password)
          Login(this.username, password)
            .then(res => {
              if(res.status == "200" ){
                res.data.data.forEach(element => {
                  console.log(element)
                 this.$router.push({path:"/home",query:{data:element}});
                });
              
               
              }else{
                return Toast("账号或密码错误");
              }
              // res.data.data.forEach(element => {
              //   console.log(element);
              //   if (
              //     this.username == element.name &&
              //     this.password == element.password
              //   ) {
                
                   
              //   } else {
              //     return Toast("账号或密码错误");
              //   }
              // });
            })
            .catch(err => {
              return err;
            });

          // axios
          //   .get("static/json/a.json")
          //   .then(res => {
          //     //console.log(res.data.data)
          //     res.data.data.forEach(element => {
          //       console.log(element);
          //       if (
          //         this.username == element.name &&
          //         this.password == element.password
          //       ) {
          //         this.$router.push({path:"/home",name:'home',query:{data:element}});
          //       } else {
          //         return Toast('账号或密码错误');
          //       }
          //     });
          //   })
          //   .catch(err => {
          //     return;
          //   });
        } else {
          return Toast("密码不能为空");
        }
      } else {
        return Toast({
          message: "账号不能为空"
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-color: #fff;
  /* min-height: 700px  */
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
.loginimg {
  width: 100px;
}
</style>

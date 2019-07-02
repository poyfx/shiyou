<template>
  <div>
    <headers :title="title"></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field
          label="角色"
          placeholder="请选择"
          type="text"
          v-model="user"
          style="font-size:12px"
          readonly
          v-verify.growl="user"
          @click.native="modeShow"
        > 
        <label v-verified="verifyError.user"></label>
          <img src="@/assets/img/right.png" alt>
         
        </mt-field>

        <mt-field
          label="公司"
          placeholder="XXXX有限公司"
          type="text"
          v-model="company"
          v-verify="company"
          @click.native="GoOilByCompany"
        >
         <label v-verified="verifyError.company"></label>
          <img src="@/assets/img/right.png" alt>
         
        </mt-field>

        <mt-field label="姓名" placeholder="请输入姓名" type="text" v-model="userName" v-verify="userName">
          <label v-verified="verifyError.userName"></label>
        </mt-field>

        <mt-field
          label="身份证"
          placeholder="请输入18位身份证号"
          type="text"
          v-model="userId"
          v-verify="userId"
        >
          <label v-verified="verifyError.userId"></label>
        </mt-field>

        <mt-field
          label="手机号"
          placeholder="请输入手机号"
          type="tel"
          v-model="phoneNum"
          v-verify="phoneNum"
        >
          <label v-verified="verifyError.phoneNum"></label>
        </mt-field>

        <mt-field label="所在城市" placeholder="如：广东省深圳市" type="text" v-model="city" v-verify="city">
          <label v-verified="verifyError.city"></label>
        </mt-field>

        <mt-field
          label="客户经理姓名"
          placeholder="请输入姓名"
          type="text"
          v-model="customerName"
          v-verify="customerName"
        >
          <label v-verified="verifyError.customerName"></label>
        </mt-field>

        <mt-field
          label="登录密码"
          placeholder="请输入密码"
          :type="inputype1"
          v-model="password1"
          v-verify="password1"
        >
          <label v-verified="verifyError.password1"></label>
          <img @click="showname1" v-if="show1" src="@/assets/img/nopwd.png" alt>
          <img @click="showname1" v-if="!show1" src="@/assets/img/showpwd.png" alt>
        </mt-field>

        <mt-field
          label="确认密码"
          placeholder="请再次输入密码"
          :type="inputype2"
          v-model="password2"
          v-verify="password2"
        >
          <label v-verified="verifyError.password2"></label>
          <img @click="showname2" v-if="show2" src="@/assets/img/nopwd.png" alt>
          <img @click="showname2" v-if="!show2" src="@/assets/img/showpwd.png" alt>
        </mt-field>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click="nextTep">下一步</mt-button>
      </div>
    </div>
    <!-- 选择角色 -->
    <div class="footmodel" v-show="mode">
      <transition name="myanimate">
        <div class="footermain">
          <div class="modelmain">
            <span>- 请选择角色 -</span>
            <div @click="chooseOne">购油人</div>
            <div @click="chooseOne">提油人</div>
            <div @click="chooseOne">购油人和提油人</div>
          </div>
          <div class="modelfooter">
            <div @click="chooseOilLeave">取消</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import { Toast } from "mint-ui";
import headers from "../component/header";
export default {
  name: "Register",
  data() {
    return {
      title: "注册",
      user: "", //角色
      userName: "", //姓名
      userId: "", //身份证
      company: "", //公司
      phoneNum: "", //电话号码
      city: "", //城市
      customerName: "", //客户经理
      password1: "", //登录密码
      password2: "", //确认密码
      show1: true,
      show2: true,
      inputype1: "password",
      inputype2: "password",
      mode: false
    };
  },
  created(){
    this.getRouter();
  },
  verify: {
    user: [
      "required",
      {
        test: function(val) {
          if (val.length < 2) {
            return false;
          }
          return true;
        },
        message: "不得小于2位"
      }
    ],
    userName: "required",
    company: "required",
    userId: [
      "required",
      {
        test: function(val) {
          if (val.length < 18) {
            return false;
          }
          return true;
        },
        message: "不得少于18位"
      }
    ],
    phoneNum: [
      "required",
      {
        test: /^1[34578]\d{9}$/,
        message: "请输入11位正确号码"
      }
    ],
    city: "required",
    customerName: "required",
    password1: [
      "required",
      {
        test: function(val) {
          if (val.length < 6) {
            return false;
          }
          return true;
        },
        message: "密码长度不得少于6位"
      }
    ],
    password2: [
      "required",
      {
        test: function(val) {
          if (val != this.password1) {
            return false;
          }
          return true;
        },
        message: "两次密码不一致"
      }
    ]
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
    nextTep() {
      if (this.$verify.check()) {
        if(this.user == '购油人和提油人'){
           this.$router.push("/positive.1");
        }else{
          this.$router.push("/positive");
        }
       
      }
    },
    GoOilByCompany() {
      this.$router.push("/oilByCompany");
    },
    chooseOne(val) {
      this.mode = !this.mode;
      this.user = val.target.innerHTML;
    },
    modeShow() {
      this.mode = !this.mode;
    },
     chooseOilLeave() {
      this.mode = !this.mode;
    },
    getRouter(){
      this.company = this.$route.query.addresss
    }
  },
  computed: {
    verifyError: function() {
      return this.$verify.$errors;
    }
  },
  components: {
    headers
  }
};
</script>

<style scope>
.fget-num .mint-cell-title,
.mint-cell-value {
  font-size: 14px;
}
.mint-field-other > label {
  color: red;
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

.footmodel .modelmain div:hover {
  background-color: #e5e5e5;
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
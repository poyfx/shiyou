<template>
  <div class="box">
    <div class="titleAll">
      <div>我的</div>
    </div>
    <div class="mhome">
      <div class="userIntegral bgcf">
        <div class="company userIntegraltitle">
          <p>
            <img src="@/assets/img/company.png" alt>公司
          </p>
          <span>合肥建成合肥建成合肥建成合肥建成</span>
        </div>
        <div class="integral">
          <p>2989</p>
          <span>积分</span>
        </div>
      </div>
      <div class="fget-num userinfo bgcf userIntegraltitle">
        <p>
          <img src="@/assets/img/user.png" alt>个人信息
        </p>
        <mt-field 
        label="姓名" 
        value="1" 
        disableClear 
        v-model="username" 
        readonly>
        </mt-field>

        <mt-field
          label="手机号"
          value="1"
          disableClear
          v-model="phoneNum"
          readonly
          @click.native="editInfo">
          <span class="setphone">修改</span>
          <img src="@/assets/img/right.png" alt>
        </mt-field>
        <mt-field 
        label="所在城市" 
        value="1" 
        disableClear 
        v-model="city" 
        readonly>
        </mt-field>

        <mt-field 
        label="客户经理" 
        value="1" 
        disableClear 
        v-model="customerName" 
        readonly>
        </mt-field>
      </div>
      <div class="fget-num out bgcf">
          <mt-field label="申请权限" readonly @click.native="apply">
          <img src="@/assets/img/right.png" alt>
        </mt-field>

        <mt-field label="收货地址" readonly @click.native="editAddress">
          <img src="@/assets/img/right.png" alt>
        </mt-field>

        <mt-field label="修改密码" disableClear readonly @click.native="editPsd">
          <img src="@/assets/img/right.png" alt>
        </mt-field>

        <mt-button class="btn" @click.native="outsafe">安全退出</mt-button>
      </div>
    </div>
    <div class="footer">
      <div @click="checkHome">
        <img src="@/assets/img/home2.png" alt>
        <p>首页</p>
      </div>
      <div class="footerActive">
        <img src="@/assets/img/mine2.png" alt>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      username: "Mr.李",
      phoneNum: "15877771111",
      compeny: "合肥城建",
      city: "合肥",
      customerName: "李勇"
    };
  },
  methods: {
    checkHome() {
      this.$router.push("/home");
    },
    editInfo() {
      this.$router.push("/userInfo");
    },
    editAddress() {
      this.$router.push("/harvestaddress");
    },
    editPsd() {
      this.$router.push("/modify");
    },
    outsafe() {
      MessageBox.confirm("退出当前账号")
        .then(action => {
          console.log(action);
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    },
    apply(){
      this.$router.push('/apply')
    }
  },
  components: {}
};
</script>
<style lang="" scope>
.box{
  margin-bottom: 56px;
}
.titleAll div {
  line-height: 44px;
}
</style>
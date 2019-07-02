<template>
  <div>
    <headers :title="title"></headers>
    <div class="mhome">
      <div class="harvest">
        <div class="harvest-name">
          <p>Mr.李</p>
          <p>13111112222</p>
        </div>
        <div class="harvest-address">
          <p>广东省深圳市龙华区某某大厦2113</p>
        </div>
        <div class="harvest-write">
          <form>
            <el-radio v-model="radio" label="1" @change="sure">设置为默认地址</el-radio>
          </form>
          <p>
            <button type="defult" class="write" size="small" @click="edit">编辑</button>
            <button type="defult" class="write" size="small" @click="delate">删除</button>
          </p>
        </div>
      </div>
      <div class="harvest">
        <div class="harvest-name">
          <p>Mr.李</p>
          <p>13111112222</p>
        </div>
        <div class="harvest-address">
          <p>广东省深圳市龙华区某某大厦2113</p>
        </div>
        <div class="harvest-write">
          <form>
            <el-radio v-model="radio" label="2" @change="sure">设置为默认地址</el-radio>
          </form>

          <p>
            <button type="defult" class="write" size="small">编辑</button>
            <button type="defult" class="write" size="small">删除</button>
          </p>
        </div>
      </div>
      
    </div>
    <div class="newaddress">
      <button class="btn" @click="newadd">新增地址</button>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";
import { MessageBox } from "mint-ui";
export default {
  name: "UserInfo",
  data() {
    return {
      title: "收货地址",
      radio: "1"
    };
  },
  methods: {
    edit() {
      this.$router.push("/editAddress");
    },
    delate() {
      MessageBox.confirm("确认删除吗")
        .then(action => {
          console.log(action);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sure() {
      console.log(this);
      MessageBox.confirm("确定选择该地址为默认地址")
        .then(action => {
          console.log(action);
        })
        .catch(err => {
          console.log(err);
        });
    },
    newadd() {
      this.$router.push("/newaddress");
    }
  },
  components: {
    headers
  }
};
</script>
<style lang="">
.setaddress {
  outline: block;
  -webkit-appearance: block;
  border-radius: 50%;
  /* margin: 0; */
  border: block;
}
</style>